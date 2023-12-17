import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GameRoom from "./components/GameRoom";
import GameMenu from "./components/games/GameMenu";
import ScreenScore from "./components/games/screen-score/ScreenScore";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<GameRoom />}>
          <Route index element={<GameMenu />} />
          <Route path=":screen-score" element={<ScreenScore />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
