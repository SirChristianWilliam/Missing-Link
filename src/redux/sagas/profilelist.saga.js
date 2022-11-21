import { accordionSummaryClasses } from '@mui/material';
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
}


function* addProfileCondition(action) {

    console.log('in addProfileCondition saga, action is',action.payload);
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
}

function* profilelistSaga() {
    //   yield takeLatest('FETCH_USER', fetchUser);
    yield takeEvery('FETCH_PROFILE_CONDITIONS', fetchProfileConditions);
    yield takeEvery('ADD_PROFILE_CONDITION', addProfileCondition);

}

export default profilelistSaga;