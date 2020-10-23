import React from 'react';
import { connect } from 'react-redux';
import s from './Profile.module.css';
import Profile from './Profile';
import * as Axios from 'axios';
import { setUserProfile } from '../../redux/profilePageReducer';



class ProfileContainer extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
                this.props.setUserProfile(response.data);
        });
    }

    render() {
    return (
        <div className={s.content}>
            <Profile {...this.props} user={this.props.user} />
        </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user
    }
};

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer); 