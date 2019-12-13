import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import 'semantic-ui-css/semantic.min.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import smurfReducer from './store/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const smurfStore = createStore(
    smurfReducer,
    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(<Provider store={smurfStore}><App /></Provider>, document.getElementById("root"));
