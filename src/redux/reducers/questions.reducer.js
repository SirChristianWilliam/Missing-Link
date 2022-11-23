const questionsReducer = (state = [], action) => {
    console.log('questionsReducer action.payload is: ', action.payload); //Received from questions.saga
    switch (action.type) {
      case 'SET_QUESTIONS':  
        return action.payload;
      case 'SET_ALL_RESULT_CONDITION':
        return action.payload;
        default:
            return state;
    }
};
  
  export default questionsReducer;