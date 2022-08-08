import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

const Navbar = () => {

  const style = {
    nav: {
      display: 'flex',
      backgroundColor: '#3295a8',
      padding: '15px',
      justifyContent: 'space-between'
    },
  }

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });


  return (
    <>
    <Box sx={style.nav}>
      <ThemeProvider theme={theme}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D97D54",
          }
        }}
        textColor='primary'
      >
        <Tab value="one" sx={{color: 'white'}} component={Link} to='/' label="Home" />
        <Tab value="two" sx={{color: 'white'}} component={Link} to='/about'  label="About" />
        <Tab value="three" sx={{color: 'white'}} component={Link} to='/protectedproduct' label="Products" />
        <Tab value="four" sx={{color: 'white'}} component={Link} to='/dashboard' label="Dashboard" />
      </Tabs>

      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D97D54",
          }
        }}
        textColor='primary'
      >
        <Tab value="five" sx={{color: 'white'}} component={Link} to='/login' label="Log In" />
        <Tab value="six" sx={{color: 'white'}} component={Link} to='/login' label="Register" />
      </Tabs>
      </ThemeProvider>
    </Box>
    </>
  )
}

export default Navbar