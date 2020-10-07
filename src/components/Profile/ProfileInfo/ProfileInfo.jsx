import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://img.fonwall.ru/o/1c/kosmos-planety-vselennaya-360z.jpg' />
            </div>
            <div className={s.ava}>
                <img src='https://www.vippng.com/png/detail/231-2318786_kitty-cat-logo-bootstrap-logos.png' /> + discription
            </div>
        </div>
    )
}

export default ProfileInfo;