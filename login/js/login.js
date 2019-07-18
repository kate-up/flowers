function login(){
    //接收的数据
    var phone=phone.value;
    var upwd=upwd.value;
    //创建异步对象
    var xhr=new XMLHttpRequest();
    //创建监听，获取响应数据
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            console.log(result);
        }
    };
    //打开链接，创建请求
    var url="http://127.0.0.1:8080/user_login/login";
    xhr.open("post",url,true);
    //发送请求
    var formdata=`phone=${phone}&upwd=${upwd}`;
    xhr.send(formdata);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
}