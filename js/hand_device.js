$(document).ready(function() {
        var explorer = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var flag = true;
        for (var i = 0; i < Agents.length; i++) {
            if (explorer.indexOf(Agents[i]) > 0) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            window.location.href = "./mobile/index.html";//手机
        }
    });