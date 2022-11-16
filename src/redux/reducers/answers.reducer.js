const answersReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ANSWERS':
        return action.payload;
    }
    return state;

};
  
  // user will be on the redux state at:
  // state.user
  export default answersReducer;