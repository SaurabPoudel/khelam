import { Outlet } from "react-router-dom"

const GameRoom = () => {
  return (
    <div className="text-green-500 flex justify-center items-center h-screen">
    <div className="top-0 right-0 w-[300px] h-[200px] bg-green-500 absolute text-black z-40"> Player one </div>
    <Outlet/>
    <div className="right-0 top-25  text-white border-2 border-red-500  w-[15vw] h-screen z-0 absolute"> Chat
    <input className="bottom-0 left-0 absolute mb-3 w-full text-black" placeholder="chat here..."/>
    </div>
    <div className="bottom-0 left-0 w-[300px] h-[200px] bg-green-500 absolute text-black z-40"> Player two</div>
    </div>
  )
}

export default GameRoom
