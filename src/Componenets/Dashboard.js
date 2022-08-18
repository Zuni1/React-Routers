import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './toolkit/Reducer';

const Dashboard = () => {

  const dispatch = useDispatch()
  const obj = useSelector(state => state.user.user)

  const style = {
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  } 

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Box sx={style.box}>
      <h1>User Dashboard</h1>
      <h3>Hello, {obj.email}</h3>
      <Button variant="contained" onClick={() => handleLogout()}>Logout</Button>
    </Box>
  )
}

export default Dashboard
