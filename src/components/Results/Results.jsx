
//  THIS PAGE WILL HAVE THE ADD CODE BUTTON FOR THE 
// 'POP-UP' FOR THE CODE ENTRY,A SAVE COMPARISON BUTTON, AN
// AND A TABLE DISPLAYING ALL THE QUESTIONS AND ANSWERS,
// THE TABLE WILL ALSO HAVE THE MATCHES.
// THE TABLE WILL HAVE 3 COLUMNS PROBABLY

function saveCondition(event) {
    event.preventDefault();
    console.log('in saveCondition, ev.target.val is',event.target.value);
}

function Results() {
    return(
        <>
        <h1>Results page</h1>
            <button
                onClick={saveCondition}
            >
                Save Condition to Your List
            </button>
        
        </>
    )
};

export default Results;