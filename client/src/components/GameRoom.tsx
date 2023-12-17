import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { socket } from "../socket";
import { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";

interface Message {
  message: string;
  username: string;
}
const GameRoom = () => {
  const [chats, setChats] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const gameRoom = location.pathname.slice(1);
  useEffect(() => {
    console.log("Mouting the component");

    const handleChatMessage = (msg: Message) => {
      console.log("Received chat message:", msg);
      setChats((prevMessage) => [...prevMessage, msg]);
    };

    socket.on("chat message", handleChatMessage);

    return () => {
      socket.off("chat message", handleChatMessage);
    };
  }, []);
  console.log(chats);
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() !== "") {
      socket.emit("chat message", {
        message: message,
        username: user?.username,
      });
      setMessage("");
    }
  };
  const handleLeaveRoom = () => {
    socket.disconnect();
    navigate("/");
  };
  if (!user) return null;

  return (
        <div className="text-green-500 flex justify-center items-center h-screen">
      <div className="top-0 right-0 w-[300px] h-[200px] bg-green-500 absolute text-black z-40">
        {" "}
        Player one{" "}
      </div>
      <Outlet />
      <div className="right-0   top-1/4  text-white  pb-4  w-[16vw] h-3/4  absolute overflow-y-auto">
        <div className="flex flex-col gap-4">
          {chats.map((chat, index) => (
            <div className="text-white flex flex-row gap-4" key={index}>
              <span>{chat.username}:</span>
              <span>{chat.message}</span>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          className="bottom-0 right-0 absolute mb-3 w-[16vw] text-black"
          placeholder="chat here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>

      <div className="bottom-0 left-0 w-[300px] h-[200px] bg-green-500 absolute text-black z-40">
        {" "}
        Player two
      </div>
      <div className="absolute bottom-0 left-1/2 pb-3 flex">
        <span className="pr-3 text-xl text-green-500 pt-2">
          {" "}
          {user.username}:
        </span>
        <span className="pr-5 text-xl text-white pt-2"> {gameRoom}</span>
        <button
          className="text-white bg-red-500 py-2 px-3 rounded-lg"
          onClick={() => handleLeaveRoom()}
        >
          {" "}
          Leave Room{" "}
        </button>
      </div>
    </div>
  );
};

export default GameRoom;
