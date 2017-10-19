window.addEventListener("load",function () {
    let show=document.querySelector(".show")
    let shli=document.querySelectorAll(".show>li")
    shli.forEach(ele=>{
        let imgs=ele.querySelector("img")
        let rubber=document.querySelector(".rubber")
        let opacity=ele.querySelector(".opacity")
        let fang=ele.querySelector(".fang")
        let fimg=ele.querySelector(".fang img")
        let icon=ele.querySelector("i")
        icon.onclick=function () {
                opacity.style.display="block"
                rubber.style.display = "block"
                fang.style.display = "block"
            let zw = rubber.offsetWidth, sw = fang.offsetWidth, sh = fang.offsetHeight;
                opacity.onmousemove = function (e) {
                    let ox = e.offsetX - zw / 2;
                    console.log(ox)
                    let oy = e.offsetY - zw / 2;
                    if (ox >= sw - zw) {
                        ox =sw - zw;
                    }
                    if (ox <= 0) {
                        ox =0;
                    }
                    if (oy >= sh - zw) {
                        oy =sh - zw;
                    }
                    if (oy <= 0) {
                        oy =0;
                    }
                    rubber.style.left = ox + 'px';
                    rubber.style.top = oy + 'px';
                    fimg.style.width = sw * sw / zw + 'px';
                    fimg.style.height = sh * sh / zw + 'px'
                    fimg.style.left = -sw / zw * ox + 'px';
                    fimg.style.top = -sh / zw * oy + 'px';
                }
                opacity.onmouseout=function () {
                    opacity.style.display="none"
                    rubber.style.display = "none"
                    fang.style.display = "none"
                }
            }
    })


    let top=document.querySelector(".top");
    console.log(top)
    window.onscroll = function () {
        let scroolltop = document.body.scrollTop;
        if (scroolltop >= 300) {
            top.style.opacity = "1"
        } else {
            top.style.opacity = "0"
        }
    }
})
