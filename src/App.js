import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import Screen from './Componenets/Screen';
import Protected from './Componenets/Protected';
import Home from './Componenets/Home';
import About from './Componenets/About';
import ProtectedProduct from './Componenets/ProtectedProduct';
import Product from './Componenets/Product';
import ProductPage from './Componenets/ProductPage';
import Login from './Componenets/Login';
import ProtectedRoute from './Componenets/ProtectedRoute';
import Dashboard from './Componenets/Dashboard';
import Error from './Componenets/Error';

function App() {
  const [user, setUser] = React.useState("")
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Screen/>}>

        <Route index element={<Home setUser={setUser}/>} />
        <Route path='/about' element={<About/>} />

        <Route element={<ProtectedRoute user={user} />}>
          <Route path='protectedproduct' element={<ProtectedProduct/>} >
            <Route index element={<Product/>} />
            <Route path=':productId' element={<ProductPage/>} />
          </Route>
        </Route>

        {/* <Route path='dashboard' 
          element={
            <ProtectedRoute user={user}>
            <Dashboard user={user} setUser={setUser}/>
            </ProtectedRoute>
          } /> */}
        <Route path='login' element={<Login setUser={setUser} />} />
        <Route path='dashboard' element={<Dashboard user={user}/>} />
        <Route path='*' element={<Error/>} />

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

