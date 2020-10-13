import store from './redux/reduxStore';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'


let rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,    document.getElementById('root')
  );
};

rerender();

store.subscribe(() => {
  rerender()
  });

serviceWorker.unregister();
