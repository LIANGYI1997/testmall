import Axios from "axios";

export function request(config){

    //创建实例
    const instance = Axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout:50000
    })

  //拦截器
  instance.interceptors.request.use(config=>{
    return config
  },error => {
  })


  //响应拦截
    instance.interceptors.response.use(res =>{
        return res.data
    },error => {
      console.log(error);
    })
    return instance(config)

}
