import { createSelector } from "reselect";

export const getRootStore = store => store.location;

export const getLocationStore = createSelector(
  [getRootStore],
  rootStore => rootStore
);

export const getLocationError = createSelector(
  [getRootStore],
  rootStore => rootStore.error
);

export const getIsLocationLoading = createSelector(
  [getRootStore],
  rootStore => rootStore.isLoading
);

export const getIsLocationLoaded = createSelector(
  [getRootStore],
  rootStore => rootStore.isLoaded
);

export const getLocations = createSelector(
  [getRootStore],
  rootStore => rootStore.locations
);
