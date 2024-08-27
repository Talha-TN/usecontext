import React from "react";
import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state > 0 ? state - 1 : initialState;
  }
  if (action.type === "MULTIPLY") {
    return state + 1 * 5;
  }
  if (action.type === "Reset") {
    return state;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "MULTIPLY" })}>multiply</button>
      <button onClick={() => dispatch({ type: "Reset" })}>reset</button>
    </div>
  );
};
export default UseReducer;
////////////////////////////////////
// import React, { useState, useRef } from "react";

// const UseRef = () => {
//   const [value, setValue] = useState(0);
//   let inputOneContext = useRef();
//   let inputTwoContext = useRef();

//   const handleButton = () => {
//     let sum = Number(inputOneContext.current.value) + Number(inputTwoContext.current.value);
//     setValue(sum);
//     inputOneContext.current.value = "";
//     inputTwoContext.current.value = "";
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-lg space-y-4">
//         <input
//           type="text"
//           ref={inputOneContext}
//           className="w-full p-2 border cursor-pointer border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter first number"
//         />
//         <input
//           type="text"
//           ref={inputTwoContext}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter second number"
//         />
//         <button
//           onClick={handleButton}
//           className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Add
//         </button>
//         <p className="text-center text-lg font-semibold">{value}</p>
//       </div>
   
//     </div>
//   );
// };

// export default UseRef;
