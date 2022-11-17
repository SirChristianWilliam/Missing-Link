
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom'


// const questions = useSelector((store) => {store.questions}); //Something like this, map thru it

function Questions() {
    const dispatch = useDispatch();
    const history = useHistory();
    const answers = useSelector(store => store.answers);
    // const answers = useSelector(store => store.answers);
    console.log('answer ITEMS ARE HEHEHEH', answers);
    // console.log('answer items are', answers);

    useEffect(() => {
        dispatch({
            type: 'FETCH_ANSWERS'
        })

    }, []);

    // function handleChange(event) {
    //     event.preventDefault();
    //     console.log('handleChange, event.target.value is', event.target.value);
    // };

    return (
        <> 
             
                {answers.map(answer => (
                    <tr>
                        <td key={answer.id}>
                             {answer.answers}
                         </td>
                        
                    </tr>

                ))}

        </>
    )
};


export default Questions;