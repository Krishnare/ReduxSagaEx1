import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { axios } from 'axios';

import { REQUEST_API_DATA, receiveApiData} from '../actions/product-actions';
import { fetchData } from '../api';
// export const FETCH_USERS  = 'FETCH_USERS';

function* fetchProducts(action){
  try {
    const data = yield call(fetchData)
    yield put(receiveApiData(data));
  } catch (e){
    console.log(e)
  }
};
function* mySaga() {
  yield takeEvery(REQUEST_API_DATA, fetchProducts);
}
export default mySaga;