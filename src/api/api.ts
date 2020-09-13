import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '628f1297-6b8a-455c-a591-d2e75c4bd3a6'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true})
            .then(response => response.data)
    },
    getUserProfile(userId = '9442') {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    followUser (userId: number) {
        return instance.post(`follow/` + userId)
            .then(response => response.data)
    },
    unFollowUser(userId: number) {
        return instance.delete(`follow/` + userId)
            .then(response => response.data)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}