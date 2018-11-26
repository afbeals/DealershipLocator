import actionTypes from "./actionTypes";

const actions = {
  requestEmployees: employeeList => ({
    type: actionTypes.REQUEST,
    payload: employeeList
    
  }),
  requestEmployeesSuccess: employees  => ({
    type: actionTypes.REQUEST_SUCCESS,
    payload: employees
  }),
  requestEmployeesFailure: msg => ({
    type: actionTypes.REQUEST_FAILURE,
    payload: {
      clientMessage: "Failed to fetch employees",
      devMessage: msg
    }
  }),
  clearEmployeeList: () => ({
    type: actionTypes.CLEAR_LIST
  }),
  resetEmployeeStore: () => ({
    type: actionTypes.RESET
  })
};

export default actions;
