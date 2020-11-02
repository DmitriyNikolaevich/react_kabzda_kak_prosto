import React from 'react';
import { Field, reduxForm } from 'redux-form';

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"post"} value={props.value} />
            </div>

            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'post'
})(PostForm)

export default PostReduxForm;