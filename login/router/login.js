// 引入express
const express=require("express");
// 引入连接池
var pool=require("../pool.js");
// 创建路由
var router=express.Router();
//添加路由===登录
router.post("/login",(req,res)=>{
    //获取请求的数据
    var $phone=req.body.phone;
    var $upwd=req.body.upwd;
    if(!$phone){
        res.send({code:-1,msg:"请输入用户名"});
        return;
    }
    if(!$upwd){
        res.send({code:-1,msg:"请输入密码"});
        return;
    }
    //使用连接池访问数据库
    var sql="SELECT * FROM flower_user WHERE phone=? AND upwd=? ";
    pool.query(sql,[$phone,$upwd],(err,result)=>{
        console.log(result);
        if(result.length>0){
            res.send({code:1,msg:"登录成功"})
        }else{
            res.send({code:-1,msg:"登录失败"})
        }
    })
})


//导出路由器对象
module.exports=router;
