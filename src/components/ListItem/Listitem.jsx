import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function ListItem(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    console.log('what are the PROPS? ',props.item.condition_id);
    const user = useSelector(store => store.user);
    const conditions = useSelector(store => store.conditions);
    console.log('WHAT WHAT WHAT',conditions)
    console.log('what do be the user in list item',user)
    console.log(user.key,"jjjjjjjjjjjjjj");
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
{/* if the conditions.key = the users key then return true else return false */}

            
           {user.key == conditions.key ? <td>
           True
           </td> : <td>False</td>
           }
           
            <td className='removeTd'><button onClick={removeItem} className="removeBtn">Delete Row</button></td>
        </>
    )
}

export default ListItem;