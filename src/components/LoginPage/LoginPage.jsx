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
      <h3> YOU WILL NOT BE BE ABLE TO LOG IN OR REGISTER UNTIL FURTHER NOTICE. (BIT.IO) IS NO LONGER IN SERVICE, RESULTING IN A MISSING DATABASE. TO VIEW 
          HOW THE APPLICATION WORKS, PLEASE WATCH THE VIDEO DEMONSTRATION HERE: 
          <a href="https://www.youtube.com/watch?v=KXYbTYLZoBw&list=PLo9U1DCI2cVyDJR5vJefvzTc7bvt02wK9&index=1">
            Missing Link Demo Video
          </a>
     </h3>
  );
};

export default LoginPage;
