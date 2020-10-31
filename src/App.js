import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {
  return (
    <div className='app-wraper'>
      <HeaderContainer />
      <Nav />
      <div className='content'>
        <Route render={ () => <ProfileContainer />} path='/profile/:userID?' />
        <Route render={ () => <DialogsContainer />} path='/dialogs' />
        <Route render={ () => <UsersContainer />} path='/users' />
        <Route component={News} path='/news' />
        <Route component={Music} path='/music' />
        <Route component={Settings} path='/settings' />
        <Route component={Login} path='/login' />
      </div>
    </div>
  );
};

export default App;

