import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import storage from 'local-storage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css'





import Cadrastar from './pages/cadrasto'
import Consultar from './pages/consultar'
import Home from './pages/home'
import Login from './pages/login'
import Menu from './pages/menu'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path='/cadrasto' element={<Cadrastar />} />
       <Route path='/alterar/:idParam' element={<Cadrastar />} />

       <Route path='/consultar' element={<Consultar />} />
       
       <Route path='/' element={<Home />} />

       <Route path='/login' element={<Login />} />
       <Route path='/menu' element={<Menu/>} />

    
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
