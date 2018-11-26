import { createSelector } from "reselect";

export const getRootStore = store => store.employee;

export const getEmployeeStore = createSelector(
  [getRootStore],
  rootStore => rootStore
);

export const getEmployeeError = createSelector(
  [getRootStore],
  rootStore => rootStore.error
);

export const getIsEmployeeLoading = createSelector(
  [getRootStore],
  rootStore => rootStore.isLoading
);

export const getIsEmployeeLoaded = createSelector(
  [getRootStore],
  rootStore => rootStore.isLoaded
);

export const getEmployees = createSelector(
  [getRootStore],
  rootStore => rootStore.employees
);
