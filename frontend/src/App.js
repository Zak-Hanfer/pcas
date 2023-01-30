
import React from 'react';
import Register from "./pages/Register"
import Login from "./pages/login"
import { HashRouter, Routes, Route } from "react-router-dom";
import Detail from './pages/Detail';
function App() {
  return (
  
    <HashRouter >
      <Routes>
      <Route     element={<Register />} />
      <Route     element={<Login />} />
      <Route  index   element={<Detail />} />

    </Routes>
   </HashRouter>
  
  );
}

export default App;
