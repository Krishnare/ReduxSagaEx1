import { RECEIVE_API_DATA, CLICK_STORE_DATA } from '../actions/product-actions';

 function productReducer (state={}, {type, data, imageId} ){
  switch(type){
    case RECEIVE_API_DATA:
      return data;
    case CLICK_STORE_DATA:
      return imageId;

            default:
      return state;
  }
}
export default productReducer;