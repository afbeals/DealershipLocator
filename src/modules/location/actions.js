import actionTypes from "./actionTypes";

const actions = {
  requestLocations: locationList => ({
    type: actionTypes.REQUEST,
    payload: locationList
    
  }),
  requestLocationsSuccess: locations  => ({
    type: actionTypes.REQUEST_SUCCESS,
    payload: locations
  }),
  requestLocationsFailure: msg => ({
    type: actionTypes.REQUEST_FAILURE,
    payload: {
      clientMessage: "Failed to fetch locations",
      devMessage: msg
    }
  }),
  clearLocationList: () => ({
    type: actionTypes.CLEAR_LIST
  }),
  resetLocationStore: () => ({
    type: actionTypes.RESET
  })
};

export default actions;
