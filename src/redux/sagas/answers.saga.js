import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAnswers() {
    try {
        const answers = yield axios.get('/api/answers');
        console.log('fetchAnswers SAGA, answers.data : ',answers.data)
        yield put({
            type: 'SET_ANSWERS',
            payload: answers.data     
        })
    } catch (err) {
        console.log('fetchAnswers get request failed in fetchAnswers SAGA', err);
    }
};

function* updateAnswer(action) {
    console.log('in updateAnswer!!!!!!', action.payload);
    // action.payload is an object with the question id, and the input name
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };

        yield axios.put(`/api/answers`,action.payload);
        const updatedAnswers = yield axios.get('/api/answers',config);
          console.log('updateAnswer Saga, updatedAnswers.data is: ',updatedAnswers.data);
        yield put({
            type: 'SET_ANSWERS',
            payload: updatedAnswers.data 
        })
    } catch(err) {
        console.log('error in updateAnswer SAGA(put)',err);
    }
};
function* resultCondition(action) {
    console.log('resultCondition SAGA action.payload.name: ',action.payload.name)
    try {
          yield put({
            type: 'SET_RESULT_CONDITION',
            payload: action.payload     
        })
    } catch(err) {
        console.log('error in resultCondition SAGA',err);
    }
};

function* fetchAllProfileConditions(action) {
    console.log('fetchAllProfileConditions action.payload',action);
    try {
        const userLists = yield axios.get('/api/userlist/all');
        console.log('what what what what huh why', userLists.data)
          yield put({
            type: 'SET_ALL_RESULT_CONDITION',
            payload: userLists.data     
        })
    } catch(err) {
        console.log('error in fetchAllProfileConditions',err);
    }
};

function* fetchForCondition(action) {
    console.log('fetchForCondition SAGA, action.payload.name',action.payload.name);
    try {
        const resultsAnswers = yield axios.get(`/api/answers/conditionResult/${action.payload.name}`);
        yield put({
            type: 'SET_CONDITION_DATA',
            payload: resultsAnswers.data
        })
    } catch(err) {
        console.log('error in fetchForCondition SAGA',err);
    }
};

function* answersSaga() {
    yield takeLatest('FETCH_ANSWERS', fetchAnswers);
    yield takeLatest('UPDATE_ANSWER', updateAnswer); // Called from questions.jsx 
    yield takeLatest('UPDATE_RESULTS_CONDITION', resultCondition);
    yield takeLatest('FETCH_ALL_PROFILE_CONDITIONS',fetchAllProfileConditions);
    yield takeLatest('FETCH_FOR_CONDITION',fetchForCondition);
};

export default answersSaga;
