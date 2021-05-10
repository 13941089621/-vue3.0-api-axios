/**
 * 引入 axios  拦截器
 */
import apiService from '../utils/service'
/**
 *  接口 api
 */
export default {
    userHome(data) {
        return apiService({
            url: '/api/home/userHome',
            method: 'get',
            headers:{},
            data: data
        })
    },
}

