import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRooms from "./pages/SingleRoom";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRooms} />
        <Route component={Error} />
      </Switch>
    </>
  );
}


export default App;
