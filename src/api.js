import axios from 'axios';

// 创建 Axios 实例
const instance = axios.create({
    baseURL: 'http://localhost:10088/',  // 基础 URL，可以根据实际情况修改
    timeout: 1000000,  // 请求超时时间，可根据实际情况修改
    headers: {
        'Content-Type': 'application/json',  // 默认的请求头
    }
});

// 请求拦截器
instance.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么，例如添加 token 到请求头
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    response => {
        // 对响应数据做点什么，例如处理错误码
        if (response.status === 200) {
            return response.data;
        } else {
            return Promise.reject(new Error('请求失败'));
        }
    },
    error => {
        // 对响应错误做点什么，例如处理不同的错误码
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 处理 401 错误，例如跳转到登录页面
                    console.log('401 Unauthorized');
                    break;
                case 403:
                    // 处理 403 错误，例如权限不足
                    console.log('403 Forbidden');
                    break;
                case 404:
                    // 处理 404 错误，例如请求的资源不存在
                    console.log('404 Not Found');
                    break;
                default:
                    console.log('其他错误');
            }
        } else if (error.request) {
            // 请求已经发出，但没有收到响应
            console.log('请求超时或无响应');
        } else {
            // 其他错误，例如设置请求时发生错误
            console.log('请求设置错误');
        }
        return Promise.reject(error);
    }
);

// 封装 GET 请求
export const get = (url, params) => {
    return instance.get(url, { params });
};

// 封装 POST 请求
export const post = (url, data) => {
    return instance.post(url, data);
};

// 封装 PUT 请求
export const put = (url, data) => {
    return instance.put(url, data);
};

// 封装 DELETE 请求
export const del = (url) => {
    return instance.delete(url);
};