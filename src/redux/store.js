import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/rootSaga";
import { itemSliceReducer } from "./item";


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    item: itemSliceReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
