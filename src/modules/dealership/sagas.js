import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "./actionTypes";
import actions from "./actions";
import api from "../../util/api";

// WATCHERS
export function* watchRequestForDealerships() {
  yield takeLatest(actionTypes.REQUEST, getDealerships);
}

export function* watchRequestForDealershipDevMessage() {
  yield takeLatest(actionTypes.REQUEST_FAILURE, notifyDev);
}

// PROMISES
export function* getDealerships() {
  try {
    const response = yield call(api.fetchDealerships);
    yield put(actions.requestDealershipsSuccess(response.data));
  } catch (e) {
    yield put(actions.requestDealershipsFailure(e));
  }
}

export function notifyDev({payload: {devMessage}}) {
  console.log(`error occured from dealership request ${devMessage}`);
}

export default watchRequestForDealerships;