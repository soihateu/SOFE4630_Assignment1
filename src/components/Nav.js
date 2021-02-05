import React, { Children, useState } from "react";
import "../App.css";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Component, Fragment } from "react";
import Database from "./Database";
import Convert from "./Convert";
import Random from "./Random";

const Nav = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="About" />
          <Tab label="Hide Game" />
          <Tab label="Random Number" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div id="aboutText">
          Welcome to my application! <br /> <br />
          <div id="aboutDesc">
            Try and get a high score in the Tile Game or generate a random
            number to test your luck!
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Convert />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Random />
      </TabPanel>
    </Fragment>
  );
};

const TabPanel = (props) => {
  const { children, value, index } = props;

  return value === index && <h1>{children}</h1>;
};

export default Nav;
