import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Questions() {
    const dispatch = useDispatch();
    const history = useHistory();
    const questions = useSelector(store => store.questions); //grabs questions array from store
    const answers = useSelector(store => store.answers);
    const user = useSelector(store => store.user);
    console.log('and the USERS IS',user);
    console.log('The answers array is...',answers.arr); 

    useEffect(() => {
        dispatch({
            type: 'FETCH_QUESTIONS' 
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
    };

    return (
        <>
            <div className='pageContainer'>
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
                                onBlur={(evt) => {changeAnswer(evt, question.id)}}
                            >
                            </input>
                        </td>
                    </tr>                  
                ))}               
                </thead>
            </table>
        </div>
        </>
    )
};


export default Questions;