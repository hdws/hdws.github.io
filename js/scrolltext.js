window.onload=function(){
		var oDiv=document.getElementById('scrolltext');
		var oUl=oDiv.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		var timer=null;
		var speed = -1;
		oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
		oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
		function move(){
			// 向左
			if(oUl.offsetLeft<-oUl.offsetWidth/2){
				oUl.style.left='0';
			}
			// 向右无缝滚动
			if(oUl.offsetLeft>0){
				oUl.style.left=-oUl.offsetWidth/2+'px';
			}
			oUl.style.left=oUl.offsetLeft+speed+'px';
		}
		var timer=setInterval(move,18);
		oDiv.onmouseover=function(){
			clearInterval(timer);
		}
		oDiv.onmouseout=function(){
			timer=setInterval(move,18);
		}
	}