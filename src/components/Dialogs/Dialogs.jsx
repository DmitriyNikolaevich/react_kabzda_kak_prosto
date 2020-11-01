import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogItems}
            </div>
            <div className={s.messages}>
                {props.messageItems}
                <div>
                <div>
                    <textarea onChange={ props.writeNewMessage } value={props.value} />
                </div>
                <div>
                    <button onClick={ props.addMessage }>Add Post</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;