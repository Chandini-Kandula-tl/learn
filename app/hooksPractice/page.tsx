"use client";

import { Button, Space } from "antd";
import { useReducer } from "react";

interface StateProps {
  age: number;
}
interface Action {
  type: "incremented_age" | "decremented_age" | "reset";
}

const reducer = (state: StateProps, action: Action): StateProps => {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  return state;
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { age: 20 });
  return (
    <Space>
      <Button
        className="bg-black text-white"
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </Button>
      <Button
        className="bg-black text-white"
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Decrement age
      </Button>
      <Button
        className="bg-black text-white"
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Reset age
      </Button>
      <p>Hello! You are {state?.age}.</p>
    </Space>
  );
};
export default Counter;

// import { Button } from "antd";
// import { useReducer } from "react";

// function reducer(state, action) {
//   if (action.type === "incremented_age") {
//     return {
//       age: state.age + 1,
//     };
//   }
//   throw Error("Unknown action.");
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, { age: 42 });

//   return (
//     <>
//       <Button
//         className="bg-black text-white"
//         onClick={() => {
//           dispatch({ type: "incremented_age" });
//         }}
//       >
//         Increment age
//       </Button>
//       <p>Hello! You are {state.age}.</p>
//     </>
//   );
// }
