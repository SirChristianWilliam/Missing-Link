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


import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';

// I think I need to map through the
// "answers", "questions"."question", and the "questions"."placeholder_hint".
// Then, the user will input their answer and when the targeted input field
// loses focuse (blur), it will send that data as a 'POST' to the user's
// "answers" values. 

function Questions() {
    const dispatch = useDispatch();
    const history = useHistory();
    const questions = useSelector(store => store.questions); //grabs questions array from store
    const answers = useSelector(store => store.answers);
    const user = useSelector(store => store.user);
    console.log('and the USERS IS',user);
    console.log('The answers array is...',answers.arr); //This is fine in some cases, I will need all
    // the answers of all users to be displayed at one point. However, to USE the specific
    // answer data of a specific user, I will need to fetch the answers only where the
    // user's ID matches the currently logged in user
    useEffect(() => {
        dispatch({
            type: 'FETCH_QUESTIONS' // Immediately call this, and head to the questions saga
        }),
        dispatch({
            type:'FETCH_ANSWERS'
        }),
        dispatch({
            type:'FETCH_USER'
        })
    }, []); 

    function changeAnswer(evt,id) {
        evt.preventDefault();
        console.log('the input text is set to: ', evt.target.value); //Shows the value of the input when you lose focus of the input
        console.log('the question ID is: ',id); // This is the question id

             dispatch({
                type: 'UPDATE_ANSWER',
                payload: {
                    id: id, // The question's ID
                    name: evt.target.value // The text of the changed input
                }
            })
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
                        
                        {/* only show results of questions
                        of the currently logged in user.id*/}
                        <td>
                            
                            {question.question}  
                        </td>
                        <td >
                            <input 
                                type="text" 
                                placeholder={question.placeholder}
                                // value={this.value}
                                onBlur={(evt) => {changeAnswer(evt, question.id)}}
                            >
                            </input>

                        </td>
                    </tr>
                    
                ))}
                
                </thead>
            </table>

        </>
    )
};


export default Questions;