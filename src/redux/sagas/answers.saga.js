import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ANSWERS" actions
function* fetchAnswers() {
    console.log('HERE I AM IN FETCHANSWERS SAGA')
    try {
        const answers = yield axios.get('/api/answers');
        console.log('what is answers.data then? : ',answers.data)
        yield put({
            type: 'SET_ANSWERS',
            payload: answers.data     
        })
    } catch (err) {
        console.log('get qeustions request failed', err);
    }

};

function* updateAnswer(action) {
    console.log('in updateAnswer', action.payload);
    // action.payload is an object with the question id, and the input name
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };

        yield axios.put(`/api/answers`,action.payload);
        
        const updatedAnswers = yield axios.get('/api/answers',config);
          console.log(updatedAnswers.data,'is the updatedAnswers')
        yield put({
            type: 'SET_ANSWERS',
            payload: updatedAnswers.data 
        })
    } catch(err) {
        console.log('error in updateAnswer.saga(put)',err);
    }
};
function* resultCondition(action) {
    console.log('what is action in resultCondition',action.payload.name)
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
          yield put({
            type: 'SET_RESULT_CONDITION',
            payload: action.payload.name     
        })
    } catch(err) {
        console.log('error in updateAnswer.saga(put)',err);
    }
}
function* answersSaga() {
    //   yield takeLatest('FETCH_USER', fetchUser);
    yield takeLatest('FETCH_ANSWERS', fetchAnswers);
    yield takeLatest('UPDATE_ANSWER', updateAnswer); // Called from questions.jsx 
    yield takeLatest('UPDATE_RESULTS_CONDITION', resultCondition)
}

export default answersSaga;
