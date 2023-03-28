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
import Thietbi from './Component/Admin/Thietbi/Thietbi';
import Roles from './Component/Admin/DanhsachRole/Roles';
import QuanlyTK from './Component/Admin/QuanlyTK/QuanlyTK';
import { Capso } from './Component/Admin/Capso/Capso';
import { CapSoMoi } from './Component/Admin/Capso/CapSoMoi';
import { CapSoDetail } from './Component/Admin/Capso/capSoDetail';
import { Baocao } from './Component/Admin/Baocao/Baocao';
import { UserHistory } from './Component/Admin/Userhistory/UserHistory';

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
      <Route path='/Thietbi' element={<Thietbi />} />
      <Route path='/Capso' element={<Capso />} />
      <Route path='/CapSoMoi' element={<CapSoMoi />} />
      <Route path='/CapSoDetail' element={<CapSoDetail />} />
      <Route path='/Baocao' element={<Baocao />} />
      <Route path='/Roles' element={<Roles />} />
      <Route path='/QuanlyTK' element={<QuanlyTK />} />
      <Route path='/UserHistory' element={<UserHistory />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
