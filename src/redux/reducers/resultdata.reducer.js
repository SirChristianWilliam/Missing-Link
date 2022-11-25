

const resultdataReducer = (state = [], action) => {
    console.log('resultdatareducer', action.payload);
    switch (action.type) {
      case 'SET_CONDITION_DATA':  
        return action.payload;
        default:
            return state;
    }
};
  
export default resultdataReducer;