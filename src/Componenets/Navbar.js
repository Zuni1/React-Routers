import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();
  const currentTab = location.pathname;

  const style = {
    nav: {
      display: 'flex',
      backgroundColor: '#3295a8',
      padding: '15px',
      justifyContent: 'space-between'
    },
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f7320a',
      },
    },
  });


  return (
    <>
    <Box sx={style.nav}>
      <ThemeProvider theme={theme}>
      <Tabs
        value={currentTab}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D97D54",
          }
        }}
        textColor='primary'
      >
        <Tab sx={{color: 'white'}} label="Home" value="/" to='/' component={Link} />
        <Tab sx={{color: 'white'}} label="About" value="/about" to='/about' component={Link} />
        <Tab sx={{color: 'white'}} label="Products" value="/protectedproduct" to='/protectedproduct' component={Link} />
        <Tab sx={{color: 'white'}} label="Dashboard" value="/dashboard" to='/dashboard' component={Link} />
      </Tabs>

      <Tabs
        value={currentTab}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D97D54",
          }
        }}
        textColor='primary'
      >
        <Tab sx={{color: 'white'}} label="Log In" value="/login" to='/login' component={Link} />
        <Tab sx={{color: 'white'}} label="Register" value="/register" to='/register' component={Link} />
      </Tabs>
      </ThemeProvider>
    </Box>
    </>
  )
}

export default Navbar





// import React from 'react'
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link, BrowersRouter, Routes, Route } from "react-router-dom";
// import Home from './Home';
// import About from './About';

// const Navbar = (props) => {

//   const style = {
//     nav: {
//       display: 'flex',
//       backgroundColor: '#3295a8',
//       padding: '15px',
//       justifyContent: 'space-between'
//     },
//   }

//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };


//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: '#f7320a',
//       },
//     },
//   });


//   return (
//     <>
//     <Box sx={style.nav}>
//       <ThemeProvider theme={theme}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         TabIndicatorProps={{
//           style: {
//             backgroundColor: "#D97D54",
//           }
//         }}
//         textColor='primary'
//       >
//         <Tab sx={{color: 'white'}} label="Home" />
//         <Tab sx={{color: 'white'}} label="About" />
//       </Tabs>
//       </ThemeProvider>
//     </Box>
//         {value === 0 && <Home/>}
//         {value === 1 && <About/>}
//     </>
//   )
// }

// export default Navbar