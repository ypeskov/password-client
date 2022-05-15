import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "../i18n";

import { StoreContext } from "../context/store-context";

import Login from './Login';
import Register from "./Register";
import Favorite from "./Favorite";
import AuthGuard from "../components/AuthGuard";
import Navigation from "../components/Navigation";
import Add from "./Add";
import Header from "../components/Header";
import { isSessionActive } from "../utils/sessionManager";


function App() {
  const [path, setPath] = useState('/');

  const isSession = isSessionActive();

  const [userEmail, setUserEmail] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [jwt, setJwt] = useState('');

  useEffect(() => {
    if (!isSession) {
      setPath('login');
    } else {
      setPath('dashboard');
    }
  }, [isSession]);

  return (
    <>
      <StoreContext.Provider value={{
        userEmail,
        setUserEmail,
        userFirstName,
        setUserFirstName,
        userLastName,
        setUserLastName,
        jwt,
        setJwt,
        isLoggedIn: isSession,
      }}>
        
        <Header />

        {isSession && <Navigation />}
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/favorite" element={<AuthGuard><Favorite/></AuthGuard>}/>
          <Route path="/add" element={<AuthGuard><Add /></AuthGuard>}/>
          <Route path="/" element={<Navigate to={path}/>}/>
        </Routes>
      </StoreContext.Provider>
    </>
  );
}

export default App;
