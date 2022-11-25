import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchConditions() {
    try {
        const conditions = yield axios.get('/api/conditions');
        console.log('conditions.data in fetchConditions Saga? : ',conditions.data)
        yield put({
            type: 'SET_CONDITIONS',
            payload: conditions.data     
        })
    } catch (err) {
        console.log('fetchConditions SAGA request failed', err);
    }
};
function* conditionsSaga() {
    //   yield takeLatest('FETCH_USER', fetchUser);
    yield takeLatest('FETCH_CONDITIONS', fetchConditions);
};


export default conditionsSaga;
