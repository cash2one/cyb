$(function(){
	//加载头部和尾部信息
	$("#index_header").load("html/header.html?_"+Math.random());
	$("#index_footer").load("html/footer.html?_"+Math.random());
	
	
	//滚到一定距离出现图标
	$fixnav = $('.fixnav');
		//滚动
		$(window).on('scroll',function(){
			
			// 获取滚动过的距离
			var scrollTop = $(window).scrollTop();
			// 1>滚动距离大于400，显示楼层导航，小于400时隐藏
				if(scrollTop > 400){
					$fixnav.show();
				}else{
					$fixnav.hide();
				}
			
		});	
	
	//点击回到顶部
	$fixnav.find('img').eq(2).click(function(){
		$('html,body').animate({scrollTop:0})
	})
	
	//点击到列表页
	$('.baobao').on('click',function(){
		location.href = "html/goodsList.html";
	});
	
	//轮播图插件
	var  index = 0; 
	show();  
	function show(){
		if(index==$('.lun').find('li').length){
			index =0;		
		}else if(index<0){				
			index=2;
		}
		$('.lun').find('li').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0},500);
		$('.lun').find('li').eq(index).show().siblings().hide();
		$('.slide').find('li').removeClass("active")
		$('.slide').find('li').eq(index).addClass("active")
	}
			
	var timer = setInterval(fAnimate,2000);
	function fAnimate(){
		index++;
		show();
	}
	
	//鼠标移入停止轮播
	$('.slide').find('li').mouseenter(function(){
		index = $(this).index();
		clearInterval(timer);
		show();
	});
	
	//鼠标移开，继续轮播
	$('.sec_btm').mouseleave(function(){
		timer = setInterval(fAnimate,2000);
	});
	
	
	
	
	
	//lunbo swiper
//	 var mySwiper = new Swiper ('.swiper-container', {  
//		direction: 'horizontal',
//	    loop: true,
//				    
//	    // 如果需要分页器
//	    pagination: '.swiper-pagination',
//		autoplay : 1000,
//		speed:300,	
//	});
	 




});
