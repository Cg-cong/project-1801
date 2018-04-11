document.addEventListener('DOMContentLoaded',function(){
    // 注册验证码
    var vCodeImg2 = document.getElementById('vCodeImg2');
    // console.log(vCodeImg2)
    var zimu='qwertyuiopasdfghjklzxcvbnm1234567890';
        yanzhengma();    
    function yanzhengma(){
        var res='';
        for(var i=0;i<4;i++){
            res+=zimu[parseInt(Math.random()*36)];
        }
        vCodeImg2.innerHTML=res;
    };
    vCodeImg2.onclick=function(){
        yanzhengma();
    };

    var userUID = document.getElementById('userUID');
    var userpwd3 = document.getElementById('userpwd3');
    var userpwd4 = document.getElementById('userpwd4');
    var usermobile2 = document.getElementById('usermobile2');
    var usermail = document.getElementById('usermail');
    var mmprovision2 = document.getElementById('mmprovision2');
    // 提交注册
    var regbut2 = document.getElementById('regbut2');
    // 错误信息
    var userarror = document.getElementById('userarror');
    var pwdarror1 = document.getElementById('pwdarror1');
    var pwdarror2 = document.getElementById('pwdarror2');
    var phonearror = document.getElementById('phonearror');
    var emailarror = document.getElementById('emailarror');
    var yzmarror = document.getElementById('yzmarror');
    var red = document.querySelectorAll('.red');
    
    for(var i=0;i<red.length;i++){
        // red[i].style.display = 'none';
        red[i].style.color = 'red';
    };
    // console.log(red)
    // usermail.onblur=function(){
    //     var _usermail=usermail.value;
    //     if(!/^[a-z0-9_\-\.]{2,}@[a-z\d\-]{1,63}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(_usermail)){
    //         emailarror.style.display = 'block';
    //         return false;
    //     }

});