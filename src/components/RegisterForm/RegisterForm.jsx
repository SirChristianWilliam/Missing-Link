import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField 
            id="outlined-basic" 
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
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField 
            id="outlined-basic" 
            label="password" 
            variant="outlined"
            type="text"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
             />
            </Box>
         
        </label>
      </div>
      <div>
        <label htmlFor="firstName">
          First Name:
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField 
            id="outlined-basic" 
            label="firstName" 
            variant="outlined"
            type="text"
            name="firstName"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
             />
            </Box>
         
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          Last Name:
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField 
            id="outlined-basic" 
            label="lastName" 
            variant="outlined"
            type="text"
            name="lastName"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
             />
            </Box>
           
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField 
            id="outlined-basic" 
            label="email" 
            variant="outlined"
            type="text"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
             />
            </Box>
        </label>
      </div>
      <div>
      <Button 
                className='btn'
                variant="contained"
                sx={{
                    bgcolor: '#5bc0a7',
                  }}
                type="submit"
                name="submit"
                 >
                Register
                </Button>
      
      </div>
    </form>
  );
}

export default RegisterForm;
