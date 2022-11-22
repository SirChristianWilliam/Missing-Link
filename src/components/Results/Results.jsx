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
    //gets updated on the Search.jsx onSubmit event.
    const conditions = useSelector((store) => store.conditions);
    console.log('IN RESULTS CONDITIONS ARE', conditions);


    useEffect(() => {
        dispatch({
            type: 'FETCH_CONDITIONS' // Immediately call this, and head to the conditions saga
        })
    }, []);

    //-----------------------
    function openPopup() {
        console.log('openPopup button clicked')
        document.getElementById('codePopupID').style.opacity = '1';
        document.getElementById('codePopupID').style.zIndex = '1';
    };
    function closePopup() {
        console.log('close Popup close button clicked');
        document.getElementById('codePopupID').style.opacity = '0';
        document.getElementById('codePopupID').style.zIndex = '-1';
    };

    const submitCode = (evt) => {
        console.log('code was submitted', evt.target[0].value);
        let target = evt.target[0].value;
        {
            conditions.map(condition => {
                if (condition.access_key == target && condition.name == resultCondition) {
                    // return alert(`Access key ${target} accepted for condition: ${condition.name}`);
                    dispatch({
                        type: 'ADD_USER_KEY',
                        payload: { key: target }
                    })
                } else {
                    return;
                }
            })
        }
    };

    function handleCodeChange(event) {
        console.log('code change value:', event.target.value);
    }; //Don't really need this
    function saveCondition(evt) {
        evt.preventDefault();
        console.log('saveCondition clicked, ev.target.val is', evt.target.value);
        let conditionId = "";
        let conditionName = "";
        let conditionCode = "";
        let verified = "g";
        {
            conditions.map(condition => {

                if (condition.name === resultCondition) {
                    conditionId = condition.id;
                    conditionName = condition.name;
                    conditionCode = condition.access_key;
                    verified = condition.verified;
                    console.log('VERIFIED VERIFIED VERIFIED',verified)
                    console.log(conditionId, ':condition id');
                    console.log(conditionName, ':condition name');
                    console.log(conditionCode, ':access key');

                } else {
                    return;
                }

            });
            console.log(conditionId, conditionName, conditionCode, 'conditions result yuh');
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
        }
        // Now here I need to save this data to my profile page.
        // The user's "user_conditions" table specific to that user will take
        // this data as a POST.


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

            <h1 id="conditionShowing"> {resultCondition} </h1>

            <div className="codePopupContainer" id="codePopupID">
                <button onClick={closePopup}>
                    X
                </button>
                <p>If you were given an access code for <b>{resultCondition}</b>,
                    enter it here and your questionnaire data (filled out <Link to="/questions">here</Link>), will be added to this condition.
                </p>
                <form
                    id="form1"
                    onSubmit={(evt) => submitCode(evt)}>
                    <input
                        className="codeInput"
                        onChange={handleCodeChange}
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