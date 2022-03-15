import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Income from "./pages/Income";
import SignUp from "./pages/SignUp";
import Outgoing from "./pages/Outgoings";
import { UserContext } from "./contexts/UserContext";
import Home from "./pages/Home";

function App() {
  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/outcome" element={<Outgoing />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
