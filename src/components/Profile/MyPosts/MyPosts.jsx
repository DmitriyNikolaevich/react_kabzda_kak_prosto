import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let Refer = React.createRef();

let addPost = () => {
    let text = Refer.current.value;
    alert(text);
}

const MyPosts = (props) => {

    let postsItems = props.posts.map( el => (<Post src={el.src} text={el.text} likes={el.likes} />));

    return (
        <div>
            <div>
                <h3>My Posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={Refer}></textarea>
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