document.addEventListener('DOMContentLoaded',function(){
    // console.log(666)
    var logo = document.querySelector('.h_l');
    var menu = document.querySelector('.nav-menu');
    logo.onmouseenter = function(){
            // console.log(menu)     
        menu.style.display='block';
    };
    menu.onmouseleave = function(){
        menu.style.display='none';
    }

    // var data = (function(){
    //     var jieshou;
    //     ajax({
    //         url:'../api/dqlist.php',
    //         async:false,
    //         success:function(data){
    //             jieshou=data;
    //         }
    //     });
    //     return jieshou;
    // })();
    window.onload = function(){
    var toshop = document.getElementById('toshop');
    var imgbox = document.querySelector('.images-cover');
    var toolcar = document.querySelector('.tool-cart');
    var nphone = document.getElementById('nphone');
    var img = imgbox.children[0];
    // console.log(img)
    toshop.onclick = function(){
    var copyimg = img.cloneNode(true);
    copyimg.className = 'pos';
    copyimg.style.left = toshop.offsetLeft + 200 + 'px';
    copyimg.style.top = toshop.offsetTop - 150 +'px';

    nphone.appendChild(copyimg);
    console.log(copyimg)
    // console.log(copyimg)
    var speed = 0;
    var mb_left = toolcar.offsetLeft;
    // var mb_left = toolcar.style.left;
    // console.log(mb_left);

    var timer = setInterval(function(){
        var xtop = copyimg.offsetTop;
        var yleft = copyimg.offsetLeft;
        speed-=1;
        if(xtop<mb_top){
            clearInterval(timer);
        }
        copyimg.style.top = xtop + speed + 'px';
        copyimg.style.right = yleft + speed +'px';
    },30);
        animate(copyimg,{left:toshop.offsetLeft + 900,width:30,height:30},function(){
        nphone.removeChild(copyimg);
    });
    }

    
        
    }//

    


});