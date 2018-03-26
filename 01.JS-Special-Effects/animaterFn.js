/**
 * Created by zhouting on 2018/3/25.
 */
/**
 * 功能：匀速运动
 * @param ele表示选中的元素
 * @param taget表示目标位移位置
 */
function animateY(ele,taget) {
    var speed = taget > ele.offsetLeft ? 10 : -10;
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        ele.style.left = ele.offsetLeft + speed + "px";
        var val = taget - ele.offsetLeft;
        if (Math.abs(val) <= 10) {
            ele.style.left = taget + "px";
            clearInterval(ele.timer);
        }
    },10);
}

/**
 * 功能：缓速运动
 * @param ele表示选中的元素
 * @param taget表示目标位移位置
 */
function animateH(ele,taget,times) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var speed = (taget - ele.offsetLeft)/10;
        speed = speed>0? Math.ceil(speed):Math.floor(speed);
        ele.style.left = ele.offsetLeft + speed + "px";
        if (Math.abs(taget-ele.offsetLeft) < Math.abs(speed)){
            ele.style.left = taget + "px";
            clearInterval(timer);
        }
    },times);
}
