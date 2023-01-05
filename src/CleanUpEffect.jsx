import React from "react";
import { useState } from "react";
import OnlyOnceEffect from "./OnlyOnceEffect";

function CleanUpEffect() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <OnlyOnceEffect />}
    </div>
  );
}

export default CleanUpEffect;
