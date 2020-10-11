import store from './redux/reduxStore';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


let rerender = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

rerender(store.getState());

store.subscribe( () => {
  let state = store.getState();
  rerender(state);
});

serviceWorker.unregister();
