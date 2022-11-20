import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Fuse from 'fuse.js';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Results() {
    const resultCondition = useSelector((store) => store.results); //This store value
    //gets updated on the Search.jsx onSubmit event.

    function saveCondition(event) {
        event.preventDefault();
        console.log('saveCondition clicked, ev.target.val is', event.target.value);
    };

    //-----------------------
    function openPopup() {
        console.log('openPopup button clicked')

        //This will open pop-up box
        document.getElementById('codePopupID').style.opacity ='1'; 
        document.getElementById('codePopupID').style.zIndex ='1';
 
      };

      function closePopup() {
        console.log('close Popup close button clicked');

        document.getElementById('codePopupID').style.opacity ='0';
        document.getElementById('codePopupID').style.zIndex ='-1';

    }

    // pop up box code goes here for now

    function submitCode() {
        console.log('code was submitted');
        //This will also need conditional in case the code was wrong.
        //(if entered code equals the current disease codename and
        // any of the current user's keys, then go ahead and add it. )
    }

    function handleCodeChange(event) {
        console.log('code change value:', event.target.value);
    }

    //end of pop up box code
    //-----------------------------

    return (
        <>
            <h1>Results page</h1>
            <button
                onClick={saveCondition}
            >
                Save Condition to Your List
            </button>

            <button
                onClick={openPopup}
            >
                - Add Access Code -
            </button>

            <h1> {resultCondition} </h1>
            
            {/* HIDE THIS UNTIL */}
            <div className="codePopupContainer" id="codePopupID">
                <button onClick={closePopup}>
                    X
                </button>
                <p>If you were given an access code for <b>{resultCondition}</b>,
                    enter it here and your questionnaire data (filled out <Link to="/questions">here</Link>), will be added to this condition.
                </p>
                    <form
                        onSubmit={submitCode}>
                        <input
                            className="codeInput"
                            onChange={handleCodeChange}
                        >
                        </input>
                        <button
                            type="submit"
                        >
                            Submit Code
                        </button>
                    </form>
                </div>
                
                <table className='resultContainer'>
                    <thead>
                        <tr>
                            <th>Questions:</th>
                            <th>All user's answers:</th>
                            <th>Matching answers</th>
                        </tr>
                        <tr>
                            <td>This needs to access a list of all questions/answers
                                . If a user has a different answer than another user,
                                this needs to show the question again, as well as the
                                different answer. There should be no duplicate answers,
                                but the questions will probably show again.
                            </td>
                            <td>this will need to map thru ALL users answers,
                                but showing no duplicate answers. If there are duplicates,
                                it will need to show how many duplications there are in the
                                occurences TD
                            </td>
                            <td>Number of same answers</td>
                        </tr>
                    </thead>
                </table>

            


        </>
    )
};

export default Results;