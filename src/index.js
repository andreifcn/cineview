import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index'


let stateStore = createStore(allReducers);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={stateStore} >
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
