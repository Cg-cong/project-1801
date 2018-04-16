// document.addEventListener('DOMContentLoaded',function(){
require(['config'],function(){
    require(['common'],function($){
    // console.log(666)
    var user = document.querySelector('#txtUser');
    var pwd = document.querySelector('#Userpwd');
    var logbtn = document.querySelector('#logbtn');
    var userarror = document.getElementById('userarror');
    var pwdarror = document.getElementById('pwdarror');
    userarror.style.display = 'none';
    pwdarror.style.display = 'none';

    user.onblur = function(){
        var _user = user.value;
        ajax({
            url:'../api/login.php',
            data:{username:_user},
            success:function(data){
                if(data == 'no'){
                    userarror.style.display = 'block';
                }else{
                    userarror.style.display = 'none';
                }
            }
        });
    }
    logbtn.onclick = function(){
        var _user = user.value;
        var _pwd = pwd.value;
        ajax({
            url:'../api/login.php',
            data:{
                username:_user,
                password:_pwd,
                type:'reg'
            },
            success:function(data){
                console.log(data)
                if(data == 'success'){
                    // console.log(666)
                    
                    location.href = '../index.html'; 
                    // var xinxi = {user:user.value};
                    // Cookie.set("xinxi",JSON.stringify(xinxi),{path:"/"});

                }else{
                    pwdarror.style.display = 'block';
                    
                }
            }
        });
    }

    });
});