import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usuarios from './components/Usuarios';
import Menu from './components/Menu';
import Usuarios2 from "./components/Usuarios2";
import Sobre from "./components/Sobre";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 <Menu />
 <Routes>
 <Route path="/" element={<Usuarios />} />
 <Route path="usuarios" element={<Usuarios2 />} />
 <Route path="sobre" element={<Sobre />} />
 </Routes>
 </BrowserRouter>
);