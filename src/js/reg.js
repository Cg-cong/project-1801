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
    var vCodeImg2 = document.getElementById('vCodeImg2');
    var yzmcode2 = document.getElementById('yzmcode2');
    var mmprovision2 = document.getElementById('mmprovision2');
    // console.log(mmprovision2.checked)    
    // console.log(vCodeImg2.innerText)
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
    // console.log()
    for(var i=0;i<red.length;i++){
        red[i].style.display = 'none';
        red[i].style.color = 'red';
    };
    // console.log(red)
    // 用户名判断
    userUID.onblur = function(){
        var _userUID = userUID.value;
        if(_userUID == ''){
                    userarror.style.display = 'inline-block';
                    userarror.innerHTML = '&times;用户名不能为空';
                    return false;
                };
        ajax({
            url:'../api/reg.php',
            data:{username:_userUID},
            success:function(data){
                if(data === 'success'){
                    userarror.style.display = 'none';
                }else {
                    userarror.style.display = 'inline-block';
                    userarror.innerHTML = '&times;用户名已存在！';
                }
            }
        })
    }
    
    // 手机号码判断
    usermobile2.onblur = function(){
        var _usermobile2 =  usermobile2.value;
        if(!/^1[3-8]\d{9}$/.test(_usermobile2)){
            phonearror.style.display = 'inline-block';
            phonearror.innerHTML = '&times;请输入正确的手机号码!'
            return false;
        }else{
            phonearror.style.display = 'none';            
        }
    }
    // 邮箱判断
    usermail.onblur=function(){
        var _usermail=usermail.value;
        if(!/^[a-z0-9_\-\.]{2,}@[a-z\d\-]{1,63}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(_usermail)){
            emailarror.style.display = 'inline-block';
            emailarror.style.color = '#f00';            
            emailarror.innerHTML = '&times;请输入正确的邮箱！'
            return false;
        };
        ajax({
            url:'../api/reg.php',
            data:{email:_usermail},
            success:function(data){
                if(data == 'success'){
                emailarror.style.display = 'inline-block';
                emailarror.style.color = '#58bc58';
                emailarror.innerHTML = '邮箱正确!';
                }
            }
        });
    }
    // 验证码判断
    yzmcode2.onblur = function(){
        var _vCodeImg2 = vCodeImg2.innerText;
        var _yzmcode2 = yzmcode2.value;
        if(_yzmcode2!=_vCodeImg2){
            yzmarror.style.display = 'inline-block';
            // yzmarror.innerHTML = '&times;验证码不正确!'
        }else{
            yzmarror.style.display = 'none';            
        }
    }




    
    // 点击注册提交到数据库
    regbut2.onclick = function(){
        var _userUID = userUID.value;
        var _userpwd3 = userpwd3.value;
        var _userpwd4 = userpwd4.value;

        // console.log(_userpwd4)
        if(_userUID == ''){
            userarror.style.display = 'inline-block';
            userarror.innerHTML = '&times;用户名不能为空';
            return false;
        }else{
            userarror.style.display = 'none';
        };
        if(_userpwd3 == ''){
            pwdarror1.style.display = 'inline-block';
            pwdarror1.innerHTML = '&times;密码不能为空!';
            return false;            
        }else{
            pwdarror1.style.display = 'none';
        };
        if(!/^[A-z0-9]{5,}$/.test(_userpwd3)){
            pwdarror1.style.display = 'inline-block';
            pwdarror1.innerHTML = '&times;请输入正确的密码!';
            return false;
        }else{
            pwdarror1.style.display = 'none';
        };

        if(_userpwd4!=_userpwd3){
            pwdarror2.style.display = 'inline-block';
            pwdarror2.innerHTML = '&times;两次密码不一样!';
            return false;
        }else{
            pwdarror2.style.display = 'none';
        };
        console.log(66)
        ajax({
            url:'../api/reg.php',
            data:{
                username:_userUID,
                password:_userpwd3,
                type:'reg'
            },
            success:function(data){
                console.log(data)
                if(data == 'success'){
                    alert('注册成功！');
                }
            }
        });
    
    };
    
}); //