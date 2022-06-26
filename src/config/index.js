// 根据环境引入不同配置 process.env.NODE_ENV
console.log(process.env);
const config = require("./env." + process.env.VUE_APP_ENV);
module.exports = config;
// module.exports = {
//   env:  require("./env." + process.env.VUE_APP_ENV),
//   proxyTable: {
//     "/api":{
//       target: 'http://138.2.94.113:8081',      //后端接口的根目录
//       changeOrigin: true,                    //是否跨域
//       pathRewrite: {
//           '^/api': '/'
//       }
//     }
//   }
// }
