import React from 'react';
import { connect } from 'react-redux';
import s from './Profile.module.css';
import Profile from './Profile';
import { setUserProfile, getUserThunk } from '../../redux/profilePageReducer';
import { Redirect, withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let user = this.props.match.params.userID ? this.props.match.params.userID : this.props.auth;
        this.props.getUserThunk(user);
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
        user: state.profilePage.user,
        auth: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose( connect(mapStateToProps, {setUserProfile, getUserThunk}), withRouter, withAuthRedirect )(ProfileContainer); 