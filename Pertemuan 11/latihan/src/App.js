import React, { useState } from "react";
import Timer from "./Timer";
const App = () => {
  const [counter, setCounter] = useState(0);
  // return <Timer appTitle="Local Time in Props" />;
  return (
    <div>
      <Counter counter={counter} />
    </div>
  );
};

export default App;

const Counter = ({ counter }) => {
  console.log("counter", counter);
};
