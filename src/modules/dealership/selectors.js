import { createSelector } from "reselect";

export const getRootStore = store => store.dealership;

export const getDealershipStore = createSelector(
  [getRootStore],
  rootStore => rootStore
);

export const getDealershipError = createSelector(
  [getRootStore],
  rootStore => rootStore.error
);

export const getIsDealershipLoading = createSelector(
  [getRootStore],
  rootStore => rootStore.isLoading
);

export const getIsDealershipLoaded = createSelector(
  [getRootStore],
  rootStore => rootStore.isLoaded
);

export const getDealerships = createSelector(
  [getRootStore],
  rootStore => rootStore.dealerships
);