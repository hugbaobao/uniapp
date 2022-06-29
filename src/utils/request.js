export default (params)=>{
  const baseURL = 'http://localhost:3000'
  return new Promise((resolve,reject)=>{
    // 添加加载状态
    uni.showLoading({
      title:"加载中"
    })
    uni.request({ 
       /*  url: 'example.php',     原生的写法
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' 
        },
        success (res) {
          console.log(res.data)
        } */
     
        // 这里可以单独将所有的请求信息展开
        // ...params,

        // 这里不单独展开params，分别给属性赋值
        url:baseURL + params.url,
        method:params.method || 'GET' ,
        data:params.data || {} ,
        success :(res)=> {
          resolve(res)
        },
        fail:(err)=>{
          reject(err)
        },
        // 关闭加载状态
        complete(){
          uni.hideLoading()
        }
    })

  })
}

/* 然后挂载到原型上，在main.js里
import 导入
Vue.prototype.request = request */