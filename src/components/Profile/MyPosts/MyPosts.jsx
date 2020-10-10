import React from 'react';
import { addPostActionCreator, writeWordsActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let Refer = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let newText = Refer.current.value;
        props.dispatch(writeWordsActionCreator(newText));
    };

    let postsItems = props.state.posts.map( el => (<Post src={el.src} text={el.text} likes={el.likes} />));

    return (
        <div>
            <div>
                <h3>My Posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={ Refer } onChange={ onPostChange } value={props.state.newPostText} />
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