
// 引入express文件
const express=require("express");
//引入路由
const loginRouter=require("./router/login");
// 引入第三方插件
const bodyPaser=require("body-parser");
//引入跨越
const cors = require("cors");  
//引入session
// const session=require("express-session");
// 创建服务器
var server=express();
//跨越
server.use(cors({
    origin:["http://127.0.0.1:5500",
    "http://localhost:5500"],
    credentials:true
}));
//session
// server.use(session({
//     secret:"128位字符串",
//     resave:true,
//     saveUninitialized:true
//   }))
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
