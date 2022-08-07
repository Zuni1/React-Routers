import React from 'react'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';

const Navbar = () => {

  const style = {
    nav: {
      backgroundColor: '#eb9642',
      padding: '20px',
      color: 'white'
    }
  }

  return (
    <Box sx={style.nav}>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      {/* <Link to='product'>Product</Link> */}
      <Link to='protectedproduct'>Product</Link>
      <Link to='login'>Login</Link>
    </Box>
  )
}

export default Navbar


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// import About from './About'
// import Home from './Home'
// import ProtectedRoute from './ProtectedRoute'

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function Navbar() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Home" {...a11yProps(0)} />
//           <Tab label="Product" {...a11yProps(1)} />
//           <Tab label="About" {...a11yProps(2)} />
//           <Tab label="Log in" {...a11yProps(3)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}><Home/></TabPanel>
//       <TabPanel value={value} index={1}><ProtectedRoute/></TabPanel>
//       <TabPanel value={value} index={2}><About/></TabPanel>
//       <TabPanel value={value} index={3}>Log In</TabPanel>
//     </Box>
//   );
// }
