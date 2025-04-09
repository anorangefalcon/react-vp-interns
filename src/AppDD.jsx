import { useCallback, useMemo, useState } from "react";
import "./App.css";
import { NewComp } from "./NewComp";
const RandomData = [
  { email: "s@s.com", name: "Priyanshu" },
  { email: "j@s.com", name: "John" },
  { email: "r@s.com", name: "Rohit" },
];

function App() {
  const [show, hehe] = useState(true);
  const [data, setData] = useState(RandomData);

  // const onlyEmails = data.map((elem) => {
  //   console.log("this rendered again");

  //   return elem.email;
  // });

  const onlyEmails = useMemo(() => {
    console.log("memo render");
    return data.map((elem) => elem.email);
  }, [data]);

  // function getOnlyNames() {
  //   console.log("fnc rendered");
  //   return data.map((elem) => elem.name);
  // }

  // const getOnlyNames = useCallback(() => {
  //   console.log("fnc rendered");
  //   return data.map((elem) => elem.name);
  // }, [data]);

  const getOnlyNames = useCallback((hereData) => {
    console.log("fnc rendered");
    return hereData.map((elem) => elem.name);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setData((prev) => {
            return [...prev, { name: "hehe", email: "hehe@g.com" }];
          });
        }}
      >
        change Data {data.length}
      </button>
      <button
        onClick={() => {
          console.log(getOnlyNames(data));
        }}
      >
        get only Names
      </button>
      {/* {show && <Child />}{" "} */}
      {/* {RandomData.map((elem, index) => {
        return <NewComp name={elem.name} email={elem.email} />;
      })} */}
      <ul>
        {data.map((elem, index) => {
          return <li key={elem.email}>{elem.name}</li>;
        })}
      </ul>
      {/* <NewComp name={"Priyanshu"} email={"something@gmail.com"} /> */}
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
