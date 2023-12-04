import { Outlet } from "react-router-dom"

const chatlog =  [
    {
      "id": 1,
      "user": "Fridman",
      "message": "Hey Oppenheimer, let's start the game!"
    },
    {
      "id": 2,
      "user": "Oppenheimer",
      "message": "Sure, Fridman! I'm ready."
    },
    {
      "id": 3,
      "user": "Fridman",
      "message": "I'll make the first move."
    },
    {
      "id": 4,
      "user": "Oppenheimer",
      "message": "Interesting move, Fridman. I respond with..."
    },
    {
      "id": 5,
      "user": "Fridman",
      "message": "Good move, Oppenheimer. Let me think about my next move."
    },
    {
      "id": 6,
      "user": "Oppenheimer",
      "message": "Take your time, Fridman. I'm ready for anything!"
    },
    {
      "id": 7,
      "user": "Fridman",
      "message": "Alright, Oppenheimer, I've made my move. Your move!"
    },
    {
      "id": 8,
      "user": "Oppenheimer",
      "message": "Interesting choice, Fridman. I see your move and raise you this!"
    },
    {
      "id": 9,
      "user": "Fridman",
      "message": "Bold move, Oppenheimer! Let me consider my options."
    },
    {
      "id": 10,
      "user": "Oppenheimer",
      "message": "Take your time, Fridman. Strategy is key in this game."
    },
    {
      "id": 11,
      "user": "Fridman",
      "message": "I've got my strategy set. Here comes my next move!"
    },
    {
      "id": 12,
      "user": "Oppenheimer",
      "message": "Impressive move, Fridman! I didn't see that coming. Let me respond..."
    },
    {
      "id": 13,
      "user": "Fridman",
      "message": "Thanks, Oppenheimer! This game is getting intense. Your move!"
    }
  
  ]
const GameRoom = () => {
  return (
    <div className="text-green-500 flex justify-center items-center h-screen">
    <div className="top-0 right-0 w-[300px] h-[200px] bg-green-500 absolute text-black z-40"> Player one </div>
    <Outlet/>
    <div className="right-0 top-1/4  text-white  pb-4  w-[16vw] h-3/4  absolute overflow-y-auto">
    <div className="flex flex-col gap-4">
    {chatlog.map((chat)=>(
    <div className="text-white flex flex-row gap-4" key={chat.id}>
    <span>{chat.user} </span>
    <span>{chat.message}</span>
    </div>
    ))}
    </div>
       </div>
     <input className="bottom-0 right-0 absolute mb-3 w-[16vw] text-black" placeholder="chat here..." type="text"/>

    <div className="bottom-0 left-0 w-[300px] h-[200px] bg-green-500 absolute text-black z-40"> Player two</div>
    </div>
  )
}

export default GameRoom
