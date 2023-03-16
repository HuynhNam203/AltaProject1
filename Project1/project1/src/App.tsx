import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { DashBoard } from './Component/Admin/DashBoard';
import { PerInfo } from './Component/Info/PerInfo';
import { Header } from './Shared/Header';
import { Sider } from './Shared/Sider';
import Login from './Component/Login/Login';
import ResetPass from './Component/ResetPass/ResetPass';
import NewPass from './Component/ResetPass/NewPass';
import Dichvu from './Component/Admin/Dichvu/Dichvu';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<DashBoard />} />
      <Route path='/Header' element={<Header />} />
      <Route path='/Sider' element={<Sider />} />
      <Route path='/PerInfo' element={<PerInfo />} />
      <Route path='/Dashboard' element={<DashBoard />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/ResetPass' element={<ResetPass />} />
      <Route path='/NewPass' element={<NewPass />} />
      <Route path='/Dichvu' element={<Dichvu />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
