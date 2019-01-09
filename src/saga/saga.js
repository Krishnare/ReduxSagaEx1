import { call, put, takeEvery, select, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { axios } from 'axios';

import { REQUEST_API_DATA, receiveApiData, CLICK_STORE_DATA, clickStoreData} from '../actions/product-actions';
import { fetchData } from '../api';
// export const FETCH_USERS  = 'FETCH_USERS';

const getPage = state => state.nextPage
function* fetchProducts(action){
  try {
    const page = yield select(getPage)
    const dataDetail = yield call(fetchData, page);
    console.log(page);
    yield put(receiveApiData(dataDetail));
  } catch (e){
    console.log(e)
  }
};
function* clickUpdateData(){
 const watcher =  yield call(delay, 5000);
  yield put(clickStoreData());
  yield cancel(watcher);
}
function* mySaga() {
  yield takeEvery(REQUEST_API_DATA, fetchProducts);
  yield takeEvery(CLICK_STORE_DATA, clickUpdateData);
}
export default mySaga;