import * as React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

const Login = ({setUser}) => {

  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  
  const navigate = useNavigate()
  
    // React.useEffect(() => {
    //   const login = localStorage.getItem('login')
    //   if(!login){
    //     navigate('/')
    //   }
    // })

    const handleSubmit = () => {
      // if(!email && !pswd){
        setUser({email: email, pswd: pswd})
  
        localStorage.setItem('email', email)
        navigate('/dashboard')
      // }
    };

    const style = {
      box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7f3ff',
        padding: '50px'
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 600,
        alignItems: 'center',
        backgroundColor: '#0569c1',
        color: 'white',
        padding: '30px',
        paddingLeft: '100px',
        paddingRight: '100px',
        borderRadius: 3,
      },
      grid: {
        marginTop: '10px',
        marginBottom: '10px',
      },
      gridLeft: {
        backgroundColor: '#ffffff',
        color: 'black',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      },
      input: {
        padding: '10px', 
        borderRadius: '15px',
        backgroundColor: '#f6fafd',
        border: '2px solid #f0f0f0'
      },
      inputs: {
        borderRadius: 10,
        backgroundColor: '#f6fafd',
      },
      btn: {
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#0569c1',
      },
    }  

  return (
    <Box sx={style.box}>
    <Paper sx={style.card} elevation={10}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Typography variant="h6" sx={{fontWeight: 'bold'}}>
            Report Login Form
          </Typography>
        </Box><br/>

        <Grid container sx={style.grid}>
          <Grid item xs={6} sx={style.gridLeft}>
            <Typography variant="h5" sx={{color: '#29253d', fontWeight: 'bold'}}>
              Log In
            </Typography><br/>
          
            <TextField 
              label="User Email" 
              variant="outlined" 
              sx={style.inputs}
              required
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            /><br/>

            <TextField 
              label="User Password" 
              variant="outlined" 
              sx={style.inputs} 
              required
              type="password"
              id='pswd'
              value={pswd}
              onChange={(e) => setPswd(e.target.value)}
            /><br/>

            <Button variant="contained" onClick={handleSubmit} sx={style.btn}>Log In</Button><br/><br/>

            <Typography variant="subtitle2" sx={{color: '#9a9590'}}>
              Don't have an account? <Link to='/'>Register</Link>
            </Typography>

            {/* <input placeholder="User Email" style={style.input}/><br/>
            <input placeholder="User Password" style={style.input}/> */}
          </Grid>
          <Grid item xs={6}sx={style.gridRight}>
            <img src='../../login.jpg' style={{width: '100%', height: '100%'}}/>
          </Grid>
        </Grid><br/><br/>

        <Typography variant="body2" sx={{color: '#afd0f2'}}>
          © 2021 Report Login Form. All rights reserved | Designed by W3Layouts
        </Typography>
    </Paper>
    </Box>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <h4>Login Form</h4>
    //     <div>
    //       <label htmlFor='name'>
    //         name
    //       </label>
    //       <input
    //         type='text'
    //         id='name'
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor='email'>
    //         email
    //       </label>
    //       <input
    //         type='email'
    //         id='email'
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <button type='submit'>
    //       login
    //     </button>
    //   </form>
    // </div>
  )
}

export default Login


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// import {Link} from 'react-router-dom'

// const Login = () => {

//   const style = {
//     box: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#e7f3ff',
//       padding: '50px'
//     },
//     card: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       maxWidth: 600,
//       alignItems: 'center',
//       backgroundColor: '#0569c1',
//       color: 'white',
//       padding: '30px',
//       paddingLeft: '100px',
//       paddingRight: '100px',
//       borderRadius: 3,
//     },
//     grid: {
//       marginTop: '10px',
//       marginBottom: '10px',
//     },
//     gridLeft: {
//       backgroundColor: '#ffffff',
//       color: 'black',
//       padding: '20px',
//       display: 'flex',
//       alignItems: 'center',
//       flexDirection: 'column'
//     },
//     input: {
//       padding: '10px', 
//       borderRadius: '15px',
//       backgroundColor: '#f6fafd',
//       border: '2px solid #f0f0f0'
//     },
//     inputs: {
//       borderRadius: 10,
//       backgroundColor: '#f6fafd',
//     },
//     btn: {
//       borderRadius: 10,
//       width: '100%',
//       backgroundColor: '#0569c1',
//     },
//   }

//   return (
//     <Box sx={style.box}>
//     <Paper sx={style.card} elevation={10}>
//         <Box sx={{display: 'flex', justifyContent: 'center'}}>
//           <Typography variant="h6" sx={{fontWeight: 'bold'}}>
//             Report Login Form
//           </Typography>
//         </Box><br/>

//         <Grid container sx={style.grid}>
//           <Grid item xs={6} sx={style.gridLeft}>
//             <Typography variant="h5" sx={{color: '#29253d', fontWeight: 'bold'}}>
//               Log In
//             </Typography><br/>

//             <TextField 
//               label="User Email" 
//               variant="outlined" 
//               sx={style.inputs} 
//               // id='name'
//               // value={name}
//               // onChange={(e) => setName(e.target.value)}
//             /><br/>

//             <TextField 
//               label="User Password" 
//               variant="outlined" 
//               sx={style.inputs}
//               // id='name'
//               // value={name}
//               // onChange={(e) => setName(e.target.value)} 
//             /><br/>

//             <Button variant="contained" sx={style.btn}>Log In</Button><br/><br/>

//             <Typography variant="subtitle2" sx={{color: '#9a9590'}}>
//               Don't have an account? Register
//               {/* <Link to='/'>Register</Link> */}
//             </Typography>

//             {/* <input placeholder="User Email" style={style.input}/><br/>
//             <input placeholder="User Password" style={style.input}/> */}
//           </Grid>
//           <Grid item xs={6}sx={style.gridRight}>
//             <img src='../../login.jpg' style={{width: '100%', height: '100%'}}/>
//           </Grid>
//         </Grid><br/><br/>

//         <Typography variant="body2" sx={{color: '#afd0f2'}}>
//           © 2021 Report Login Form. All rights reserved | Designed by W3Layouts
//         </Typography>
//     </Paper>
//     </Box>
//   )
// }

// export default Login
