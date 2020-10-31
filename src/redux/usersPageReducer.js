import { followAPI, usersAPI } from "../API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_LOADER = 'SET_LOADER';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    progress: null
};

let usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS:
            return { ...state, users: action.users };

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };

        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalCount }

        case SET_LOADER:
            return { ...state, isFetching: action.isFetching }

        case FOLLOWING_IN_PROGRESS:
            return { ...state, progress: action.isFetching }

        default:
            return state;
    }
}

export const follow = (usersID) => ({
    type: FOLLOW, usersID
});
export const unfollow = (usersID) => ({
    type: UNFOLLOW, usersID
});
export const setUsers = (users) => ({
    type: SET_USERS, users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
});
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT, totalCount
});
export const setFetching = (isFetching) => ({
    type: SET_LOADER, isFetching
});
export const inProgress = (isFetching) => ({
    type: FOLLOWING_IN_PROGRESS, isFetching
});


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setFetching(data.followed));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        });
    };
};
export const onPageChenger = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        dispatch(setCurrentPage(pageNumber));
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setFetching(false));
            dispatch(setUsers(data.items));
        });
    }
};
export const unfollowThunk = (userID) => {
    return (dispatch) => {
        dispatch(inProgress(true));
        followAPI.unfollow(userID).then(recive => {
            if (recive.data.resultCode === 0) {
                dispatch(unfollow(userID));
            }
            dispatch(inProgress(false));
        });
    }
};
export const followThunk = (userID) => {
    return (dispatch) => {
        dispatch(inProgress(true));
        followAPI.follow(userID).then(recive => {
            if (recive.data.resultCode === 0) {
                dispatch(follow(userID));
            }
            dispatch(inProgress(false));
        });
    }
}

export default usersPageReducer;