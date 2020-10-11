import React from 'react';
import { addPostActionCreator, writeWordsActionCreator } from '../../../redux/profilePageReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (e) => {
        let newText = e.target.value;
        props.dispatch(writeWordsActionCreator(newText));
    };

    let postsItems = props.state.profilePage.posts.map( el => (<Post src={el.src} text={el.text} likes={el.likes} />));

    return (
        <div>
            <div>
                <h3>My Posts</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={ onPostChange } value={props.state.profilePage.newPostText} />
                </div>
                
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    )
}

export default MyPosts;