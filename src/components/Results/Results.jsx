import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Fuse from 'fuse.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Results() {
    const dispatch = useDispatch();
    const resultCondition = useSelector((store) => store.results); //This store value
    const conditions = useSelector((store) => store.conditions);
    // const list = useSelector((store) => store.profilelist);
    console.log('HHHHHHH', resultCondition)
    const [accessKey, setAccessKey] = useState(''); 
    // const [yo, getYo] = useState('');
    //REPLACE ALL INPUTS WITH USESTATES

    useEffect(() => {
        dispatch({
            type: 'FETCH_CONDITIONS' // Immediately call this, and head to the conditions saga
        }),
        dispatch({
            type: 'FETCH_PROFILE_CONDITIONS'
        }), //new
        dispatch({
            type:'FETCH_ALL_PROFILE_CONDITIONS'
        })//new
    }, []);

    //-----------------------
    function openPopup() {
        document.getElementById('codePopupID').style.opacity = '1';
        document.getElementById('codePopupID').style.zIndex = '1';
    };
    function closePopup() {
        document.getElementById('codePopupID').style.opacity = '0';
        document.getElementById('codePopupID').style.zIndex = '-1';
    };

    const submitCode = (evt) => {
        console.log('code was submitted', accessKey);
        dispatch({
            type: 'ADD_USER_KEY',
            payload: { 
                key: accessKey, //Send the key code
                name: resultCondition.name, // send the current name of the Condition
                id: resultCondition.id
            }
        });
    };

    function handleCodeChange(event) {
        console.log('code change value:', event.target.value);
    }; //Don't really need this


    function saveCondition(evt) {
        evt.preventDefault();
        console.log('in save condition');
        let conditionId = "";
        let conditionName = "";
        let conditionCode = "";
        let verified = "";
        // console.log('HJHHHHHHH',resultCondition);
            conditions.map(condition => {

                if (condition.name === resultCondition.name) {
                    conditionId = condition.id;
                    conditionName = condition.name;
                    conditionCode = condition.access_key;
                    verified = condition.verified;
                    // console.log('VERIFIED VERIFIED VERIFIED',verified);
                    // console.log(conditionId, ':condition id');
                    // console.log(conditionName, ':condition name');
                    // console.log(conditionCode, ':access key');
                    console.log(condition.name ,'conditions result');

                } else {
                    return;
                }

            });
            console.log(verified ,'conditions result');
            if (!conditionName) {
                return;
            } else {
                dispatch({
                    
                    type: 'ADD_PROFILE_CONDITION',
                    payload: {
                        id: conditionId, // The condition's ID on this page
                        name: conditionName, // The condition's name on this page
                        code: conditionCode
                    }
                }),
                dispatch({
                    type: 'FETCH_PROFILE_CONDITIONS' 
                })
            
        }
   
    };
    return (
        <>
            <h1>Results page</h1>
            <button
                onClick={(evt) => { saveCondition(evt) }}
            >
                Save Condition to Your List
            </button>

            <button
                onClick={openPopup}
            >
                - Add Access Code -
            </button>

            <h1 id="conditionShowing"> {resultCondition.name} </h1>

            <div className="codePopupContainer" id="codePopupID">
                <button onClick={closePopup}>
                    X
                </button>
                <p>If you were given an access code for <b>{resultCondition.name}</b>,
                    enter it here and your questionnaire data (filled out <Link to="/questions">here</Link>), will be added to this condition.
                </p>
                <form
                    id="form1"
                    onSubmit={(evt) => submitCode(evt)}>
                    <input
                        className="codeInput"
                        onChange={(evt) => setAccessKey(evt.target.value)}
                        value={accessKey}
                    >
                    </input>
                    <button
                        id="form1"
                        type="submit" >
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
                        <td>Question:
                         
                        </td>
                        <td>Answer:
                        </td>
                        <td>0</td>
                    </tr>
                </thead>
            </table>
        </>
    )
};

export default Results;