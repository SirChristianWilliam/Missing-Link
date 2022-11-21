import { accordionSummaryClasses } from '@mui/material';
import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_QUESTIONS" actions
function* fetchQuestions() {
    
    console.log('in fetchQuestions saga');
    try {
        const config = {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true,
        }
        const questions = yield axios.get('/api/questions',config);
        console.log('questions.saga questions.data is: ', questions.data); // Array of all the questions & their placeholders
        yield put({
            type: 'SET_QUESTIONS', 
            payload: questions.data // Send payload (from api/questions) to the questions reducer
        })
    } catch (err) {
        console.log('get qeustions request failed', err);
    }
}

function* questionsSaga() {
    //   yield takeLatest('FETCH_USER', fetchUser);
    yield takeEvery('FETCH_QUESTIONS', fetchQuestions);
    
}

export default questionsSaga;
