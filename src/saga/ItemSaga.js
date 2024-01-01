import { takeEvery, call, put } from "redux-saga/effects";
import {
 createItemAction,
  getItemsAction,
  updateItemAction,
  deleteItemAction
} from "../action/itemAction";
import { toast } from "react-toastify";
import { getItems } from "../redux/item";

function* createitemSaga(actions) {
  try {
    console.log(actions.payload, "item create");
    const response = yield call(createItemAction, actions.payload);
    console.log(response, "Item create");
    if (response.status === 200) {
      toast.success("Item created successfully");
      yield put({
        type: "GET_ITEMS",
      });
    }
  } catch (error) {
    toast.error(error);
  }
}

function* fetchitemsSaga() {
  try {
    const response = yield call(getItemsAction);

    if (response.status === 200) {
      yield put(
        getItems({
          items: response.data.items,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateitemSaga(actions) {
  try {
    const response = yield call(updateItemAction, actions.payload);
    if (response.status === 200) {
      toast.success("item updated successfully");
      yield put({
        type: "GET_ITEMS",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* deleteitemSaga(actions) {
  try {
    const response = yield call(deleteItemAction, actions.payload);
    if (response.status === 200) {
      toast.success("item deleted successfully");
      yield put({
        type: "GET_ITEMS",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchAsyncitemSaga() {
  yield takeEvery("CREATE_ITEM", createitemSaga);
  yield takeEvery("GET_ITEMS", fetchitemsSaga);
  yield takeEvery("UPDATE_ITEM", updateitemSaga);
  yield takeEvery("DELETE_ITEM", deleteitemSaga);
}
