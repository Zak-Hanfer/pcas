
import React from 'react';
import Register from "./pages/Register"
import Login from "./pages/login"
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
  
    <HashRouter >
      <Routes>
      <Route  index   element={<Register />} />
      <Route   element={<Login />} />

    </Routes>
   </HashRouter>
  
  );
}

export default App;
