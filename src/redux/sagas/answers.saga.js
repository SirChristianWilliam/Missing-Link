import { accordionSummaryClasses } from '@mui/material';
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchAnswers(action) {

    console.log('the action payload for fetchAnswers is', action.payload);
    try {
        const response = yield axios.get('/api/answers');
        yield put({
            type: 'SET_ANSWERS',
            payload: response.data,
        })
    } catch (err) {
        console.log('get qeustions request failed', err);
    }
    //   try {
    //     const config = {
    //       headers: { 'Content-Type': 'application/json' },
    //       withCredentials: true,
    //     };

    //     const response = yield axios.get('/api/user', config);

    //     yield put({ type: 'SET_USER', payload: response.data });
    //   } catch (error) {
    //     console.log('User get request failed', error);
    //   }
    // console.log('in questions saga.js')
}

function* answersSaga() {
    //   yield takeLatest('FETCH_USER', fetchUser);
    yield takeLatest('FETCH_ANSWERS', fetchAnswers)
}

export default answersSaga;
