import React from 'react';
import Box from '@mui/material/Box';

const About = () => {
  const style = {
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    },
  }

  return (
    <Box sx={style.box}>
      <h1>About Page</h1>
    </Box>
  )
}

export default About
