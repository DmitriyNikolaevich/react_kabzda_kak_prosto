import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../redux/usersPageReducer';
import User from './UsersClass';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage), currentPage)
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount), totalCount)
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);