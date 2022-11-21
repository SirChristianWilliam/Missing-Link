
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { useHistory } from "react-router-dom";
// import { useParams } from 'react-router-dom';


// // const questions = useSelector((store) => {store.questions}); //Something like this, map thru it

// function Answers() {
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const params = useParams();// Test this

//     const answers = useSelector(store => store.answers);

//     console.log('answer ITEMS ARE !!!!!!!', answers);

//     useEffect(() => {
//         dispatch({
//             type: 'FETCH_ANSWERS'
//         })
//     }, []);

//     return (
//         <>       
//                 {answers.map(answer => (
//                     <tr>
//                         <td key={answer.id}>
//                              {answer.answers}   
//                          </td>
//                     </tr>
//                 ))}
//                 <p>f</p>
//         </>
//     )
// };


// export default Answers;