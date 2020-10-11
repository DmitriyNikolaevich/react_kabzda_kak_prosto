import React from 'react';
import s from './MyPosts.module.css';


const MyPosts = (props) => {

    return (
        <div>
            <div>
                <h3>My Posts</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={ props.onPostChange } value={props.value} />
                </div>
                
                <div>
                    <button onClick={ props.addPost }>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.postsItems}
            </div>
        </div>
    )
}

export default MyPosts;