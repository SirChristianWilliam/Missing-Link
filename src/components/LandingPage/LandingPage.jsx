import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
// import Drawer from '@mui/material/Drawer';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
// import { Button } from '@mui/material';

function LandingPage() {
  // const [heading, setHeading] = useState('Welcome');
  const history = useHistory();
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      {/* <h2>{heading}</h2> */}
      {/* <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onMouseLeave={() => setIsDrawerOpen(false)}
      >
      <Button>
        Click me!🎈
      </Button>
      <Button>
        Click me!⬅️
      </Button><Button>
        Click me!👈🏻
      </Button><Button>
        Click me!
      </Button>
      <Button
        onClick={() => setIsDrawerOpen(false)}
        >
          Close Drawer
      </Button>
      </Drawer>
      <Button
        onClick={() => setIsDrawerOpen(true)}
        >
      Open the drawer, if you dare 👄

      </Button> */}
      <div className="grid">
        <div>

          {/* <Button variant='contained'>Button here</Button> */}
        </div>
        <div className='registerPageContainer'>
          <RegisterForm />
          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
