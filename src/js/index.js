// document.addEventListener('DOMContentLoaded',function(){
require(['config'],function(){
    require(['jquery','common','lunbo'],function($){
        $('.flexslider').flexslider({
            directionNav: true,
            pauseOnAction: false,
            slideshowSpeed: 2000
        });

    
    var data=(function(){
        var jieshou;
        ajax({
            url:"../api/dqshouye.php",
            async:false,
            success:function(data){
                jieshou=data;
            }
        });
        return jieshou;
    })();
    
        console.log(data);
    var shoplist = document.querySelector('.shop-list');
    var ul = document.querySelector('.overflow-hide');
    // console.log(ul)
    ul.innerHTML = '';
    ul.innerHTML = data.map(function(item){
        return`<li data-myid="${item.id}">
                <a href="#" title="iPhone 6 全网通版" class="anim-left">
                <img class="get-src" data-src="152" src="${item.imgurl}" width="120" height="120">
                <div class="diy-tip" style="color:#734e8b">
                <h3>${item.name}</h3>
                <p style="color: #555">${item.jianjie}</p>
                <div data-ppid="49937" class="get-price">￥${item.price}</div>
                </div>
                </a>
        </li>`
    }).join('');

    });
});//