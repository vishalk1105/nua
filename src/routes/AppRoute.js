import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../view/Home";
import LogIn from "../view/LogIn";
import MyProfile from "../view/MyProfile";
import PrivateRoute from "./PrivateRoute";
const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
