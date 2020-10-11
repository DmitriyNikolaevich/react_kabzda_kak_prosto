import React from 'react';
import { addMessageActionCreator, writeMessageActionCreator } from '../../redux/dialogPageReducer';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let writeNewMessage = (e) => {
        let text = e.target.value;
        props.dispatch(writeMessageActionCreator(text));
    };

    let dialogItems = props.state.dialogPage.dialogs.map( el => ( <Dialog name={el.name} id={el.id} /> ));

    let messageItem = props.state.dialogPage.messages.map( el => ( <Message message={el.message} /> ) );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItem}
                <div>
                <div>
                    <textarea onChange={ writeNewMessage } value={props.state.dialogPage.newMessageText} />
                </div>
                <div>
                    <button onClick={ addMessage }>Add Post</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;