import { all } from "redux-saga/effects";
import { watchAsyncitemSaga } from "./ItemSaga";

export function* rootSaga() {
  yield all([watchAsyncitemSaga()]);
}
