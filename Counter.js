import { useState } from "react";
import Own from "./Components/Own";

const One = () => {
  let [counter, setCounter] = useState(0);

  //let counter = 10
  let addvalue = () => {
    // counter = counter + 1
    // console.log("add value", counter)
    if(counter < 20)
    setCounter(counter + 1);
  };

  const removevalue = () => {
 if(counter > 0)
      setCounter(counter - 1);
    
    //setCounter(counter - 1);
  };

  return (
    <>
      <div className="w-full h-screen  bg-slate-400 flex items-center justify-center ">
        <div className="card w-60 h-60 bg-blue-500 rounded-md">
          <div className=" flex  flex-col items-center justify-center mt-[20%] gap-2">
            <h1 className=" font-bold text-xl text-white">
              Lets start the counting
            </h1>
            <h2>Counter value:{counter} </h2>
            <div className="btn flex items-center justify-center mt-10 gap-2 text-white ">
              <button
                onClick={addvalue}
                class="px-2 py-2 bg-green-400 rounded-sm"
              >
                Add value{" "}
              </button>
              <button
                onClick={removevalue}
                className="px-1 py-2 bg-red-700 rounded-sm">
                Remove value
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default One;
