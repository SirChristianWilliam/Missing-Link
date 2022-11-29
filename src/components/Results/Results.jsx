import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Results() {
    const dispatch = useDispatch();
    const resultCondition = useSelector((store) => store.results); //This store value
    const conditions = useSelector((store) => store.conditions);
    const questions = useSelector(store => store.questions); //grabs questions array from store
    console.log('water answers', answers);
    const answers = useSelector(store => store.answers);
    const [accessKey, setAccessKey] = useState('');
    // let count = 0;
    const resultsData = useSelector(store => store.resultdataReducer);

    console.log('On results page, resultsData is: ', resultsData);

    useEffect(() => {
        dispatch({
            type: 'FETCH_CONDITIONS' // Immediately call this, and head to the conditions saga
        }),
            dispatch({
                type: 'FETCH_PROFILE_CONDITIONS'
            }),
            dispatch({
                type: 'FETCH_ALL_PROFILE_CONDITIONS'
            }),
            dispatch({
                type: 'FETCH_FOR_CONDITION',
                payload: resultCondition
            })
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
        // evt.preventDefault();
        console.log('code was submitted', accessKey);
        console.log(resultCondition.name,': resultcondition name ');
        console.log(resultCondition.id,': resultcondition id ');
        console.log(resultCondition.access_key,': resultcondition id ');

        dispatch({
            type: 'ADD_USER_KEY',
            payload: {
                key: accessKey, //Send the key code
                name: resultCondition.name, // send the current name of the Condition
                id: resultCondition.id
            }
        });
    };

    // function handleCodeChange(event) {
    //     console.log('code change value:', event.target.value);
    // }; //Don't really need this


    function saveCondition(evt) {
        evt.preventDefault();
        console.log('in save condition');
        let conditionId = "";
        let conditionName = "";
        let conditionCode = "";
        let verified = "";
        conditions.map(condition => {

            if (condition.name === resultCondition.name) {
                conditionId = condition.id;
                conditionName = condition.name;
                conditionCode = condition.access_key;
                verified = condition.verified;
                alert(`${condition.name} was saved to your personal list, on your profile page!`);
            }  
            dispatch({
                type: 'FETCH_PROFILE_CONDITIONS'
            })
        })
        console.log(verified, 'conditions result');
        if (!conditionName) {
            alert('no condition to save'); 
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

    //-----------------------------------------
    let uniqueArray = [];
    let matchedArray = [];
    let resultToReturn = false;
    var newCount = 0;
    let toMap = {};

console.log('what is results data',resultsData);
    function toFindDuplicates() {
        resultsData.count = 0;

        for (let i = 0; i < resultsData.length; i++) {
            let result=resultsData[i];
            if (toMap[[resultsData[i].question, resultsData[i].answer]]) {
                resultToReturn = true;
            }  else {
                result.count = toMap[[resultsData[i].question,resultsData[i].answer]] = {count:-1};
                uniqueArray.push(result);
            }
            toMap[[resultsData[i].question,resultsData[i].answer]].count += 16;
        }
     }
    toFindDuplicates();
     
    //-----------------------------------------
console.log('resultsData',resultsData);
    return (
        <>
            <div className='pageContainer resultsContainer'>
                <div className='resultsh1Container'>
                <h1 className='resultsresults'>Results</h1>
                <h1 id="conditionShowing"> <span className='conditionStyle'>Condition: </span><span class="conditionNameStyle">{resultCondition.name}</span> </h1>
                </div>
                <div className='buttonResultsContainer'>
                    <Button variant="outlined"
                    sx={{
                        bgcolor: '#5bc0a7',
                        color:'#282321'
                      }}
                      className='buttonHoverResults'
                        onClick={(evt) => { saveCondition(evt) }}
                    >
                        Save Condition to Your List
                    </Button>
                    <br></br>
                    <Button variant="outlined"
                    sx={{
                        bgcolor: '#5bc0a7',
                        color:'#282321'
                      }}
                      className='buttonHoverResults'
                      onClick={openPopup}
                    >
                        - Add Access Code -
                    </Button>
              
                </div>

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

                        {uniqueArray.map(data => (
                                
                            <tr key={data.id}>

                                <td>{data.question}</td>
                                <td>{data.answer}
                                </td>

                                <td>
                                    {data.count.count}
                                </td>
                            </tr>
                        ) 
                        )}
                    </thead>
                </table>
            </div>
        </>
    )
};
export default Results;