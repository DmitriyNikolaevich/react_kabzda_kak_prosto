const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [ ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2
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

        default:
            return state;
    }
}

export const followAC = (usersID) => ({
    type: FOLLOW, usersID: usersID
});
export const unfollowAC = (usersID) => ({
    type: UNFOLLOW, usersID: usersID
});
export const setUsersAC = (users) => ({
    type: SET_USERS, users: users
});
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage: currentPage
});
export const setTotalCountAC = (totalCount) => ({
    type: SET_TOTAL_COUNT, totalCount: totalCount
})

export default usersPageReducer;