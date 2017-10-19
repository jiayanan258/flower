window.addEventListener("load",function () {
    //轮播
    let banner=document.querySelector(".banner");
    let lunbo=document.querySelector(".lunbo")
    let imgs=document.querySelectorAll(".lunbo li")
    let yuan=document.querySelector(".yuan")
    let btn=document.querySelectorAll(".yuan li");
    let now = 0;
    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            animate(imgs[now], {opacity: 0})
            btn[now].style.background = "#FB0415";
            animate(imgs[i], {opacity: 1})
            btn[i].style.background = "#fff";
            now = i;
        }
    }

    let a= setInterval(move, 4000);
    banner.onmouseover = function () {
        clearInterval(a);
    }
    banner.onmouseout = function () {
        a = setInterval(move, 4000);
    }
    function move() {
        now++;
        if (now == imgs.length) {
            now = 0;
        }
        for (let i = 0; i <= imgs.length; i++) {
            animate(imgs[now], {opacity: 1})
            btn[now].style.background = "#fff";
            animate(imgs[i], {opacity: 0})
            btn[i].style.background = "#FB0415";
        }
    }

    //客户反映
    let zhao4=document.querySelector(".zhao4");
    console.log(zhao4)
    let imgs1=document.querySelectorAll(".zhao4 li");
    console.log(imgs1)
    let circle=document.querySelector(".circle");
    let btn1=document.querySelectorAll(".circle li");
    console.log(btn1)
    let now1=0;
    for (let i = 0; i < btn1.length; i++) {
        btn1[i].onclick = function () {
            if (now1 == i) {
                return;
            }
            imgs1[i].style.left ="1500px";
            btn1[i].style.background = "#FB0415";
            btn1[now1].style.background = "rgba(5,224,5,0.7)"
            animate(imgs1[now1], {left: -1500});
            animate(imgs1[i], {left: 50});
            now1= i;
        }
    }
})

// $(function(){
//     $(window).scroll(function () {
//         if(document.body.scrollTop>=500){
//             $('.top').css("opacity","1")
//         }else{
//             $('.top').css("opacity","0")
//         }
//     })
// })

