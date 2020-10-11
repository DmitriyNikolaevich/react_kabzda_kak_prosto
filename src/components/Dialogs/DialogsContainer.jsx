import React from 'react';
import { addMessageActionCreator, writeMessageActionCreator } from '../../redux/dialogPageReducer';
import Dialog from './Dialog/Dialog';
import Dialogs from './Dialogs';
import Message from './Message/Message';



const DialogsContainer = (props) => {

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let writeNewMessage = (e) => {
        let text = e.target.value;
        props.store.dispatch(writeMessageActionCreator(text));
    };

    let dialogItems = props.store.getState().dialogPage.dialogs.map( el => ( <Dialog name={el.name} id={el.id} /> ));

    let messageItem = props.store.getState().dialogPage.messages.map( el => ( <Message message={el.message} /> ) );

    let value = props.store.getState().dialogPage.newMessageText;

    return (
        <div>
            <Dialogs 
                addMessage={addMessage} 
                writeNewMessage={writeNewMessage} 
                dialogItems={dialogItems} 
                messageItem={messageItem} 
                value={value} 
            />
        </div>
    )
}

export default DialogsContainer;