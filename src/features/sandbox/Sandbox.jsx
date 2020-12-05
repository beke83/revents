import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
//hook into our react app by using useDispatch hook
    const dispatch = useDispatch();

  //useSelector is a hook to access the redux store's state
  const data = useSelector((state) => state.test.data);

  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data} </h3>
      <Button onClick={() => dispatch(increment(20))} content='Increment' color='green' />
      <Button onClick={() => dispatch(decrement(10))} content='Decrement' color='red' />
    </>
  );
}
