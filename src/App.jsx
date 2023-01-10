import React from "react";
import Login from "./components/Login/Login";
import Events from "./components/Events/Events";
import Signup from "./components/Signup/Signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/events" element={<Events />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
