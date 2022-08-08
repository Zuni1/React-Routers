import React from 'react';
import Box from '@mui/material/Box';

const Home = () => {

  const style = {
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }

  return (
    <Box sx={style.box}>
      <h1>Home Page</h1>
    </Box>
  )
}

export default Home
