import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import dataDetail  from './reducers/product-reducers';
import imageId  from './reducers/product-reducers';


import mySaga from './saga/saga';
// /import watchFetchProducts from './saga/saga'

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
    dataDetail
});

const store = createStore(
    allReducers, 
    applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__&&
    //     window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store= {store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
