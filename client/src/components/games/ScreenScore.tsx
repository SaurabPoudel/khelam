import { Dispatch, SetStateAction, useEffect, useState } from "react";
type CounterProps = {
  visible: boolean;
  show: Dispatch<SetStateAction<boolean>>;
  count: number;
};
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
export default ScreenScore;
