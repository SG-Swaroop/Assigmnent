import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function StateAndEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `You Clicked ${count} times`;
    console.log("useEffect-updating title");
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button onClick={() => setCount(count + 1)}>Clicked {count} Times</button>
    </div>
  );
}

export default StateAndEffect;
