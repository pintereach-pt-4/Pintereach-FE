import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware} from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"
import {BrowserRouter as Router } from "react-router-dom";
import App from './App';


const store = createStore(rootReducer, applyMiddleware(thunk));

const Home = () => <Router><App/></Router>;

ReactDOM.render(
    <Provider store={store}>
       <Home />
    </Provider>,
    document.getElementById('root')
);

