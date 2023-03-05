import axios from "axios";
import Message from "@/plugins/message";
const _http = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 9000,
})

_http.interceptors.request.use(config => {

    return config
})

_http.interceptors.response.use((response) => {
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

export default _http