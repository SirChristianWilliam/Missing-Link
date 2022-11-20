import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchConditions() {
    console.log('HERE I AM IN FETCHCODNITIONS SAGA');
    try {
        const conditions = yield axios.get('/api/conditions');
        console.log('what is conditions.data then? : ',conditions.data)
        yield put({
            type: 'SET_CONDITIONS',
            payload: conditions.data     
        })
    } catch (err) {
        console.log('get qeustions request failed', err);
    }

}


function* conditionsSaga() {
    //   yield takeLatest('FETCH_USER', fetchUser);
    yield takeLatest('FETCH_CONDITIONS', fetchConditions);
}


export default conditionsSaga;
