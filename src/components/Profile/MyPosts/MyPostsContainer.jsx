import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, writeWordsActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import Post from './Post/Post';



let mapStateToProps = (state) => {
    return {
        postsItems: state.profilePage.posts.map( el => <Post src={el.src} text={el.text} likes={el.likes} />),
        value: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (e) => {
            let newText = e.target.value;
            dispatch(writeWordsActionCreator(newText));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;