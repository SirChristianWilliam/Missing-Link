import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function ListItem(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    console.log('what are {props}.condition_id in ListItem ', props.item.condition_id);
    const user = useSelector(store => store.user);
    const conditions = useSelector(store => store.conditions);

    const removeItem = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: {
                url: `${props.item.condition_id}`
            }
        })
    };

    function backToResults(evt) {
        evt.preventDefault();
        console.log('backToResults evt.target.innerText', evt.target.innerText);// useState???

        dispatch({
            type: 'UPDATE_RESULTS_CONDITION',
            payload: {
                id: props.item.condition_id,
                name: props.item.con_name
            }
        })
        history.push('/results');
    };

    return (
        <>
            <td onClick={(evt) => { backToResults(evt) }}>
                <span>{props.item.con_name}</span>
            </td>

            <td>
                {props.item.verified}
            </td>
            <td className='removeTd'>
                <button onClick={removeItem} className="removeBtn">
                    Delete Row
                </button>
            </td>
        </>
    )
};

export default ListItem;