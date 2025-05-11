import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SingleInviteForm from "./components/SingleInviteForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<SingleInviteForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
