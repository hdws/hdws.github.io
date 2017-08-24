$(function(){
  function GetRTime(){
          var EndTime= new Date('2018/01/01 00:00:00');
          var NowTime = new Date();
          var t =EndTime.getTime() - NowTime.getTime();
          var d=0;
          var h=0;
          var m=0;
          var s=0;
          if(t>=0){
            d=Math.floor(t/1000/60/60/24);
            h=Math.floor(t/1000/60/60%24);
            m=Math.floor(t/1000/60%60);
            s=Math.floor(t/1000%60);
          }
          document.getElementById("t_d").innerHTML = d + "";
      }
      setInterval(GetRTime,0);
})
})
