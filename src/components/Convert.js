import { React, useEffect, useState } from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Convert = () => {
  const [seconds, setSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [blackBox, setBlackBox] = useState(0);
  const [open, setOpen] = useState(false);

  /*********Dialog/alert popup when saving************/

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYes = () => {
    setOpen(false);
    // Setup database
  };

  /*******Handles user clicks. Randomly selects a new black tile******/

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

  /********Handles reset button. When pressed all
   *********game states will be reset***********/

  const restart = () => {
    setScore(0);
    setSeconds(10);
  };

  /********Handles Save Score button. When pressed, will prompt user******/

  const saveScore = () => {
    if (!isRunning) {
      handleClickOpen();
    }
    //<Database score={score} />;
  };

  /****Works on the timer and checks for end game ***/
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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Save Score?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would you like to save your score?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleCloseYes} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

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
