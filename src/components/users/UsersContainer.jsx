import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersPageReducer';
import User from './UsersClass';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersID) => {
            dispatch(followAC(usersID), usersID)
        },
        unfollow: (usersID) => {
            dispatch(unfollowAC(usersID), usersID)
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users), users)
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);