import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";

import { StoreContext } from "../context/store-context";

import Login from './Login';
import Register from "./Register";

function App() {
  const { user } = useContext(StoreContext);

  let path: string;
  if (!user.getUser()) {
    path = 'login';
  } else {
    path = 'dashboard';
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={path} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
