$(function(){
	//2.获取来自购物车的信息

//		$(".lis").html('数量：'+$.cookie("number")+',总价格'+$.cookie("newprice")+$.cookie("title")+$.cookie("oldmoney")+$.cookie("youf")+$.cookie("danJia"));
      
       var $newP = $.cookie("newprice");
       var $shu = $.cookie("number");
       var $dan = $.cookie("danJia");
	   //获取图片
	   var img = document.createElement('img');
	   img.src = $.cookie("lu");
	   img.style.cssText="width:100px;height:100px;";
	   $('.tupian').html(img);
	   
	   //获取文字
	   $('.miaosu').html($.cookie("title"));
	   //获取旧价格
	   $('.de').html($.cookie("oldmoney"));
	   //获取新价格
	   $('.now2').html($.cookie("newprice"));
	   
	   //获取数量
	   $('.buyNum').val($.cookie("number"));
	   
	   //获取运费
	   $('.yunfe').html($.cookie("youf"));
	   
	   //获取金额
	   $('.jine').html($.cookie("newprice"));
	    
	   //小计
	   var $text1 = $('.yunfe').html();
	   var $text2 = $('.jine').html();
	   $('.xiaoj').html((Number(parseInt($text1.replace(/[^0-9]/ig,""))+parseInt($text2.replace(/[^0-9]/ig,"")))/100).toFixed(2));
	   
	   
	   //点击删除货物
	   $('.shang').click(function(){
	   		$('.lism1').hide();
	   		$.cookie('newprice', null);
	   		$.cookie('number', null); 
	   		$.cookie('title', null); 
	   		$.cookie('oldmoney', null); 
	   		$.cookie('youf', null); 
	   		$.cookie('danJia', null); 
	   });
	   
	   
	   //删除的价格
//	   $('.sang').html($.cookie("oldmoney"));
	   

	   
	  var $len = $(':checkbox').length;
	  console.log($len);

	  
	  var $all = $('#all');
	  var $car = $('.car');
	  var $sCheck = $(':checkbox');
	  
	  //全选
	  $("#all").click(function(){   
		    if(this.checked){   
		        $(".list :checkbox").prop("checked", true);  
		    }else{   
				$(".list :checkbox").prop("checked", false);
		    }   
	  });
	  
	  //货物的全选
	  $("#shopall").click(function(){
  		 if(this.checked){
  		 	$(".lism1 :checkbox").prop("checked", true);
  		 }else{   
			$(".lism1 :checkbox").prop("checked", false);
		 }  
	  	
	  });
	 
	  	//数量的增加
		$(".jia").click(function(){
			
			var num;
			var $buy = $('.buyNum');
			if ($buy.val() == "" || isNaN($buy.val())) {
				num = 1;
			} else{
				num = parseInt($buy.val())+1;
				$('.jine').html(($dan*num).toFixed(2));
				$('.now2').html(($dan*num).toFixed(2));
				var $text1 = $('.yunfe').html();
		   		var $text2 = $('.jine').html();
				$('.xiaoj').html((Number(parseInt($text1.replace(/[^0-9]/ig,""))+parseInt($text2.replace(/[^0-9]/ig,"")))/100).toFixed(2));
			}
			$buy.val(num);
			return false;
		});
		//数量的减少
		$(".jian").click(function(){
			
			var num;
			var $buy = $('.buyNum');
			if ($buy.val() <= 1) {
	
				num = 1;
			} else{
				num = parseInt($buy.val()) - 1;
				$('.jine').html(($dan*num).toFixed(2));
				$('.now2').html(($dan*num).toFixed(2));
				var $text1 = $('.yunfe').html();
		   		var $text2 = $('.jine').html();
				$('.xiaoj').html((Number(parseInt($text1.replace(/[^0-9]/ig,""))+parseInt($text2.replace(/[^0-9]/ig,"")))/100).toFixed(2));
			}
			$buy.val(num);
			return false;
		});
		 
		$('.gou').click(function(){
			alert("通知","购买成功",{type:"success"})	
		});
	  
	  
	  
	  
	  

})
