import Square from "./Square";
import ColorInput from "./ColorInput";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <main className="App">
      <Square 
        color={color} 
      />
      <ColorInput 
        color={color} 
        setColor={setColor} 
      />
    </main>
  );
}

export default App;
