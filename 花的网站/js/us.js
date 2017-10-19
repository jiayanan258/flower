window.addEventListener("load",function () {
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