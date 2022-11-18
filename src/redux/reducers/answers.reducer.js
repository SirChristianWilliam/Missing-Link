const answersReducer = (state = [], action) => {
    console.log('help help help',action.payload)
    switch (action.type) {
      case 'SET_ANSWERS':
        return action.payload;
      case 'ADD_ANSWER':
        return action.payload;
    }
    return state;

};
  
  // user will be on the redux state at:
  // state.user
  export default answersReducer;