import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div className={"loginDiv"}>
      <LoginForm />
      <center>
           <button 
            type="button"
            className="btn btn_sizeSm" 
            onClick={() => {
            history.push('/registration');
          }}>
           Register
            </button>
        </center>
    </div>
  );
};

export default LoginPage;
