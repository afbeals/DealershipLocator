import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "./actionTypes";
import actions from "./actions";
import api from "../../util/api";

// WATCHERS
export function* watchRequestForEmployees() {
  yield takeLatest(actionTypes.REQUEST, getEmployees);
}

export function* watchRequestForEmployeesDevMessage() {
  yield takeLatest(actionTypes.REQUEST_FAILURE, notifyDev);
}

// PROMISES
export function* getEmployees({ payload }) {
  try {
    const request = { employeesList: payload };
      const    response = yield call(api.fetchEmployees, {request});
    yield put(actions.requestEmployeesSuccess(response.data));
  } catch (e) {
    yield put(actions.requestEmployeesFailure(e));
  }
}

export function notifyDev({payload: {devMessage}}) {
  console.log(`error occured from empoyee request ${devMessage}`);
}

export default watchRequestForEmployees;