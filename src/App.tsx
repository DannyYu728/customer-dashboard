import './App.css';
import Nav from "./components/nav/Nav"
import Dashboard from "./pages/Dashboard"
import Create from "./pages/Create"
// import SignIn from "./pages/SignIn"
// import SignUp from "./pages/SignUp"
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useTransition, Component } from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        {/* <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
}

export default App;
