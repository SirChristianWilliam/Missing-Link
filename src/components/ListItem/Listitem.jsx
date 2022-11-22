import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function ListItem(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    console.log('what are the PROPS? ',props.item.condition_id)
    const removeItem = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: {
                url: `${props.item.condition_id}`
            }
        })
    }

    function backToResults(evt) {
        evt.preventDefault();
        console.log('whats the event YOYOYYO',evt.target.innerText);//Grabs the text clicked
   
        dispatch({
            type: 'UPDATE_RESULTS_CONDITION',
            payload: {
                name: evt.target.innerText
            }
        })
        history.push('/results');

    }
    return (
        <>
           <td onClick={(evt) => {backToResults(evt)}}><span>{props.item.con_name}</span></td>
           <td>{props.item.condition}</td>
            <td className='removeTd'><button onClick={removeItem} className="removeBtn">❌ Delete Row ❌</button></td>
        </>
    )
}

export default ListItem;