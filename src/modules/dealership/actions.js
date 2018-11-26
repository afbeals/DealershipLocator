import actionTypes from "./actionTypes";

const actions = {
  requestDealerships: ()  => ({
    type: actionTypes.REQUEST
    
  }),
  requestDealershipsSuccess: dealerships  => ({
    type: actionTypes.REQUEST_SUCCESS,
    payload: dealerships
  }),
  requestDealershipsFailure: msg => ({
    type: actionTypes.REQUEST_FAILURE,
    payload: {
      clientMessage: "Failed to fetch dealerships",
      devMessage: msg
    }
  }),
  clearDealershipList: () => ({
    type: actionTypes.CLEAR_LIST
  }),
  resetDealershipStore: () => ({
    type: actionTypes.RESET
  })
};

export default actions;
