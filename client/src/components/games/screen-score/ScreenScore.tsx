import { Dispatch, SetStateAction, useEffect, useState } from "react";
type CounterProps = {
  visible: boolean;
  show: Dispatch<SetStateAction<boolean>>;
  count: number;
};
enum Player {
  Player1,
  Player2,
}
type BarProps = {
  player : Player;
  position : number;
}
const ScreenScore = () => {
  const [isCountDownVisible, setIsCountDownVisible] = useState(true);

  return (
    <section className="w-2/3 h-2/3 border-2 border-gray-400 flex flex-col gap-4 rounded-lg  items-center  text-white">
      <h1 className="text-3xl mx-auto py-3"> Score Screen</h1>
      <Counter
        visible={isCountDownVisible}
        show={setIsCountDownVisible}
        count={4}
      />
      {!isCountDownVisible && (
      <GameContainer />
      )}
    </section>
  );
};
const Counter = ({ visible, show, count }: CounterProps) => {
  const [counter , setCount] = useState(count)
 function handleClose(){
   show(false);
 }
 useEffect(()=>{
   setInterval(()=> setCount(counter - 1), 1000)
    setTimeout(()=> handleClose(), 4000)
    })
   if (!visible) return null;
  return <div className="py-3 flex flex-col gap-10 items-center ">
  <h1 className="text-6xl text-blue-500 ">  Game Starts In</h1>
  <h1 className="text-6xl text-red-500 ">{counter}</h1>

 </div> ;
};

const GameContainer = () => {
  return (
    <div className="w-2/3 h-full flex relative border-2 border-red-500">
      <Bar player={Player.Player1} position={100}/>
      <Bar player={Player.Player2} position={2}/>
    </div>
  );
}

const Bar = ({player,position}:BarProps) => {
  return (

  <div className={`h-36 w-4 bg-red-500 absolute ${player === Player.Player1 ? 'bg-red-500 left-5' : 'bg-blue-500 right-5'}` } style={{ top: `${position}px` }}></div>
  )
}
export default ScreenScore;
