import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/buttons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button la="delete" />
      <Button la="update" />
    </>
  );
}

export default App;
