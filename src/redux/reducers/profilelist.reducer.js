const profilelistReducer = (state = [], action) => {
    console.log('profilelistReducer action.payload is: ', action.payload);  
    switch (action.type) {
      case 'FETCH_PROFLE_CONDITIONS':
        return action.payload;
      case 'SET_PROFILE_LIST':  
        return action.payload;
        default:
            return state;
    }
};
  
export default profilelistReducer;