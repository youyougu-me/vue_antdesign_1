import axios from "axios";

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';
const service = axios.create({
  baseURL: BASEURL,
  timeout: 15000,   // 超时
});

//测试文件里的环境变量是否能打印
//打印当前环境
// console.log(process.env.NODE_ENV);
// console.log(process.env.VUE_APP_ABC);


service.interceptors.request.use(function (config) {
  config.headers['Tokey'] = localStorage.getItem("token")
  config.headers['UserName'] = localStorage.getItem("username")
  return config;
}, function (error) {
  return Promise.reject(error);
});


service.interceptors.response.use(function (response) {
  let data = response.data
  if (data.resCode !== 0) {
    Message.error(data.message)
    return Promise.reject(data)
  } else {
    return response
  }
}, function (error) {
  return Promise.reject(error)
})

export default service;
