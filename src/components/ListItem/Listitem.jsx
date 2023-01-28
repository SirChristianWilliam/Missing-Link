import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

function ListItem(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    console.log('what are {props}.condition_id in ListItem ', props.item.condition_id);
    const user = useSelector(store => store.user);
    const conditions = useSelector(store => store.conditions);

    useEffect(() => {
        dispatch({
            type: 'FETCH_PROFILE_CONDITIONS'
        }),
            dispatch({
                type: 'FETCH_CONDITIONS'
            }),
             dispatch({
                type: 'FETCH_ALL_PROFILE_CONDITIONS'
            })
    }, []);
    
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
            <td 
                onClick={(evt) => { backToResults(evt) }}  
                className="tdCondition"
                title="Click to access results page">
                <span >{props.item.con_name}</span>
            </td>

            <td>
                {props.item.verified}
            </td>
            <td className='removeTd'>
                <Button 
                variant="contained"
                sx={{
                    fontSize:'12px',
                    bgcolor: '#5bc0a7',
                    color:'white'
                  }}
                className='buttonHover'
                onClick={removeItem} 
>
                    Delete Row
                </Button>
            </td>
        </>
    )
};

export default ListItem;