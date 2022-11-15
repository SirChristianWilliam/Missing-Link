import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

// THIS PAGE NEEDS THE GREETING AND THE HOW TO USE INFO,
// ALSO NEEDS A DROPDOWN SEARCH INPUT AND A SEARCH/SUBMIT 
// BUTTON FOR THE CONDITIONS IN QUESTIONS. SHOULD BE EASY ENOUGH
function Search() {
    const user = useSelector((store) => store.user);

    return (
        <>
            {/* <h2>Welcome, {user.username}!</h2> */}
            <h1>Search Page</h1>
            <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      </div>
            <div className="container">
                {/* <p>Your ID is: {user.id}</p> */}
                <LogOutButton className="btn" />
            </div>
            </>
            );
}


            export default Search;