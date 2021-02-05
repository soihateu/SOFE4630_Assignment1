import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "../App.css";

const Random = () => {
  const [number, setNumber] = useState(0);
  const [maxVal, setMaxVal] = useState(10);

  const handlePress = () => {
    setNumber(Math.floor(Math.random() * maxVal));
  };

  return (
    <div>
      <div id="card-block">
        <h1>{number}</h1>
      </div>
      <div id="inputContainer">
        <div>
          Max Value:
          <input
            type="number"
            value={maxVal}
            onChange={(e) => setMaxVal(e.target.value)}
          />
        </div>
      </div>
      <Button variant="contained" color="primary" onClick={handlePress}>
        Roll
      </Button>
      <div id="extrafont">
        *Test your luck and try to get the lucky number 11!
      </div>
    </div>
  );
};

export default Random;
