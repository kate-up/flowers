// 引入express文件
const express=require("express");
//引入路由
const loginRouter=require("./router/login")
// 引入第三方插件
const bodyPaser=require("body-parser");
// 创建服务器
var server=express();
// 设置端口
server.listen(8080);
// 托管静态资源到public下
// 使用body-parser中间件，将post请求的数据转为对象
server.use(bodyPaser.urlencoded({
    extended:false
}))
server.use(express.static("public"))
//使用路由
server.use("/user_login",loginRouter) 
