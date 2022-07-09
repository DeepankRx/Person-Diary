import { useState, useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Pages from "./Components/Pages";
import Signup from "./Components/Signup";
import UpdateDiary from "./Components/UpdateDiary";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Pages />} />
        <Route path="/updateDiary/:id" element={<UpdateDiary />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
