import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Fuse from 'fuse.js';
import axios from 'axios';
// THIS PAGE NEEDS THE GREETING AND THE HOW TO USE INFO,
// ALSO NEEDS A DROPDOWN SEARCH INPUT AND A SEARCH/SUBMIT 
// BUTTON FOR THE CONDITIONS IN QUESTIONS. SHOULD BE EASY ENOUGH


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
        dispatch({
            type: 'UPDATE_RESULTS_CONDITION',
            payload: {
                name: evt.target.firstChild.value
            }
        })

        let hasCondition = false;
        {
            conditions.map(condition => {
                if (condition.name == evt.target.firstChild.value) {
                    history.push('/results');
                    hasCondition = true;
                }
            })
        }
        if (hasCondition == true) {
            return;
        } else {
            alert(`Condition ${evt.target.firstChild.value} not found`);
        }
    };

    function setValue(event) {
        console.log('setValue is', event.target.innerHTML);
        var txt = event.target.innerHTML;
        document.getElementById("myInput").value = txt;
    }

    return (
        <>
            {/* <h2>Welcome, {user.username}!</h2> */}
            <h1>Search Page</h1>
            <div className="container">
                <h2>Welcome, {user.username}!</h2>
                {/* <p>Your ID is: {user.id}</p> */}
            </div>
            <div>
                <p id="searchIntro">
                    Welcome! Here you will be able to
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
                    Let’s get started!
                </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="myInput"
                        value={query}
                        onChange={handleOnSearch}
                        className='searchInput'
                        placeholder="Search a condition"
                    >
                    </input>
                    <button
                        type='submit'
                    // onClick={handleClick}
                    >
                        Search
                    </button>
                    <table className='fuseContainer'>
                        <tbody>
                            {characterResults.map(condition => {
                                const { name } = condition;
                                return (
                                    <tr
                                        key={name}
                                        className="fusetd">
                                        <td onClick={setValue}>
                                            {name}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
};


export default Search;