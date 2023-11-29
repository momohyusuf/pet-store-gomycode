import React from "react";
import { decrement } from "../features/counter/counterSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Welcome to my home page</h1>

      <button onClick={() => dispatch(decrement())}>decrease value</button>
    </div>
  );
};

export default Home;
