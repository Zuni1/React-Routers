import React from 'react';
import {useNavigate} from 'react-router-dom'

const Dashboard = ({user, setUser}) => {

  const navigate = useNavigate()

  // const logout = () => {
  //   setUser(null)
  //   navigate('/')
  // }

  return (
    <div>
      <h2>{user.email}'s Dashboard</h2>
      <h3>Hello {user.email}</h3>
      {/* <button onClick={logout}>Logout</button> */}
    </div>
  )
}

export default Dashboard
