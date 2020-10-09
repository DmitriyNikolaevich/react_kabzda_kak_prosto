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


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wraper'>
      <Header />
      <Nav />
      <div className='content'>
        <Route render={ () => <Profile posts={props.store.state.posts} addPost={props.store.addPost} newPostText={props.store.state.newPostText} writeWords={props.store.writeWords} />} path='/profile' />
        <Route render={ () => <Dialogs dialogs={props.store.state.dialogs} messages={props.store.state.messages} addMessage={props.store.addMessage} newMessageText={props.store.state.newMessageText} writeMessage={props.store.writeMessage} />} path='/dialogs' />
        <Route component={News} path='/news' />
        <Route component={Music} path='/music' />
        <Route component={Settings} path='/settings' />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;

