import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { DashBoard } from './Component/Admin/DashBoard';
import { Header } from './Shared/Header';
import { Sider } from './Shared/Sider';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<DashBoard />} />
      <Route path='./Header' element={<Header />} />
      <Route path='./Sider' element={<Sider />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
