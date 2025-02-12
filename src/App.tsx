import { useState } from "react";
import "./App.css";
import Mainpage from "./components/Mainpage";

function App() {
  const [component, showComponent] = useState(false);
  const onStart = () => {
    showComponent(true);
  };
  return (
    <>{!component ? <button onClick={onStart}>START</button> : <Mainpage />}</>
  );
}

export default App;
