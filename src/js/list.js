document.addEventListener('DOMContentLoaded',function(){
    var data=(function(){
        var jieshou;
        ajax({
            url:"../api/dqlist.php",
            async:false,
            success:function(data){
                jieshou=data;
            }
        });
        return jieshou;
    })();
    console.log(data)
    var _list = document.querySelector('.list'); 
    var ul = _list.children[0];
    var pages = document.querySelector('#pages');
    var yema = pages.getElementsByTagName('a');
    // var qty = 8;
    // ajax({
    //         url:"../api/fenyelist.php",
    //         data:{qty:qty},
    //         async:false,
    //         success:function(data){
    //             jieshou=data;
    //         }
    //     });
    // console.log(yema)
    // console.log(ul)
    ul.innerHTML = '';
    ul.innerHTML = data.map(function(item){
        return `<li  data-myid="${item.id}">
                            <a class="propic relative"  >
                                <img class="details" src="${item.imgurl}"  height="200" width="200">
                            </a>
                            <h4 ><a href="#">
                                <em class="left adToggle" style="margin-right: 5px;">                            
                                </em> 
                                <em class="shopTitle"><span>${item.name}</span>${item.title}</em>
                                </a>
                            </h4>
                            <p class="p_price"><b class="showallprice nowPrice" proid="30918" data-ppid="58196">￥${item.price}</b></p>
                            <p class="pj_count">已有<a rel="nofollow" style="font-weight: bold; color: #3caaff;" href="#" >${item.pingjia}</a>人评价&nbsp;&nbsp;</p>
                            <p>${item.date}</p>
                        </li>  `
    }).join('');

    // var gong = Math.ceil(data.len/qty);
    // pages.innerHTML = '';
    // for(var i=0;i<gong;i++){
    //     var a=document.createElement("a");
    //     if(i+1==data.page){
    //         a.className="active";
    //     };
    //     a.innerHTML=i+1;
    //     pages.appendChild(a);
    // }


    // 点击商品跳转详情页面传id
    var details = document.querySelectorAll('.details');
    // console.log(details)
    document.onclick = function(e){
        if(e.target.className=='details'){
            var data_id = e.target.parentNode.parentNode.getAttribute('data-myid');
            console.log(e.target)
            location.href="../html/goodslist.html?id="+data_id;            
            
        }
    }
});