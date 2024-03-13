let stars=document.getElementById('stars')
let moon=document.getElementById('moon')
let mountbehind=document.getElementById('mount_behind')
let mountfront=document.getElementById('mount_front')
let btn=document.getElementById('button')
let prime=document.getElementById('prime')

window.addEventListener('scroll',function(){
    let value=window.scrollY;
    stars.style.left=value*0.25+'px';
    moon.style.top=value*1+'px';
    mountbehind.style.top=value*.5+'px';
    prime.style.marginRight=value*4+'px';
    btn.style.marginTop=value*0.6+'px';

    
})