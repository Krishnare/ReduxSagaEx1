import { RECEIVE_API_DATA, CLICK_STORE_DATA } from '../actions/product-actions';

 function productReducer (state={}, {type, dataDetail, imageId}){
  switch(type){
    case RECEIVE_API_DATA:
      return dataDetail.products;
    case CLICK_STORE_DATA: 
      return  Object.assign([], state, {imageId});
            default:
      return state;
  }
}
export default productReducer;