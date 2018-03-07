import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import DogApp from './components/DogApp';
import './index.css';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <DogApp />
    </Provider>, 
    document.getElementById('root')
);