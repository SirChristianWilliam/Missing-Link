import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ANSWERS" actions
function* fetchAnswers() {

    console.log('the action payload for fetchAnswers is', answers.payload);
    try {
        const answers = yield axios.get('/api/answers');
        yield put({
            type: 'SET_ANSWERS',
            payload: answers.data     
        })
    } catch (err) {
        console.log('get qeustions request failed', err);
    }
    
    //  yield put({
    //     type:'SET_ANSWERS',
    //     payload: answers.data
        
    // })
    
};

function* addAnswer(action) {
    console.log('the action.payload for addAnswer is:', action.payload); //Might need another thing here
    try {
        yield axios.put(`/api/answers`,action.payload);
        yield put({type: 'FETCH_ANSWERS'})
    } catch(err) {
        console.log('error in addAnswer PUT',err);
    }
};

function* answersSaga() {
    //   yield takeLatest('FETCH_USER', fetchUser);
    yield takeLatest('FETCH_ANSWERS', fetchAnswers);
    yield takeLatest('ADD_ANSWER', addAnswer);
}

export default answersSaga;
