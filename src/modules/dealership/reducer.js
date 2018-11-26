import actionTypes from "./actionTypes";
import dealershipUtility from "../../util/modules/dealership/dealershipUtility";

const initialState = dealershipUtility.buildInitialStore();

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
        dealerships: payload
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
        dealerships: []
      };
    }

    case actionTypes.RESET: {
      return initialState;
    }

    default:
      return state;
  }
}
