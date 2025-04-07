import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("hi from parent");
  }, []);

  return <ChildComp prop1={"h"} prop2={2} />;
}

function ChildComp({ prop1, prop2 }) {
  const [count, setCount] = useState(0);
  const stateRef = useRef(0);

  const [loadingVal, setLoadingVal] = useState(0);

  // function handleSmthing() {
  //   setCount((prev) => {
  //     return prev + 1;
  //   });
  //   setCount((prev) => {
  //     return prev + 1;
  //   });
  // }
  useEffect(() => {
    console.log("hi from child");
    console.log(stateRef);

    // setInterval(() => {
    //   // setLoadingVal((prev) => prev + 1);
    //   stateRef.current += 1;
    // }, 50);

    // const idx = setInterval(() => {
    //   setLoadingVal(stateRef.current);
    // }, 2000);

    // return () => {
    //   clearInterval(idx);
    // };
  }, []);

  // useEffect(()=>{
  //   return ()=>{

  //   }
  // }, [])

  return (
    <>
      <h1>hi</h1>
      <p>Hello World</p>
      <div>{count}</div>
      {/* <button onClick={handleSmthing}>increment</button> */}
      {/* <div ref={stateRef}>Thi is somthing</div> */}

      <div>{loadingVal}</div>
    </>
  );
}
export default App;
