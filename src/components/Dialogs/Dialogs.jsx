import React from 'react';
import { addMessageActionCreator, writeMessageActionCreator } from '../../redux/state';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

    let Refer = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let writeNewMessage = () => {
        let text = Refer.current.value;
        props.dispatch(writeMessageActionCreator(text));
    };

    let dialogItems = props.state.dialogs.map( el => ( <Dialog name={el.name} id={el.id} /> ));

    let messageItem = props.state.messages.map( el => ( <Message message={el.message} /> ) );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItem}
                <div>
                <div>
                    <textarea ref={ Refer } onChange={ writeNewMessage } value={props.state.newMessageText} />
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