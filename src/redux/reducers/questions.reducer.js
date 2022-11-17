const questionsReducer = (state = [], action) => {
    console.log('WHAT IS STATE',state);
    console.log('WHAT IS ACTION payload payload 4 questions', action.payload)
    switch (action.type) {
      case 'SET_QUESTIONS':
        return action.payload;
        default:
            return state;
    }
 
};
  
  // user will be on the redux state at:
  // state.user
  export default questionsReducer;