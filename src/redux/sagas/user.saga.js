import axios from 'axios';
import { put, take, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}
function* addUserKey(action) {
  console.log('in addUserKey, action.payload is: ', action.payload);
  console.log(  action.payload.key);
  console.log(  action.payload.name);

  try {
    yield axios.put(`/api/user/userkey`, action.payload);
    // Sending the access key value AND the name of the condition.
    yield axios.get(`/api/user`);
  } catch (err) {
    console.log('error in addUserKey.saga(put)', err);
  }
}

function* editUser(action) {
  console.log('in editUser generator saga', action.payload)
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.put(`/api/user/useredit`, action.payload);

    const updatedUser = yield axios.get('/api/user', config);
    console.log(updatedUser.data.username, 'is the updatedUser');

    yield put({
      type: 'SET_USER',
      payload: updatedUser.data
    })

  } catch (err) {
    console.log('error in editUser.saga(put)', err);
  }
}

function* editEmail(action) {
  console.log('in editEmail generator saga', action.payload)
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.put(`/api/user/editemail`, action.payload);

    const updatedEmail = yield axios.get('/api/user', config);
    console.log(updatedEmail.data.email, 'is the updatedEmail');

    yield put({
      type: 'SET_USER',
      payload: updatedEmail.data
    })

  } catch (err) {
    console.log('error in editUser.saga(put)', err);
  }


}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('ADD_USER_KEY', addUserKey);
  yield takeLatest('EDIT_USER', editUser);
  yield takeLatest('EDIT_EMAIL', editEmail);
}

export default userSaga;
