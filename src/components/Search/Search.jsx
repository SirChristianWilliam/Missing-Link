import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Fuse from 'fuse.js';
import axios from 'axios';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

function Search() {
    const [query, setQuery] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const [conditions, setConditions] = useState([]);
    const fuse = new Fuse(conditions, {
        keys: [
            'name'
        ],
        includeScore: true
    })
    const results = fuse.search(query);
    console.log(results, 'results');
    console.log('fuse', fuse);
    const characterResults = results.map(result => result.item);

    useEffect(() => {
        axios({
            method: 'GET',
            url: '/api/conditions'
        }).then((response) => {
            setConditions(response.data);
        }).catch((err) => {
            console.log('ERROR in getting conditions');
        })
    }, []);
    
    function handleOnSearch({ currentTarget = {} }) {
        const { value } = currentTarget;
        setQuery(value);
    }

    function handleSubmit(evt) {   
        evt.preventDefault();
        let matchingCondition = conditions.find(condition => {
            return condition.name === query;
        });
        if (matchingCondition) {
            dispatch({
                type: 'UPDATE_RESULTS_CONDITION',
                payload: matchingCondition
            });
            history.push('/results');
            return;
        } else {
            alert(`Condition ${query} not found`);
        }
    };
    function setValue(evt) {
        console.log(evt.target.innerText)
        setQuery(evt.target.innerText); //Change this to useState 
    }
    return (
        <>
        <div className='pageContainer'>
            <h1 className="searchPageh2 ">Search </h1>
            <div className="container">
                {/* <h2>Welcome, {user.username}!</h2> */}
            </div>
            <div className='searchMainContainer'>
                <p id="searchIntro">
                    Welcome {user.username}! Here you will be able to
                    look up specific medical conditions.
                    Diagnosed patients have entered in a
                    huge list of data for their diagnosed
                    condition/disease. Discover similarly shared
                    characteristics in the hopes of
                    discovering a correlation, or ‘missing link’,
                    between otherwise seemingly unrelated attributes.
                    When you select a condition, you will be able
                    to see similar experiences
                    shared amongst patients in the hopes of finding
                    an unkown correlation that could point
                    researchers, doctors, or even YOU in new,
                    perhaps unconventional, directions.
                    Let’s get started by searching for a condition below!
                </p>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='searchForm'>
                    <input
                        type="text"
                        autoComplete='off'
                        id="myInput"
                        value={query}
                        onChange={handleOnSearch}
                        className='searchInput'
                        placeholder="Search a condition"
                    >
                    </input>
                    <Button
                            type='submit'
                            className='buttonHover'
                            variant="contained"
                            sx={{
                                bgcolor: '#5bc0a7',
                                width: '100px',
                                fontSize:'13px'
                              }}
                            
                        >
                            Search
                        </Button>
                    <table className='fuseContainer'>
                        <tbody>
                            {characterResults.map(condition => {
                                const { name } = condition;
                                return (
                                    <tr
                                        key={name}
                                        className="fusetd">
                                        <td onClick={(evt) => {setValue(evt)}} >
                                            {name}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
            </div>
            
        </>
    );
};


export default Search;