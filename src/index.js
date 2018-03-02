import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
ReactDOM.render(
    <BrowserRouter>
        <Provider store={ {} } >
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
