import axios from "axios";

const service = axios.create({
    baseURL: "",  // api 的 base_url
    timeout: 5000  // 请求超时时间
})

// 添加请求拦截器
service.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        console.log("正在加载中...")
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        console.log(error,2)
        return Promise.reject(error);
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        // console.log(response,3)
        // return response;
        console.log("加载结束了...")

        const responseCode = response.status
        if (responseCode === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }

    },
    function (error) {
        // 对响应错误做点什么
        console.log(error,4)
        // return Promise.reject(error);

        const errorCode = error.response.status
        switch (errorCode) {
            case 401:
                console.log("401")
                break
            case 403:
                console.log("403")
                break
            case 404:
                console.log("404")
                break
            // 其他错误，直接抛出错误提示
            default:
                console.log("其他")
        }
        return Promise.reject(error);

    }
);
export default service