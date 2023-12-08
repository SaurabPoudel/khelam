import { useNavigate } from "react-router-dom";
import { socket } from "../socket";
import { useUser } from "../contexts/UserContext";
const Home = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const handleJoinRoom = () => {
    socket.emit("join room", user);
    navigate(user?.room || "");
  };
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center w-full md:max-w-4xl  h-1/2 border-2 border-gray-400 rounded-2xl">
        <h1 className="text-green-500 text-3xl pb-5 pt-2"> Game Room </h1>
        <img
          src="/game-room.svg"
          width="200px"
          height="200px"
          className="rounded pb-5"
        />
        <form
          onSubmit={() => handleJoinRoom()}
          className="flex flex-col w-full items-center"
        >
          <div className="flex flex-col w-full gap-2 items-center">
            <input
              className="w-1/2 text-black py-2 px-1 rounded-sm"
              placeholder="Enter username  ..."
              value={user?.username || ""}
              onChange={(e) =>
                setUser?.({ ...user!, username: e.target.value })
              }
            />
            <input
              className="w-1/2 text-black py-2 px-1 rounded-sm"
              placeholder="Drop Room code here ..."
              value={user?.room || ""}
              onChange={(e) => setUser({ ...user!, room: e.target.value })}
            />
          </div>
          <div className="flex  w-full justify-center">
            <button
              className="w-1/4 mx-auto bg-blue-700 py-2 px-1 rounded-lg text-xl mt-5 hover:bg-blue-900 text-white"
              onClick={() => handleJoinRoom()}
            >
              {" "}
              Create Room
            </button>
            <button
              className="w-1/4 mx-auto bg-green-700 py-2 px-1 rounded-lg text-xl mt-5 hover:bg-green-900 text-white"
              onClick={() => handleJoinRoom()}
            >
              {" "}
              Join
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Home;
