import React from 'react';
import s from './FormControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={s.formControl + " " + s.error}>
            <textarea {...input} {...props} />
        </div>
    )
}