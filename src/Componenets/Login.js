import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom'

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
      if(email && pswd){
        setUser({email: email, pswd: pswd})
  
        localStorage.setItem('email', email)
        navigate('/dashboard')
      }
      else{
        alert('Invalid!')
      }
    };

    const style = {
      box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7f3ff',
        padding: '25px'
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 700,
        backgroundColor: '#0569c1',
        color: 'white',
        paddingLeft: '100px',
        paddingRight: '100px',
        borderRadius: 3,
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
    <Paper sx={style.card} elevation={20}>
        <Box>
          <Typography variant="h6" sx={{fontWeight: 'bold', padding: '30px'}}>
            Report Login Form
          </Typography>
        </Box>

        <Grid container>
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
            </Typography><br/>

            {/* <input placeholder="User Email" style={style.input}/><br/>
            <input placeholder="User Password" style={style.input}/> */}
          </Grid>
          <Grid item xs={6}sx={style.gridRight}>
            <img src='../../login.jpg' style={{width: '100%', height: '100%'}}/>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{color: '#afd0f2', padding: '40px'}}>
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

