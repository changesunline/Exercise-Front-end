$(function () {
    $('.wrapper').on('click','a',function () {
        //渲染页面  页面标识
        var page = $(this).parent().data('page');
        render(page);
        // 追加历史
        var historyUrl = $(this).attr("href");
        history.pushState(null,null,historyUrl);
        // 阻止默认的a链接跳转
        return false;
    });
    window.onpopstate = function () {
      var pathname = location.pathname;
      var page = "index";
      if (pathname.indexOf("index.php") > -1) {
        page = 'index';
      }else if (pathname.indexOf('my.php') > -1) {
        page = 'my';
      }else if (pathname.indexOf('friend.php') > -1) {
        page = "friend";
      }
      render(page);
    }
    
});
var render = function (page) {
    /*怎么调用ajax 请求方式  请求地址  请求参数  返回数据结构和意义 */
    /*发出请求*/
    $.ajax({
        type:'get',
        url:'api/data.php',
        data:{
            page:page||'index'
        },
        dataType:'json',
        success:function (data) {
            /*渲染页面*/
            /*选中样式*/
            $('[data-page]').removeClass('now');
            /*data返回了当前页面的标识*/
            $('[data-page="'+data.page+'"]').addClass('now');
            /*网页内容*/
            $('.content').html(data.html);
        }
    });
}
