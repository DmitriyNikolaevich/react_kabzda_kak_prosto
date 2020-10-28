import React from 'react';
import * as Axios from 'axios';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, setFetching } from '../../redux/usersPageReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';



class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        if (this.props.users.length === 0) {
            Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            }).then(recive => {
                this.props.setFetching(false);
                this.props.setUsers(recive.data.items);
                this.props.setTotalCount(recive.data.totalCount);
            });
        };
    }

    onPageChenged = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(recive => {
                this.props.setFetching(false);
                this.props.setUsers(recive.data.items);
            });
    }

    render = () => {

        

        return  <>
                    { this.props.isFetching ? <Preloader /> : null}
                    <Users onPageChenged={this.onPageChenged}
                         currentPage={this.props.currentPage}
                         totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         users={this.props.users}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         isFetching={this.props.isFetching}
                    />
                </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (usersID) => {
//             dispatch(followAC(usersID))
//         },
//         unfollow: (usersID) => {
//             dispatch(unfollowAC(usersID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         setFetching: (isFetching) => {
//             dispatch(setFetchingAC(isFetching))
//         }
//     }
// };

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalCount, setFetching })(UsersAPIComponent);