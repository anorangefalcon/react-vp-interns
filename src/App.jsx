import Home from "./Components/Home";
import About from "./Components/About";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      This is my Website
      {/* <Home />
      <About /> */}
      <Outlet />
    </>
  );
}
