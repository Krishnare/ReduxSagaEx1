
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const CLICK_STORE_DATA = "CLICK_STORE_DATA";

export const requestApiData = () => ({type: REQUEST_API_DATA});
export const receiveApiData = (dataDetail) => ({type: RECEIVE_API_DATA, dataDetail});
export const clickStoreData = (imageId) => ({type: CLICK_STORE_DATA, imageId} );

