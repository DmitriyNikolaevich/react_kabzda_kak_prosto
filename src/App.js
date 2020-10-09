import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/state';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wraper'>
      <Header />
      <Nav />
      <div className='content'>
        <Route render={ () => <Profile state={props.store.getState()} addPost={props.store.addPost.bind(store)} writeWords={props.store.writeWords.bind(store)} />} path='/profile' />
        <Route render={ () => <Dialogs state={props.store.getState()} addMessage={props.store.addMessage.bind(store)} writeMessage={props.store.writeMessage.bind(store)} />} path='/dialogs' />
        <Route component={News} path='/news' />
        <Route component={Music} path='/music' />
        <Route component={Settings} path='/settings' />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;

