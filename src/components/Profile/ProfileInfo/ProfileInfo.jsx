import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';


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
                <ProfileStatus status={'Hellow!'} />
            </div>
        </div>
    )
}

export default ProfileInfo;