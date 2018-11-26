import { all } from "redux-saga/effects";
import { 
  watchRequestForDealerships as requestDealerships,
  watchRequestForDealershipDevMessage as requestDealerError
} from "./dealership/sagas";
import { 
  watchRequestForEmployees as requestEmployees,
  watchRequestForEmployeesDevMessage as requestEmployeeError
} from "./employee/sagas";
import { 
  watchRequestForLocations as requestLocations,
  watchRequestForLocationsDevMessage as requestLocationError
} from "./location/sagas";

export default function* rootSaga() {
  yield all([
    requestDealerships(), 
    requestDealerError(),
    requestEmployees(),
    requestEmployeeError(),
    requestLocations(),
    requestLocationError()
  ]);
}
