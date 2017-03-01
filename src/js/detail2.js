$(function(){

	//加载头部和尾部信息
	$("#index_header").load("header2.html?_"+Math.random());
	$("#index_footer").load("footer2.html?_"+Math.random());
	
	//滚到一定距离出现图标
	$fixnav = $('.fixnav');
		//滚动
		$(window).on('scroll',function(){
			
			// 获取滚动过的距离
			var scrollTop = $(window).scrollTop();
			// 1>滚动距离大于400，显示楼层导航，小于400时隐藏
				if(scrollTop > 100){
					$fixnav.show();
				}else{
					$fixnav.hide();
				}
			
		});	
	
	//点击回到顶部
	$fixnav.find('img').eq(2).click(function(){
		$('html,body').animate({scrollTop:0})
	})
	
	
	
	
	//放大镜
	$("#etalage").zoom({
		zoom_area_width: 300,
//	    autoplay_interval :3000,
	    small_thumbs : 4
//	    autoplay : true
	});
		
	//二维码
	$('#gText').on('mouseenter',function(){
		$('#gzwm').show();	
	});
	$('#gText').on('mouseleave',function(){
		$('#gzwm').hide();
	});
	
	//数量的加减
	var $danJia = $('.danJia').html();
	$(".jia").click(function(){
		//console.log($danJia);
		var num;
		var $buy = $('.buyNum');
		if ($buy.val() == "" || isNaN($buy.val())) {
			num = 1;
		} else{
			num = parseInt($buy.val())+1;
			$('.price').html(($danJia*num).toFixed(2));
		}
		$buy.val(num);
		return false;
	});
	$(".jian").click(function(){
		var num;
		var $buy = $('.buyNum');
		if ($buy.val() <= 1) {

			num = 1;
		} else{
			num = parseInt($buy.val()) - 1;
			$('.price').html(($danJia*num).toFixed(2));
		}
		$buy.val(num);
		return false;
	});
	
	//加入购物车
	$(".car").click(function(){
		var $buy = $('.buyNum');
		if (!isNaN($buy.val()) && $buy.val() != "") {
			var total = parseInt($('.price').html());
			var num   = parseInt($buy.val());
//			console.log(product + ","+img + ","+$buy.val() +","+$('.price').html());
			
			//保存cookie
//			var d = new Date();
//			d.setDate(d.getDate()+7);
			var $miao = $('.miao').html();
            var $chuang = $('#chuang').attr("src");
            var $shi = $('.shi').html();
            var $youf = $('.youf').html();
            var $danJia = $('.danJia').html();
			$.cookie("title",$miao,{expires:10});
		    $.cookie("number",$buy.val(),{expires:10});
		    $.cookie("newprice", $('.price').html(),{expires:10});
            $.cookie("lu",$chuang,{expires:10});
            $.cookie("oldmoney",$shi,{expires:10});
			$.cookie("youf",$youf,{expires:10});
			$.cookie("danJia",$danJia,{expires:10});
			
			confirm("该商品已成功放入购物车", "购物车共" +$buy.val() +"件商品 合计：$" + ((59.00*num).toFixed(2)) + "元", function (isConfirm) {
                if (isConfirm) {
                    //after click the confirm
                } else {
                    window.location = "shopcar.html";
                }
            }, {confirmButtonText: '继续购物', cancelButtonText: '去结算', width: 400,type:'success'});
   
		} else{
			alert("加入购物车失败", "请选择完整的商品信息或者登录后在添加", function () {
	            }, {type: 'error', confirmButtonText: '确定'});
		}
		return false;
	});
	
	//楼梯
	var $nav = $('#nav');
	var $floor = $('#main .floor');
	
	//滚动
	$(window).on('scroll',function(){
		// 获取滚动过的距离
		var scrollTop = $(window).scrollTop();

		//滚动距离大于800，固定楼层导航
		if(scrollTop > 800){
			$nav.css({'position':'fixed','top':'0','left':'211px',});
		}else{
			$nav.css({'position':'relative','top':'0','left':'0'});
		}


		//滚动到某一楼层时，高亮显示导航对应楼梯
		$floor.each(function(idx,ele){
			// 当滚动过的距离大于等于当前ele的offsetTop,说明我已经滚动到这个楼层
			/*if(scrollTop >= $(ele).offset().top - $(ele).outerHeight()/3 && scrollTop < $(ele).offset().top + $(ele).outerHeight()/2){
				$nav.find('li').eq(idx).addClass('hover').siblings('li').removeClass('hover');
			}*/
			if($(ele).offset().top - scrollTop < $(window).height()/2){
				$nav.find('li').eq(idx).addClass('hover').siblings('li').removeClass('hover');
				// return false;
			}
			
		})
	});
	
		//点击楼层导航，跳转到相应楼层
		$nav.on('click','li',function(){
			if($(this).hasClass('hover')){
				scrollTop = 0;
			}else{
				var index = $(this).index();
				//保证在正中央:scrollTop = floor.offsetTop - (window.height-floor.height)/2
				var scrollTop = $floor.eq(index).offset().top - ($(window).height()-$floor.eq(index).outerHeight())/2+100;
			}
			$('html,body').animate({scrollTop:scrollTop});
		});

})