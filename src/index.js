import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
//import marvelReducer from "./store/marvelStore";
import rootReducer from './store/index'
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);

