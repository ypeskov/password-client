import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import "../i18n";

import { StoreContext } from "../context/store-context";

import Login from './Login';
import Register from "./Register";
import Dashboard from "./Dashboard";
import AuthGuard from "../components/AuthGuard";


function App() {
  const { user } = useContext(StoreContext);
  const [path, setPath] = useState('/');

  useEffect(() => {
    if (!user.isLoggedIn) {
      setPath('login');
    } else {
      setPath('dashboard');
    }
  }, [user.isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
        <Route path="/" element={<Navigate to={path} />} />
      </Routes>
    </>
  );
}

export default App;
