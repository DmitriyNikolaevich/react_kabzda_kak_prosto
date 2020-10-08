import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

    let Refer = React.createRef();

    let addPost = () => {
        let text = Refer.current.value;
        props.addMessage(text);
        Refer.current.value = '';
    };

    let dialogItems = props.dialogs.map( el => ( <Dialog name={el.name} id={el.id} /> ));

    let messageItem = props.messages.map( el => ( <Message message={el.message} /> ) );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItem}
                <div>
                <div>
                    <textarea ref={ Refer }></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;