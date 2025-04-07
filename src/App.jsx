import { useState } from "react";
import "./App.css";

function App() {
  const [show, hehe] = useState(true);

  return (
    <>
      {show && <Child />}{" "}
      <button
        onClick={() => {
          hehe((prev) => !prev);
        }}
      >
        Toggle child
      </button>
    </>
  );
}

function Child() {
  return <>HI</>;
}
export default App;
