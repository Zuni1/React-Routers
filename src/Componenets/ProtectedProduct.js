import React from 'react';
import {Outlet} from 'react-router-dom'

const ProtectedProduct = () => {
  return (
    <div>
      <h1>Product page</h1>
      <Outlet/>
    </div>
  )
}

export default ProtectedProduct
