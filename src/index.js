import store from './redux/state';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


let rerender = (store) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

rerender(store);

store.stateCallback(rerender);

serviceWorker.unregister();
