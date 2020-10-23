import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if (!props.user) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://img.fonwall.ru/o/1c/kosmos-planety-vselennaya-360z.jpg' />
            </div>
            <div className={s.ava}>
                <img src={props.user.photos.small} /> + discription
            </div>
        </div>
    )
}

export default ProfileInfo;