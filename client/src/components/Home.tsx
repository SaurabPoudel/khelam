import { useState } from "react";
import { useNavigate } from "react-router-dom"
const Home = () => {
  const [room, setRoom] = useState("")
  const navigate = useNavigate();
  return (
  <section className="h-screen flex justify-center items-center" >
  <div className="flex flex-col items-center w-full md:max-w-4xl  h-1/2 border-2 border-gray-400 rounded-2xl">
    <h1 className="text-green-500 text-3xl pb-5 pt-2"> Game Room </h1>
    <img src="/game-room.svg" width="200px" height="200px" className="rounded pb-5"/>
    <form onSubmit={()=> navigate(room)} className="flex flex-col">
    <input className="w-full text-black py-2 px-1 rounded-sm" placeholder="Drop Room code here ..." value={room} onChange={(e)=> setRoom(e.target.value)} />
    <button className="w-1/2 mx-auto bg-green-700 py-4 px-6 rounded-xl text-xl mt-5 hover:bg-green-900 hover:text-white"  onClick={() => navigate(room)}> Join</button>
    </form>
  </div>
  </section> 
  )
}

export default Home
