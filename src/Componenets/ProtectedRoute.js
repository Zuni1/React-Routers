import React from 'react';
import {Navigate, Outlet, useNavigate} from 'react-router-dom'

const ProtectedRoute = ({user}) => {
    // const navigate = useNavigate()

    // React.useEffect(() => {
    //     const login = localStorage.getItem('name')
    //     if(login){
    //         navigate('/login')
    //     }
    // })

    // if(!user){
    //     return <Navigate to='/login' />
    // }

    return (
        // <Outlet/>
        !user ? <Navigate to='/login' /> : <Outlet/>
    )

}

export default ProtectedRoute
