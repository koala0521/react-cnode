import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import { createStore , applyMiddleware , compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";


import reducer from './reducers';

let store = createStore( reducer , 
    compose(    
        applyMiddleware( thunk ),
        window.devToolsExtension ?  window.devToolsExtension() : f=>f )
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store } >
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
