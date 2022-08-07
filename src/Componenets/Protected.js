import React from 'react';
import {useNavigate, Outlet} from 'react-router-dom'

const Protected = (props) => {

    // const {Component} = props
    const navigate = useNavigate()

    React.useEffect(() => {
        const login = localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
    })

    return (
        <Outlet/>
    )
}

export default Protected




// import React from 'react';
// import {Outlet, Navigate} from 'react-router-dom'

// const Protected = () => {
//     let auth = {'token':false}
//     return(
//         auth.token ? <Outlet/> : <Navigate to="/login"/>
//     )
// }

// export default Protected
