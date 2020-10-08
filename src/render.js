import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


let rerender = (state, addMessage, addPost) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addMessage={addMessage} addPost={addPost} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

  export default rerender;