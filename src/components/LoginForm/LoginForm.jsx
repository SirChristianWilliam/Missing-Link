import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  console.log('username',username);
  console.log('password',password);
  const login = (event) => {
    event.preventDefault();
    
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
         <label htmlFor="username">
          Username:
          <Box
      // component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
       
      autoComplete="off"
    >
          <TextField 
            id="outlined-basic1" 
            label="Username" 
            variant="outlined"
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
             />
            </Box>
        </label>
         <label htmlFor="password">
          Password:
          <Box
      // component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
       
      autoComplete="off"
    >
          <TextField 
            id="outlined-basic" 
            label="password" 
            variant="outlined"
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
             />
            </Box>
        </label>
      
      <Button 
                 
                className='buttonHover'
                variant="contained"
               
                type="submit"
                name="submit"
                sx={{
                  bgcolor: '#5bc0a7',
                }}
                 >
                Log In
                </Button>
      
    </form>
            
  );
};

export default LoginForm;

   
