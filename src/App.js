import { useState } from "react";
import Calculator from "./Calculator/Calculator";


function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  return (
    <div className="App">

      <input type="text" onChange={(event) => setInput1(event.target.value)} />
      <input type="text" onChange={(event) => setInput2(event.target.value)} />


      <Calculator input1={input1} input2={input2} />
    </div>
  );
}

export default App;


