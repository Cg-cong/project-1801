jQuery(function($){
    // carbox[1].innerHTML = '';
    var phonelist = Cookie.get('phonelist') || [];
    if(typeof phonelist === 'string'){
        phonelist = JSON.parse(phonelist);
    }

    let carbox = $('.cart-item').eq(1);
    // console.log(carbox) 
    
    carbox.html('');
    for(var i=0;i<phonelist.length;i++){
        carbox.append(`<li data-myid="${phonelist[i].id}">
                <div class="cart-check" >
                    <label class="checkbox radio-box">
                    <input type="checkbox" checked="">
                    </label>
                </div>
                <div class="cart-product-box relative" >
                    <div class="invalid-mark none"></div>
                    <div class="product">
                        <a href="/product/58202.html"  class="block relative left pro-img-box">
                            <img src="${phonelist[i].imgurl}"> 
                        </a>
                        <div class="product-title">
                            <h5><a href="#">${phonelist[i].name}</a></h5>
                            <p class="remark grey-9"></p>
                            <p class="gift"><span style="position:absolute;">推荐</span>
                            <a href="#"  class="grey-9 ellipsis" style="margin-left:44px; line-height:22px; display:block;">${phonelist[i].title}</a>
                            </p>
                            <div class="margin-top"></div>
                            <div class="jiuji-serviceCur"></div>
                            <div class="jiuji-server margin-top overflow-hide">
                                    <a href="#" class="grey-9"><i class="baoxiu"></i>选服务</a>
                            </div>
                        </div>
                    </div>
                    <div class="unit-price"><b>${phonelist[i].price}</b></div>
                    <div class="discount">0.00</div>
                    <div class="count"><a href="" >-</a><input type="text" value="${phonelist[i].qty}" disabled=""><a href="" >+</a></div>
                    <div class="sum"><b class="main-color">${(phonelist[i].price*phonelist[i].qty*1).toFixed(2)}</b></div>
                    <div class="action">
                        <a href="#" class="move-to-favorate" >移入收藏夹</a>
                        <a href="#">删除</a>
                    </div>
                </div>
                </li> `);
        var jiesuan = $('.cart-total .right span b');
        var zongshu  = jiesuan.eq(0);
        var zongjia = jiesuan.eq(1);
        zongjia.html('￥0');
         


        
    }


    // console.log(zongjia.html())
});