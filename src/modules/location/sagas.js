import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "./actionTypes";
import actions from "./actions";
import api from "../../util/api";

// WATCHERS
export function* watchRequestForLocations() {
  yield takeLatest(actionTypes.REQUEST, getLocations);
}

export function* watchRequestForLocationsDevMessage() {
  yield takeLatest(actionTypes.REQUEST_FAILURE, notifyDev);
}

// PROMISES
export function* getLocations({ payload }) {
  try {
    const request = { locationList: payload },
          response = yield call(api.fetchLocations, {request});
    yield put(actions.requestLocationsSuccess(response.data));
  } catch (e) {
    yield put(actions.requestLocationsFailure(e));
  }
}

export function notifyDev({payload: {devMessage}}) {
  console.log(`error occured from location request ${devMessage}`);
}

export default watchRequestForLocations;