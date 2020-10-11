import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wraper'>
      <Header />
      <Nav />
      <div className='content'>
        <Route render={ () => <Profile store={props.store} />} path='/profile' />
        <Route render={ () => <DialogsContainer store={props.store} />} path='/dialogs' />
        <Route component={News} path='/news' />
        <Route component={Music} path='/music' />
        <Route component={Settings} path='/settings' />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;

