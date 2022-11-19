const resultReducer = (state = [], action) => {
console.log('resultReducer action.payload is: ',action.payload)
    switch (action.type) {
      case 'SET_RESULT_CONDITION':  
        return action.payload;
        default:
            return state;
    }
};
  
  export default resultReducer;