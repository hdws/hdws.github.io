

$(document).ready(function(){
	var num=$('.banner_ul li').length;
	var i_mun=0;
	var timer_banner=null;

	$('.banner_ul li:gt(0)').hide();//页面加载隐藏所有的li 除了第一个
	
//底下小图标点击切换
	// $('.weichuangyi_span span').click(function(){
	// 	$(this).addClass('weichuangyi_span_one')
	// 		   .siblings('span').removeClass('weichuangyi_span_one');
	// 	var i_mun1=$('.weichuangyi_span span').index(this);
	// 	$('.weichuangyi_ul li').eq(i_mun1).fadeIn('slow')
	// 		                   .siblings('li').fadeOut('slow');

	// 	i_mun=i_mun1;
	// });
	
//左边箭头点击时切换
	$('.banner_left').click(function(){
		if(i_mun==0){
			i_mun=num
		}
		//大图切换
		$('.banner_ul li').eq(i_mun-1).fadeIn('slow')
								   .siblings('li').fadeOut('slow');
		//小图切换
		$('.banner_span span').eq(i_mun-1).addClass('weichuangyi_span_one')
				   .siblings('span').removeClass('weichuangyi_span_one');

		i_mun--
	});

	//左边按钮移动到其上时更换背景图片
    $('.banner_left').mouseover(function(){
		
		$('.banner_left em').addClass('banner_left1');
	});

	//左边按钮移动到其上时还原背景图片
	$('.banner_left').mouseout(function(){
		
		$('.banner_left em').removeClass('banner_left1');
	});

//右边箭头点击时切换
	$('.banner_right').click(function(){
		move_banner()
		
	});

	//右边按钮移动到其上时更换背景图片
	$('.banner_right').mouseover(function(){
		
		$('.banner_right em').addClass('banner_right1');
	});

	//右边按钮移动到其上时更换背景图片
	$('.banner_right').mouseout(function(){
		
		$('.banner_right em').removeClass('banner_right1');
	});
	
//鼠标移动到幻灯片上时 显示左右切换案例
	$('.banner').mouseover(function(){
		$('.banner_left').show();
		$('.banner_right').show();
	});

//鼠标离开幻灯片上时 隐藏左右切换案例
	$('.banner').mouseout(function(){
		$('.banner_left').hide();
		$('.banner_right').hide();
	});
	
	//自动播放函数
	function bannerMoveks(){
		timer_banner=setInterval(function(){
			move_banner()
		},4000)
	};
	bannerMoveks();//开始自动播放

	//鼠标移动到banner上时停止播放
	$('.banner').mouseover(function(){
		clearInterval(timer_banner);
	});

	//鼠标离开 banner 开启定时播放
	$('.banner').mouseout(function(){
		bannerMoveks();
	});


//banner 右边点击执行函数
   function move_banner(){
			if(i_mun==num-1){
				i_mun=-1
			}
			//大图切换
			$('.banner_ul li').eq(i_mun+1).fadeIn('slow')
									   .siblings('li').fadeOut('slow');
			//小图切换
			// $('.banner_span span').eq(i_mun+1).addClass('banner_span_one')
			// 		   .siblings('span').removeClass('weichuangyi_span_one');

			i_mun++
		
		}

})















