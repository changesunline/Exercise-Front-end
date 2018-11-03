$(function () {
    var $banner = $(".sn_banner");
    var width = $banner.width();


    var $imagebox = $banner.find("ul:first");
    var $pointbox = $banner.find("ul:last");
    var $images = $imagebox.find("li");
    var $points = $pointbox.find("li");
    console.log(width);

    var bannerFn = function () {
        $imagebox.animate({transform:'translateX('+(-index*width)+'px)'},function () {
            if(index >= 9){
                index = 1;
                $imagebox.css("transform",'translateX('+(-index*width)+'px)');
            }else if(index <= 0){
                index = 8;
                $imagebox.css("transform",'translateX('+(-index*width)+'px)');
            }

            $points.removeClass("now").eq(index-1).addClass("now");
        });
    }



    //轮播图
    var index = 1;
    var timer = setInterval(function () {
        index ++;
        bannerFn();
    },3000);

    //滑动手势
    var swiperFn = function (fn,callback) {
        $imagebox.on(fn,function () {
            clearInterval(timer);
            callback && callback.call();
            bannerFn();
            timer = setInterval(function () {
                index ++;
                bannerFn();
            },3000);
        });
    }
    //左滑，下一张
    swiperFn("swipeLeft",function () {
        index++;
    });
    //右滑，上一张
    swiperFn("swipeRight",function () {
        index--;
    });

});





/*=============================*/
