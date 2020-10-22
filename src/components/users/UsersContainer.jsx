import React from 'react';
import * as Axios from 'axios';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../redux/usersPageReducer';
import Users from './Users';



class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(recive => {
                this.props.setUsers(recive.data.items);
                this.props.setTotalCount(recive.data.totalCount);
            });
        };
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(recive => {
                this.props.setUsers(recive.data.items);
            });
    }

    render = () => {

        

        return <Users onPageChenged={this.onPageChenged}
                     currentPage={this.props.currentPage}
                     totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     users={this.props.users}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
         />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);