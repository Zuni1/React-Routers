import React from 'react';
import Box from '@mui/material/Box';

const Dashboard = ({user}) => {

  const style = {
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }

  return (
    <Box sx={style.box}>
      <h1>User Dashboard</h1>
      <h3>Hello, {user.email}</h3>
    </Box>
  )
}

export default Dashboard
