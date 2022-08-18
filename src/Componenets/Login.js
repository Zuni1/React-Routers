import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Button from '@mui/material/Button';

import { useDispatch } from "react-redux";
import { login } from './toolkit/Reducer';

const Login = () => {

  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm()

  const dispatch = useDispatch()

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
        flexDirection: 'column',
        justifyContent: 'center'
      },
      input: {
        padding: '12px', 
        borderRadius: 20,
        backgroundColor: '#f6fafd',
        border: '2px solid #f0f0f0',
        width: '80%',
        margin: '10px'
      },
      form: {
        alignItems: 'center',
        display: 'flex', 
        flexDirection: 'column', 
        width: '100%'
      },
      btn: {
        borderRadius: 10,
        border: 0,
        color: 'white',
        padding: '8px',
        width: '100%',
        backgroundColor: '#0569c1',
        margin: '10px'
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
          
            <form 
              style={style.form} 
              onSubmit={handleSubmit((data) => 
                {
                  dispatch(login({
                    loggedIn: true,
                    email: data.email,
                    password: data.password
                  }))
                  navigate('/dashboard')
                }
              )}>
              <input 
                style={style.input} 
                placeholder='User Email' 
                {...register('email', 
                    {
                        required: <span style={{color: 'red'}}>This is a required field</span>, 
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: <span style={{color: 'red'}}>Invalid email address</span>
                        }
                    } 
                )} 
              />
              {errors.email?.message}

              <input 
                style={style.input} 
                type='password'
                placeholder='User Password' 
                {...register(
                  'password', 
                  {required: <span style={{color: 'red'}}>This is a required Field</span>,
                  minLength: {value: 6, message: <span style={{color: 'red'}}>Password must be 6 characters</span>}} 
                )} 
              />
              {errors.password?.message}

              <Button type='submit' variant="contained" sx={style.btn}>Log In</Button>
            </form><br/>

            <Typography variant="subtitle2" sx={{color: '#9a9590'}}>
              Don't have an account? <Link to='/register'>Register</Link>
            </Typography>

          </Grid>
          <Grid item xs={6}>
            <img src='../../login.jpg' alt='' style={{width: '100%', height: '100%'}}/>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{color: '#afd0f2', padding: '40px'}}>
          © 2021 Report Login Form. All rights reserved | Designed by W3Layouts
        </Typography>
    </Paper>
    </Box>
  )
}

export default Login

