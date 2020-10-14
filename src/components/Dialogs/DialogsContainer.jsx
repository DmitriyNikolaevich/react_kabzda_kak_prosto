import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, writeMessageActionCreator } from '../../redux/dialogPageReducer';
import Dialog from './Dialog/Dialog';
import Dialogs from './Dialogs';
import Message from './Message/Message'




const mapStateToProps = (state) => {
    return {
        dialogItems: state.dialogPage.dialogs.map( el => <Dialog id={el.id} key={el.id} name={el.name} />),
        messageItems: state.dialogPage.messages.map( el => <Message message={el.message} key={el.id} />),
        value: state.dialogPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        writeNewMessage: (e) => {
            let text = e.target.value;
            dispatch(writeMessageActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;