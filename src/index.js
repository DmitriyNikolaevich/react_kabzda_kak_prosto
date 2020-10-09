import state, { addMessage, addPost, stateCallback, writeMessage, writeWords } from './redux/state';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


let rerender = (state, addMessage, addPost, writeWords, writeMessage) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addMessage={addMessage} addPost={addPost} writeWords={writeWords} writeMessage={writeMessage}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

rerender(state, addMessage, addPost, writeWords, writeMessage);

stateCallback(rerender);

serviceWorker.unregister();
