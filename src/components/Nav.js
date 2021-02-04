import React, { Children, useState } from "react";
import "../App.css";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Component, Fragment } from "react";
import Box from "@material-ui/core/Box";
import Calculator from "./Calculator";
import Convert from "./Convert";

const Nav = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Calculator />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Convert />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item number 3
      </TabPanel>
    </Fragment>
  );
};

const TabPanel = (props) => {
  const { children, value, index } = props;

  return value === index && <h1>{children}</h1>;
};

export default Nav;
