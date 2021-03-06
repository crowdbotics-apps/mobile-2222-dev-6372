import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth6353Saga from '../features/EmailAuth6353/redux/sagas';
import CalendarView6352Saga from '../features/CalendarView6352/redux/sagas';
import EmailAuth6350Saga from '../features/EmailAuth6350/redux/sagas';
import CalendarView6349Saga from '../features/CalendarView6349/redux/sagas';
import EmailAuth6346Saga from '../features/EmailAuth6346/redux/sagas';
import CalendarView6345Saga from '../features/CalendarView6345/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth6353Saga,
CalendarView6352Saga,
EmailAuth6350Saga,
CalendarView6349Saga,
EmailAuth6346Saga,
CalendarView6345Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}