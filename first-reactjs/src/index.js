import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
// alias
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
// import {store, test} from './redux/store' // normal import
import * as store from './redux/store' // import default

// npx create-react-app , SPA, we can use NextJS for multiple page application or use react-router-dom (client-side route)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
