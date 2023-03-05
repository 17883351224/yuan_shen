import axios from "axios";
import Message from '@/plugins/message';

export const baseURL = "http://43.139.15.136:5000"

let _request = axios.create({
    baseURL,
    timeout: 15000,
})

_request.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token && token.userAccount) {
        config.headers.token = token.userAccount
    }
    return config
})

_request.interceptors.response.use((response) => {

    return response.data

}, (error) => {
    if (error || error.response || error.response.status) {
        if (error.response) {
            switch (error.response.status) {
                case 404:
                    Message({ type: 'error', text: '页面未找到', delay: 3500 })
                    break;
                case 401:
                    Message({ type: 'error', text: '登录即可获取权限', delay: 3500 })
                    break;
                case 500:
                    Message({ type: 'error', text: '系统维护中', delay: 3500 })
                    break;
                case 505:
                    Message({ type: 'error', text: '网络错误', delay: 3500 })
                default: Message({ type: 'error', text: error.message, delay: 3500 })
            }
        } else {
            Message({ type: 'error', text: error.message, delay: 3500 })
        }
    }

    return Promise.reject(error)
})

export default _request;