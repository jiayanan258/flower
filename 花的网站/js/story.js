$(function () {
    let lis=$(".list>li");
    let zhe=$(".zhe")
    lis.each(function (index) {
        $(this).mouseenter(function () {
            zhe.eq(index).animate({"top":0})
        })
    })

        $(window).scroll(function () {
            if(document.body.scrollTop>=500){
                $('.top').css("opacity","1")
            }else{
                $('.top').css("opacity","0")
            }
        })
})