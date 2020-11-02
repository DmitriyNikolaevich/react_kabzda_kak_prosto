import React from 'react';
import s from './MyPosts.module.css';
import PostReduxForm from './PostForm/PostForm';


const MyPosts = (props) => {

    const onSubmit = (postData) => {
        console.log(postData.post);
        props.addPostActionCreator(postData.post);
    }

    return (
        <div>
            <div>
                <h3>My Posts</h3>
            </div>
            <PostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {props.postsItems}
            </div>
        </div>
    )
}

export default MyPosts;