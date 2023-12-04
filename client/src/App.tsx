import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import GameRoom from "./components/GameRoom"
import GameMenu from "./components/games/GameMenu"

const App = () => {
  return (
    <div className="">
    <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/:id" element={<GameRoom/>} >
   <Route index element={<GameMenu/>}/>
   </Route>
    </Routes>
    </div>
  )
}

export default App
