import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import ScoreTheGoal from "./components/games/ScoreTheGoal"

const App = () => {
  return (
    <div className="">
    <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/score-the-goal" element={<ScoreTheGoal/>}/>
    </Routes>
    </div>
  )
}

export default App
