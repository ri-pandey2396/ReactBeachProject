import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import RoomContextProvider from "./context";
ReactDOM.render(
  <RoomContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RoomContextProvider>,
  document.getElementById("root")
);
