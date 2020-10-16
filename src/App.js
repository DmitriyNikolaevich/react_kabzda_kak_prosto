import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';


const App = (props) => {
  return (
    <div className='app-wraper'>
      <Header />
      <Nav />
      <div className='content'>
        <Route render={ () => <Profile />} path='/profile' />
        <Route render={ () => <DialogsContainer />} path='/dialogs' />
        <Route render={ () => <UsersContainer />} path='/users' />
        <Route component={News} path='/news' />
        <Route component={Music} path='/music' />
        <Route component={Settings} path='/settings' />
      </div>
    </div>
  );
};

export default App;

