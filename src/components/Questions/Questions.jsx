// THIS PAGE NEEDS THE QUESTIONS FROM THE QUESTIONS TABLE.
// THE RIGHT SIDE OF PAGE WILL HAVE INPUTS FOR EACH ANSWER
// EACH ANSWER WILL ALSO NEED ITS PLACEHOLDER SHOWING
// EACH INPUT NEEDS TO RECORD EACH KEY CHANGE. MAYBE I'LL DO IT
// SO ON 'BLUE' (LOSE FOCUS), THE DATA FOR THAT SPECIFIC ROW WILL
// BE SAVED TO THE CONDITIONS THAT MATCH THE USER'S KEY. 
// THERE WILL PROBABLY BE NO NEED FOR A SUBMIT BUTTON AT THE END
// THEN, I'LL JUST STATE 'YOUR DATA IS AUTOMATICALLY SAVED.' 
// INCLUDE THE NOTE TO ENSURE ANONYMITY.
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 

import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';


import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Answers from '../Answers/Answers';
// HOW TO: At some point, use GET to get the questions DB data.
// Maybe can use an axios.get to get the data from the db too on useEffect();
// useSelector((store) => {store.questions}) to grab that data from redux store.
// Loop through the questions using .map() down in the return.
// probably. Will look like questions.map(question => ()) or so...
// Don't forget key={i} or key={key}
// Will also be looping the ANSWERS, which are empty to start and
// will be entered in as inputs with placeholders, so I will need
// the placeholder values looped thru.
// I think at first I will loop through the answers table "answers" column,
// and display those as inputs. Basically I think I'll need to use
// axios here to 'GET' the joined tables of "answers" and "questions".
// I think I need to do that because I think I need to map through the
// "answers", "questions"."question", and the "questions"."placeholder_hint".
// Then, the user will input their answer and when the targeted input field
// loses focuse (blur), it will send that data as a 'POST' to the user's
// "answers" values. 

// const questions = useSelector((store) => {store.questions}); //Something like this, map thru it

function Questions() {
    const dispatch = useDispatch();
    const history = useHistory();
    const questions = useSelector(store => store.questions);
    const answers = useSelector(store => store.answers);
    console.log('QUESTION ITEMS ARE ', questions);

    useEffect(() => {
        dispatch({
            type: 'FETCH_QUESTIONS'
        })
    }, []);
 
    function handleAnswerChange(evt) {
        evt.preventDefault();
        console.log('in handleAnswerChange', evt.target.value);
    }
    function changeAnswer(evt,id) {
        evt.preventDefault();
        console.log('in changeAnswer', evt.target.value);
        console.log('in changeAnswer the id is',id);

        //
             dispatch({
                type: 'ADD_ANSWER',
                payload: {
                    id: id,
                    name: evt.target.value
                }
            })
    // With this commented out, I can log in/out fine
        

        //I need to have this data change the user's answer for this
        // specific row somehow. Maybe a dispatch to the answer route,
        // using a PUT axios request? Then the query will be an UPDATE
        // That means I'll need to use req.params to send, like
        // '/api/answers/:id', and then use that id to target which answer
        // I want to update for that specific user.

    }
    return (

        <>
            <button onClick={() => { history.go(-1) }}>Go Back</button>
            <h1>Questions Page</h1>
            <p>Please note: In order to receive honest responses,
                answers are uploaded anonymously. No one will be
                able to see who is associated with these results, as
                they are purely for research purposes.
            </p>
            
            <p>Please type your answer in the given format shown.</p>
            <table className='questionsTable'>
                <thead>
                <tr>
                    <th>Questions</th>
                    <th>Answers</th>
                </tr>
                {questions.map(question => (
                    <tr key={question.id}>
                        <td>
                            {question.question}
                        </td>
                        <td >
                            <input 
                                type="text" 
                                placeholder={question.placeholder}
                                // value={this.value}
                                onChange={handleAnswerChange}
                                onBlur={(evt) => {changeAnswer(evt, question.id)}}
                            >
                            </input>
                            {/* <Answers/> */}
                             {/*This also needed to be commented out to log in/out  */}
                        </td>
                    </tr>
                    
                ))}
                
                </thead>
            </table>

        </>
    )
};


export default Questions;