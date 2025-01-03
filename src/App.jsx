import { useState } from "react";
import "./App.css";
import DataInput from "./components/dataInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DataInput/>
    </>
  );
}

export default App;
