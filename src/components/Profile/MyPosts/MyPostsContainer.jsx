import React from 'react';
import { addPostActionCreator, writeWordsActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import Post from './Post/Post';


const MyPostsContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (e) => {
        let newText = e.target.value;
        props.store.dispatch(writeWordsActionCreator(newText));
    };

    let postsItems = props.store.getState().profilePage.posts.map( el => (<Post src={el.src} text={el.text} likes={el.likes} />));

    let value = props.store.getState().profilePage.newPostText;

    return (
        <div>
            <MyPosts addPost = {addPost} onPostChange={onPostChange} postsItems={postsItems} value={value} />
        </div>
    )
}

export default MyPostsContainer;