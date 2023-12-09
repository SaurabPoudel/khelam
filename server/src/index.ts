import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
const httpServer = createServer(app);

interface User {
  username: string;
  room: string;
}
interface Message {
  message: string;
}
interface CallData {
  userToCall: string;
  signalData: string;
  from: string;
  to: string;
  name: string;
}
const activeUsers: Record<string, User> = {};

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("a user connected");

  socket.on("join room", ({ room, username }: User) => {
    socket.join(room);
    activeUsers[socket.id] = { username, room };
    console.log(`${username} joined room ${room}`);
  });
  socket.on("request call", (data: CallData) => {
    io.to(data.userToCall).emit("requestCall", {
      signal: data.signalData,
      from: data.from,
      name: data.name,
    });
  });

  socket.on("accept call", (data: CallData) => {
    io.to(data.to).emit("call accepted", { signal: data.signalData });
  });

  socket.on("chat message", (msg: Message) => {
    console.log("Recieved message : ", msg);
    const user = activeUsers[socket.id];
    const room = user.room;
    io.to(room).emit("chat message", {
      message: msg.message,
      username: user.username,
    });
  });
  socket.on("disconnect", () => {
    const user = activeUsers[socket.id];
    if (user) {
      const { username, room } = user;
      console.log(`${username} disconnected from room: ${room}`);
      delete activeUsers[socket.id];
    }
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is listening  http://localhost:${PORT} 😝`);
});
