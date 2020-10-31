import { authAPI } from "../API";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthData = (userId, email, login) => ({
    type: SET_USER_DATA, data: {userId, email, login}
});

export const authThunk = () => {
    return (dispatch) => {
        authAPI.getAuth()
                .then( response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthData(response.data.data.id, response.data.data.email, response.data.data.login));
                }
        });
    }
}

export default authReducer;