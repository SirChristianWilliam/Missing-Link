import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchProfileConditions() {
    console.log('in fetchProfileConditions saga');
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        }
        const userList = yield axios.get('/api/userlist', config);
        console.log('profilelist profillist.data is: ', userList.data);
        yield put({
            type: 'SET_PROFILE_LIST',
            payload: userList.data
        })
    } catch (err) {
        console.log(' GET userList request failed', err);
    }
};

function* addProfileCondition(action) {
    console.log('in addProfileCondition saga, action.payload is',action.payload);
    try {
        const config = {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true,
        }
        const userList = yield axios.post('/api/userlist',action.payload,config);
        console.log('SHOW ME THE DATAAAAAAAAAAAAAA: ', userList.data); 
        
        yield put({
            type: 'SET_PROFILE_LIST', 
            payload: userList.data 
        })   
    } catch (err) {
        console.log(' POST userList request failed', err);
    }
};
function* deleteItem(action) {
    console.log('What is the delete item action?',action.payload.url);
    yield axios.delete(`/api/userlist/${action.payload.url}`);

    yield put({
        type: 'FETCH_PROFILE_CONDITIONS'
    })
};

function* profilelistSaga() {
    yield takeEvery('FETCH_PROFILE_CONDITIONS', fetchProfileConditions);
    yield takeEvery('ADD_PROFILE_CONDITION', addProfileCondition);
    yield takeEvery('DELETE_ITEM',deleteItem);
};

export default profilelistSaga;