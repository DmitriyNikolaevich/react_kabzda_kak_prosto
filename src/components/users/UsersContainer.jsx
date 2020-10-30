import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, setFetching, inProgress } from '../../redux/usersPageReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { usersAPI } from '../../API';



class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        if (this.props.users.length === 0) {
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setFetching(data.followed);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            });
        };
    }

    onPageChenged = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setFetching(false);
                this.props.setUsers(data.items);
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
                         progress={this.props.progress}
                         inProgress={this.props.inProgress}
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
        isFetching: state.usersPage.isFetching,
        progress: state.usersPage.progress
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

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalCount, setFetching, inProgress })(UsersAPIComponent);