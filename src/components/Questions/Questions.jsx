// THIS PAGE NEEDS THE QUESTIONS FROM THE QUESTIONS TABLE.
// THE RIGHT SIDE OF PAGE WILL HAVE INPUTS FOR EACH ANSWER
// EACH ANSWER WILL ALSO NEED ITS PLACEHOLDER SHOWING
// EACH INPUT NEEDS TO RECORD EACH KEY CHANGE. MAYBE I'LL DO IT
// SO ON 'BLUE' (LOSE FOCUS), THE DATA FOR THAT SPECIFIC ROW WILL
// BE SAVED TO THE CONDITIONS THAT MATCH THE USER'S KEY. 
// THERE WILL PROBABLY BE NO NEED FOR A SUBMIT BUTTON AT THE END
// THEN, I'LL JUST STATE 'YOUR DATA IS AUTOMATICALLY SAVED.' 
// INCLUDE THE NOTE TO ENSURE ANONYMITY.
function handleChange(event){
    event.preventDefault();
    console.log('handleChange, event.target.value is', event.target.value);
};
function Questions() {
    return(
        <>
            <h1>Questions Page</h1>
            <p>Please note: In order to receive honest responses,
                answers are uploaded anonymously. No one will be
                able to see who is associated with these results, as
                they are purely for research purposes.
            </p>
            <p>Please type your answer in the given format shown.</p>
            <table className="questionsTableContainer">
                <thead>
                    <tr>
                        <th>Questions:</th><th>Answers</th>
                    </tr>  
                    <tr>
                        <td>Ever heard of updog?</td>
                        <td>
                            <input 
                                type='text'
                                // placeholder={questions.placeholder_hint}
                                value='remember put placeholder here'
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </thead>
            </table>
        </>
    )
};


export default Questions;