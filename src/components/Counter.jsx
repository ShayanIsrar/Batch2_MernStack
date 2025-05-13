import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="flex flex-col text-center mt-16 font-bold text-3xl text-gray-400 m-auto">
        <h1>Counter</h1>
      </div>
      <div className="text-center mt-16 font-bold text-3xl text-green-400 m-auto ">
        {count}
      </div>
      <div className="flex items-center justify-center gap-24 mt-28">
        <button
          className="bg-green-600 text-white font-bold italic px-3 py-2 rounded hover:cursor-pointer"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className={`${
            count == 0
              ? "bg-gray-300 cursor-not-allowed font-bold italic px-3 py-2 rounded text-white"
              : "bg-red-600 text-white font-bold italic px-3 py-2 rounded cursor-pointer"
          }   `}
          onClick={decrement}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button
          className="bg-gray-600 text-white font-bold italic px-3 py-2 rounded hover:cursor-pointer"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
