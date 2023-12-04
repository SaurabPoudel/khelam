const games = [
{
  "id": 1,
  "name": "Screen-Score",
  "imageUrl":"screenscore.png",
},
]
const GameMenu = () => {
  return (
    <div className="flex flex-col text-green-500 border-2 border-gray-400 w-2/3 rounded-xl px-4">
    <h1 className="text-center text-2xl"> Choose your game</h1>
    <div className="flex flex-row">
    {games.map((game)=>(
    <div className="pb-4">
    <div className="text-center"> {game.name}</div>
    <img src={game.imageUrl} width="250px" height="350px" className="mb-3 border-gray-400 border-2 rounded"/>
    <button className="bg-green-500 hover:bg-green-700 text-black hover:text-white py-2 px-4 hover:scale-[1.1] rounded mx-20"> Play </button>
    </div>
    ))}    
    </div>
    </div>
  )
}

export default GameMenu 
