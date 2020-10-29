import Axios from "axios";


export const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f747db5e-dcb5-4b79-a43c-812e564ac23b"
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}

export const followAPI = {
    follow(userID) {
        return instance.post(`follow/${userID}`);
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`);
    }
}