document.addEventListener('DOMContentLoaded',function(){
// require(['config'],function(){
    // require(['common','jquery','fdj'],function($){       

    // console.log(666)
    // var magnifierConfig = {
    //     magnifier : "#magnifier1",//最外层的大容器
    //     width : 440,//承载容器宽
    //     height : 440,//承载容器高
    //     moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
    //     zoom : 2//缩放比例
    // };

    // var _magnifier = magnifier(magnifierConfig);
    var logo = document.querySelector('.h_l');
    var menu = document.querySelector('.nav-menu');
    logo.onmouseenter = function(){
            // console.log(menu)     
        menu.style.display='block';
    };
    menu.onmouseleave = function(){
        menu.style.display='none';
    }

    var data = (function(){
        var jieshou;
        ajax({
            url:'../api/dqlist.php',
            async:false,
            success:function(data){
                jieshou=data;
            }
        });
        return jieshou;
    })();
    // });
    

    console.log(666)
    
    document.onreadystatechange = function(){
    var toshop = document.getElementById('toshop');
    var imgbox = document.querySelector('.images-cover');
    var toolcar = document.querySelector('.tool-cart');
    var nphone = document.getElementById('nphone');
    var bigimg = imgbox.children[0];
    var smallimg = document.querySelector('.small-img').children[0];
    var bigimg2 = document.querySelector('.magnifier-view').children[0];
    var name = document.querySelector('.d_h2').children[0];
    var price = document.querySelector('#spprice');
    // console.log(bigimg)
    var id = location.search.slice(4);

    for(var i=0;i<data.length;i++){
        if(id == i+1){
            bigimg.src = data[i].imgurl;
            bigimg2.src = data[i].imgurl;
            smallimg.src = data[i].imgurl;
            name.innerText = data[i].name;
            price.innerText = data[i].price;
        }
    };

    var phonelist = Cookie.get('phonelist') || [];
    if(typeof phonelist === 'string'){
        phonelist = JSON.parse(phonelist);
    };
    // console.log(phonelist)

    // var qty ;
    // for(var i=0;i<phonelist.length;i++){
    //     // qty = phonelist[i].qty;
    // console.log(phonelist[i].qty);
        
    // }
    
    
    toshop.onclick = function(e){
    var copyimg = bigimg.cloneNode(true);
    copyimg.className = 'pos';
    copyimg.style.left = toshop.offsetLeft + 200 + 'px';
    copyimg.style.top = toshop.offsetTop - 150 +'px';

    nphone.appendChild(copyimg);
    // console.log(copyimg)
    // console.log(copyimg)
    var speed = 0;
    var mb_top = toolcar.offsetTop + 200;
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
        animate(copyimg,{left:toshop.offsetLeft + 950,width:30,height:30},function(){
        nphone.removeChild(copyimg);
        });
    
    e = e || window.event;
    var target = e.target || e.srcElement;
    var _sl = 1;
    var idx;

    var has = phonelist.some(function(g,i){
        idx = i;
        return g.id === id;
    });
    // console.log(has)

    if(has){
        phonelist[idx].qty = (phonelist[idx].qty)*1 + _sl*1;
    }else{
        for(var i=0;i<data.length;i++){
            if(id-1 == i){
                var goods={
                    id:data[i].id,
                    imgurl:data[i].imgurl,
                    name:data[i].name,
                    title:data[i].title,
                    price:data[i].price,
                    qty:_sl
                };
            }
        };
        phonelist.push(goods);
    }
    Cookie.set("phonelist",JSON.stringify(phonelist),{path:"/"});


    };
    // 以上为飞入购物车动画效果
    


    // 购买跳转
    var buy = document.getElementById('buyType');
    buy.onclick = function(){
        location.href = '../html/car.html';
    }

    
        
    }//

    


});//