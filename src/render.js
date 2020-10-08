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

  export default rerender;