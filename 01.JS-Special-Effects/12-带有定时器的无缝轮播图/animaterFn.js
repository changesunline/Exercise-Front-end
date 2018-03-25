/**
 * Created by zhouting on 2018/3/25.
 */
/**
 * 功能：动画位移
 * @param ele表示选中的元素
 * @param leftDir需要移动到的left位置
 */
function animate(ele,leftDir) {
    var speed = leftDir > ele.offsetLeft ? 10 : -10;
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        ele.style.left = ele.offsetLeft + speed + "px";
        var val = leftDir - ele.offsetLeft;
        if (Math.abs(val) <= 10) {
            ele.style.left = leftDir + "px";
            clearInterval(ele.timer);
        }
    },10);
}
