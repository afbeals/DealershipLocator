import actionTypes from "./actionTypes";
import employeeUtility from "../../util/modules/employee/employeeUtility";

const initialState = employeeUtility.buildInitialStore();

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.REQUEST: {
      return {
        ...state,
        error: null,
        isLoading: true,
        isLoaded: false
      };
    }

    case actionTypes.REQUEST_SUCCESS: {
      return {
        ...state,
        error: null,
        isLoading: false,
        isLoaded: true,
        employees: payload
      };
    }

    case actionTypes.REQUEST_FAILURE: {
      return {
        ...state,
        error: payload.clientMessage,
        isLoading: false,
        isLoaded: false
      };
    }

    case actionTypes.CLEAR_LIST: {
      return {
        ...state,
        employees: null
      };
    }

    case actionTypes.RESET: {
      return initialState;
    }

    default:
      return state;
  }
}
