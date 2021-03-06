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
    getUserProfile(userId?: string | null) {
        console.warn('Obsolete method.Please profileAPI object');
        return profileAPI.getUserProfile(userId);
    },
    followUser(userId: number) {
        return instance.post(`follow/` + userId)
            .then(response => response.data)
    },
    unFollowUser(userId: number) {
        return instance.delete(`follow/` + userId)
            .then(response => response.data)
    },
}


export const profileAPI = {
    getUserProfile(userId : null | string = '9442') {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    changeStatus(status: string) {
        return instance.put('profile/status', {status})
            .then(response => response.data);
    },
    ChangeMyPhoto(photoFile: File) {

    const formData = new FormData();
    formData.append('image',photoFile)

        return instance.put('profile/photo',formData,{ headers: {
                'Content-Type': 'multipart/form-data'
            }})
            .then(response => response.data)
    },
    saveProfileData(profile:any) {
        return instance.put(`profile`,profile)
            .then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha : string | null = null) {
        return instance.post('/auth/login', {email, password, rememberMe,captcha})
    },
    logout() {
        return instance.delete('/auth/login')
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },
}
