
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

//HOW TO: THE USERNAME ALREADY SHOWS. I NEED TO 
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function changePic() {
    console.log('Change pic clicked');
    //* onClick, open images folder to replace 
    //this image to one of your choosing.

}
function Profile() {
    const history = useHistory();
    const user = useSelector((store) => store.user);

    function editUsername(event) {
        event.preventDefault();
        console.log('edit username button clicked', event.target.value)
    };

    function editEmail(event) {
        event.preventDefault();
        console.log('edit email button clicked', event.target.value)
    };
    function deleteRow(event) {
        event.preventDefault();
        console.log('Profile delete clicked', event.target.value)
    }
    return (
        <>
            <h1>Profile Page</h1>
            {/* LEFT SIDE OF PROFILE PAGE */}
            <div className='profileLeftContainer'>
                <img
                    onClick={changePic}
                    className="ppic"
                    src="ppic.png">
                </img>
                <div>
                    <h3>Username:</h3>
                    <span>
                        {user.username}
                        <button
                            onClick={editUsername}
                        >
                            Edit
                        </button>
                    </span>
                </div>

                <div>
                    <h3>Email:</h3>
                    <span>
                        {user.email}
                        <button
                            onClick={editEmail}
                        >Edit
                        </button>
                    </span>
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
                        <th>Condition</th><th>Key Access?</th><th>Delete</th>
                    </tr>
                    <tr>
                        <td>- map saved condition -</td>
                        <td>- map boolean value for that condition, show checkmark -</td>
                        <td><button
                            onClick={deleteRow}
                        >Delete
                        </button>
                        </td>
                    </tr>
                    </thead>
                </table>

            </div>

            {/* END */}
        </>

    )
};

export default Profile;