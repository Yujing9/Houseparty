import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>this is home page</h1>}>
          </Route>
          <Route path="join" element={<RoomJoinPage />}></Route>
          <Route path="create" element={<CreateRoomPage />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
