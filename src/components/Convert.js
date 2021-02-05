import React, { useEffect, useState } from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Database from "./Database";

const Convert = () => {
  const [seconds, setSeconds] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [blackBox, setBlackBox] = useState(0);

  const clickHandler = () => {
    if (isRunning === false) {
      setIsRunning(true);
    }
    if (isRunning) {
      randomGen();
    }
  };

  const randomGen = () => {
    setBlackBox(Math.floor(Math.random() * 15));
    setScore(score + 1);
  };

  const restart = () => {
    setScore(0);
    setSeconds(5);
  };

  const saveScore = () => {
    <Database score={score} />;
  };

  useEffect(() => {
    if (seconds === 0) {
      setIsRunning(false);
    }
    if (isRunning) {
      const id = window.setInterval(() => {
        setSeconds(seconds - 1);
      }, 500);
      return () => window.clearInterval(id);
    }
  });

  return (
    <div>
      <div id="gameExplanation">Press the black box!</div>
      <div style={{ width: "40vw" }}>
        <Grid container justify="center" spacing={0}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (value, key) => {
              return (
                <Grid item xs={3} key={key}>
                  {blackBox === value ? (
                    <Button
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "black",
                      }}
                      variant="contained"
                      color="default"
                      id={value}
                      onClick={clickHandler}
                    />
                  ) : (
                    <Button
                      style={{ width: "100%", height: "100%" }}
                      variant="contained"
                      color="default"
                      id={value}
                    />
                  )}
                </Grid>
              );
            }
          )}
        </Grid>
      </div>

      <div id="score">Score: {score}</div>
      <div>Time: {seconds} </div>
      <div id="someButtons">
        <Button onClick={restart} variant="contained" color="primary">
          Restart
        </Button>
        &nbsp;
        <Button
          onClick={saveScore}
          variant="contained"
          color="primary"
          disabled={isRunning}
        >
          Save Score
        </Button>
      </div>
    </div>
  );
};

export default Convert;
