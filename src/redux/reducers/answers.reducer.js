const answersReducer = (state = [], action) => {
    console.log('answerReducer action.payload is: ',action.payload)
    switch (action.type) {
      case 'SET_ANSWERS':
        return [
            ...state, ...action.payload
        ]
     //   case 'UPDATE_ANSWER':
    //     return action.payload;
    }
    
    return state;

};
  
  // user will be on the redux state at:
  // state.user
  export default answersReducer;