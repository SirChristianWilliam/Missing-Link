const conditionsReducer = (state = [], action) => {
    console.log('conditionsReducer action.payload is: ', action.payload);  
    switch (action.type) {
      case 'SET_CONDITIONS':  
        return action.payload;
        default:
            return state;
    }
};
  
  export default conditionsReducer;