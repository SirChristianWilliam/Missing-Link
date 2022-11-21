
//THIS PAGE NEEDS TO DISPLAY THE USER INFO W/EMAIL, A LINK/BUTTON
// OF SOME SORT TO GET TO THE QUESTIONS PAGE, 
// PUT IT UNDERNEATH THE PROFILE INFORMATION IN THE SAME DI,
// JUST LIKE THE WIREFRAME SHOWS. 
// 2ND DIV CONTAINER NEEDS TO LIST THE SAVED CONDITIONS,
// EACH ONE THAT IS DISPLAYED NEEDS A DELETE BUTTON,
// AND A TEXT THAT SAYS 'ACCESS KEY?' THAT IS ONLY CHECKED
// IF IT'S TRUE. I CAN PROBABLY DO A ::AFTER OR ::BEFORE
// TO DISPLAY THE KEY FOR THE USER
// ALSO, AN EDIT BUTTON FOR THE PROFILE USER'S NAME AND
// EMAIL. I ALSO WANT A BIG CIRCLE WITH EITHER THEIR IMAGE
// TO UPLOAD(YOU SAW THIS IN CLASS FROM STUDENT PRESENTATION),
// OR JUST A BIG LETTER, GRABBED FROM THE FIRST LETTER
// OF THE USER'S NAME.

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
  } from 'react-router-dom';
  
function Profile() {
    // const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const userList = useSelector((store) => store.profilelist);
    const conditions = useSelector((store) => store.conditions);
    console.log('ay ay ay ay',conditions);
    console.log('user list is', userList);
    useEffect(() => {
        dispatch({
            type: 'FETCH_PROFILE_CONDITIONS' // Immediately call this, and head to the profilelist saga
        }),
        dispatch({
            type: 'FETCH_CONDITIONS'
        })
    }, []);

    function editUsername(evt) {
        evt.preventDefault();
        //This is just to change the username's attribute and class
        document.getElementById('userName').setAttribute("contenteditable", 'true');
        document.getElementById('userName').classList.add('borderhere');
    };

    //USERNAME
    function changePic(event) {
        // console.log('in changePic',event.target.src); 
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

    // END USERNAME
    function editEmail(evt) {
        evt.preventDefault();
        document.getElementById('email').setAttribute("contenteditable", 'true');
        document.getElementById('email').classList.add('borderhere');
    }
    function updateEmail(event) {
        event.preventDefault();
        console.log('edit email button clicked', event.target.value);

        document.getElementById('email').setAttribute("contenteditable", 'false');
        document.getElementById('email').classList.remove('borderhere');

        dispatch({
            type: 'EDIT_EMAIL',
            payload: { email: event.target.innerText }
        })
    };

    function deleteRow(event) {
        event.preventDefault();
        console.log('Profile delete clicked', event.target.value)
    }

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
            <h1>Profile Page</h1>
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
                    <h3>Username:</h3>
                    <span
                        id="userName"
                        onBlur={updateUsername}
                    >
                        {user.username}
                    </span>
                    <button
                        onClick={(evt) => { editUsername(evt) }}
                    >
                        Edit
                    </button>
                </div>

                <div>
                    <h3>Email:</h3>
                    <span
                        id="email"
                        onBlur={(event) => { updateEmail(event) }}
                    >
                        {user.email}
                    </span>
                    <button
                        onClick={(evt) => { editEmail(evt) }}
                    >Edit
                    </button>

                </div>

                <div>
                    <p>
                        ⬇ Click button to fill out your own personal questionnaire.
                    </p>
                    <button
                        onClick={() => { history.push('/questions') }}
                    >
                        Let's answer some questions!
                    </button>
                </div>
            </div>
            {/* END */}
            {/* RIGHT SIDE OF PROFILE PAGE */}

            <div className='profileRightContainer'>
                <h2>Your personal condtions list:</h2>
                <table className='profileTableContainer'>
                    <thead>
                        <tr>
                            <th>Condition</th><th>Key for condition?</th><th>Delete</th>
                        </tr>

                        {userList.map(item => {
                            return (
                                <tr key={item}>
                                    <td
                                        onClick={(evt) => {backToResults(evt)}}   
                                    >
                                        {item.con_name}
                                
                                        </td>
                                    <td>
                                       {item.condition}
                                        
                                    </td>
                                    <td><button
                                        onClick={deleteRow}
                                    >Delete
                                    </button>
                                    </td>

                                </tr>
                            )
                        })}


                    </thead>
                </table>

            </div>

            {/* END */}
        </>

    )
};

export default Profile;