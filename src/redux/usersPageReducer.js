const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [ ]
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
            return {...state, users: [...state.users, ...action.users]};

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

export default usersPageReducer;