import React from 'react'
import {Outlet} from 'react-router-dom'

import Navbar from '../Componenets/Navbar';

const Screen = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Screen
