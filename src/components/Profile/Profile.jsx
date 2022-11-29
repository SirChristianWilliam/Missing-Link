// I ALSO WANT A BIG CIRCLE WITH EITHER THEIR IMAGE
// TO UPLOAD(YOU SAW THIS IN CLASS FROM STUDENT PRESENTATION),

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ListItem from '../ListItem/Listitem';
import Button from '@mui/material/Button';

function Profile() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const userList = useSelector((store) => store.profilelist);
    const conditions = useSelector((store) => store.conditions);
    console.log('in Profile.jsx, here are the conditions: ', conditions);
    console.log('in Profile.jsx, here is the userList', userList);

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

    function editUsername(evt) {
        evt.preventDefault();
        //This is just to change the username's attribute and class
        document.getElementById('userName').setAttribute("contenteditable", 'true');
        document.getElementById('userName').classList.add('borderhere');
        document.getElementById('userName').focus();
    };

    function changePic(event) {
        console.log('in changePic');
    }
    //IF I WANT THE IMAGES SRC TO STORE LATER, I CAN SEE WHAT IT IS WITH THIS FUNCTION

    function updateUsername(evt) {
        evt.preventDefault();
        console.log('in updateUsername', evt.target.innerText);
        document.getElementById('userName').setAttribute("contenteditable", 'false');
        document.getElementById('userName').classList.remove('borderhere');

        dispatch({
            type: 'EDIT_USER',
            payload: { name: evt.target.innerText }
        })
    };

    function editEmail(evt) {
        evt.preventDefault();
        document.getElementById('email').setAttribute("contenteditable", 'true');
        document.getElementById('email').classList.add('borderhere');
        document.getElementById('email').focus();

    };
    function updateEmail(event) {
        event.preventDefault();
        console.log('updateEmail event.target.value: ', event.target.value);
        document.getElementById('email').setAttribute("contenteditable", 'false');
        document.getElementById('email').classList.remove('borderhere');

        dispatch({
            type: 'EDIT_EMAIL',
            payload: { email: event.target.innerText } //This shouldn't user innerText, useState instead
        })
    };

    function onFileSelected(event) {
        let selectedFile = event.target.files[0];
        let reader = new FileReader();
        let imgtag = document.getElementById("myimage");
        imgtag.title = selectedFile.name;
        reader.onload = function (event) {
            imgtag.src = event.target.result;
        };
        reader.readAsDataURL(selectedFile);
    };

    return (
        <>
            <div className="aboutContainer profContainer">

            <div className='pageContainer'>
                <h1 id="profileh1">Profile Page</h1>
                {/* LEFT SIDE OF PROFILE PAGE */}
                <div className='profileLeftContainer'>
                    <form method="post" enctype="multipart/form-data" onChange={(event) => onFileSelected(event)} >
                        <input type="file" id="imgupload" className="hideInput" />
                        <label for='imgupload'>
                            <img
                                id="myimage"
                                label for='imgupload'
                                onClick={(evt) => { changePic(evt) }}
                                className="ppic"
                                src={"ppic.png"}
                            >
                            </img>
                        </label>
                    </form>

                    <div>
                        <h3 id="userUsername">Username:</h3>
                        <span
                            id="userName"
                            onBlur={updateUsername}
                        >
                            {user.username}
                        </span>
                        <Button 
                            className='buttonHover'
                            variant="contained"
                            sx={{
                                bgcolor: '#5bc0a7'
                              }}
                        id="usernameBtn"
                            onClick={(evt) => { editUsername(evt) }}
                        >
                            Edit


                        </Button>
 
                    </div>

                    <div>
                        <h3 id="userEmail">Email:</h3>
                        <span

                            id="email"
                            onBlur={(event) => { updateEmail(event) }}
                        >
                            {user.email}
                        </span>

                        <Button 
                            className='buttonHover'
                            variant="contained"
                            sx={{
                                bgcolor: '#5bc0a7',
                              }}
                        id="usernameBtn"
                            onClick={(evt) => { editEmail(evt) }}
                        >
                            Edit


                        </Button>
                      
                    </div>

                    <div>
                        <p>
                            ⬇ Click button to fill out your own personal questionnaire.
                        </p>
                        <Button
                            id='answerQuestionsBtn'
                            className='buttonHover'
                            variant="contained"
                            sx={{
                                bgcolor: '#5bc0a7',
                              }}
                            onClick={() => { history.push('/questions') }}
                        >
                            Let's answer some questions!
                        </Button>
                    </div>
                </div>
                {/* END */}
                {/* RIGHT SIDE OF PROFILE PAGE */}
                <div className='profileRightContainer'>
                    <h2>Your personal conditions list:</h2>
                    <table className='profileTableContainer'>
                        <thead>
                            <tr>
                                <th>Condition</th><th>Access key?</th><th>Delete</th>
                            </tr>

                            {userList.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <ListItem key={item.id} item={item} />
                                    </tr>
                                )
                            })}
                        </thead>
                    </table>
                </div>
            </div>
            </div>
        </>
    )
};

export default Profile;