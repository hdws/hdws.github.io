var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?37fabebe62ab6e6736175261cff22907";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

// IE
$(function(){
    if(navigator.userAgent.indexOf("MSIE")>0){   
      var r = $(["<div class='browserupdate clearfix'>", "<i></i>您的浏览器版本过低，建议您更新版本从而获得最佳浏览体验！<a href='browser.html' target='_blank'>立即更新</a>", "<p class='right'><a href='javascript:;' class='after'>稍后再说</a><a href='javascript:;' class='close'><i></i></a></p>", "</div>"].join(""));
      if(navigator.userAgent.indexOf("MSIE 6.0")>0 || navigator.userAgent.indexOf("MSIE 7.0")>0 || navigator.userAgent.indexOf("MSIE 8.0")>0){  
        $("body").prepend(r);
        $(".browserupdate .close").click(function() {
            $(".browserupdate").fadeOut(500);
        }),
        $(".browserupdate .after").click(function() {
            $(".browserupdate").fadeOut(500);
        })
      }   
    } 
})