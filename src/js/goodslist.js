document.addEventListener('DOMContentLoaded',function(){
    var logo = document.querySelector('.h_l');
    var menu = document.querySelector('.nav-menu');
    logo.onmouseenter = function(){
            // console.log(menu)     
        menu.style.display='block';
    };
    menu.onmouseleave = function(){
        menu.style.display='none';
    }
});