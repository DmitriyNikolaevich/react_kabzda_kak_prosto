import store from './redux/state';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


let rerender = (store) => {
    ReactDOM.render(
      <React.StrictMode>
        <App store={store} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

rerender(store);

store.stateCallback(rerender);

serviceWorker.unregister();
