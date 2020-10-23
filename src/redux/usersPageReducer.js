const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_LOADER = 'SET_LOADER';

let initialState = {
    users: [ ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true
};

let usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersID) {
                        return { ...u, friend: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersID) {
                        return { ...u, friend: false }
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}

        case SET_LOADER:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}

export const follow = (usersID) => ({
    type: FOLLOW, usersID: usersID
});
export const unfollow = (usersID) => ({
    type: UNFOLLOW, usersID: usersID
});
export const setUsers = (users) => ({
    type: SET_USERS, users: users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage: currentPage
});
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT, totalCount: totalCount
});
export const setFetching = (isFetching) => ({
    type: SET_LOADER, isFetching: isFetching
})

export default usersPageReducer;