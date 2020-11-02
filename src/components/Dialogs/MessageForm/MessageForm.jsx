import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={"textarea"} placeholder={"Message"} name={"message"} value={props.value} />
            </div>
            <div>
                <button onClick={props.addMessage}>Add Post</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: "message"
})(MessageForm)

export default MessageReduxForm;