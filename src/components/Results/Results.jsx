
//  THIS PAGE WILL HAVE THE ADD CODE BUTTON FOR THE 
// 'POP-UP' FOR THE CODE ENTRY,A SAVE COMPARISON BUTTON, AN
// AND A TABLE DISPLAYING ALL THE QUESTIONS AND ANSWERS,
// THE TABLE WILL ALSO HAVE THE MATCHES.
// THE TABLE WILL HAVE 3 COLUMNS PROBABLY


function Results() {

    function saveCondition(event) {
        event.preventDefault();
        console.log('saveCondition clicked, ev.target.val is', event.target.value);
    };

    //-----------------------
    function openPopup() {
        console.log('openPopup button clicked')
        //This will open pop-up box
    };

    // pop up box code goes here for now

    function submitCode() {
        console.log('code was submitted');
        //This will also need conditional in case the code was wrong.
        //(if entered code equals the current disease codename and
        // any of the current user's keys, then go ahead and add it. )
    }

    function handleCodeChange(event) {
        console.log('code change value:', event.target.value);
    }

    function closePopup() {
        console.log('close Popup button clicked')
    }

    //end of pop up box code
    //-----------------------------

    return (
        <>
            <h1>Results page</h1>
            <button
                onClick={saveCondition}
            >
                Save Condition to Your List
            </button>
            <button
                onClick={openPopup}
            >
                - Add Access Code -
            </button>

            {/* HIDE THIS UNTIL */}
            <div className="codePopupContainer">
                <button onClick={closePopup}>
                    X
                </button>
                <p>If you were given an access code for "CONDITON",
                    enter it here and your questionnaire data(accessed
                    from your profile page), will be added.
                </p>
                    <form
                        onSubmit={submitCode}>
                        <input
                            className="codeInput"
                            onChange={handleCodeChange}
                        >
                        </input>
                        <button
                            type="submit"
                        >
                            Submit Code
                        </button>
                    </form>
                

            </div>


        </>
    )
};

export default Results;