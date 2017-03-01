$(function(){
	var islogin1 = false;
	var islogin2 = false;
	
	//验证手机号
	$('.nameWarn').hide();
	$("#logUsername").keyup(function(){
		$(this).blur(function(){
			var patern = /^1[34578]\d{9}$/;
			
			if (patern.test($(this).val())) {
				$('.nameWarn').hide();
				islogin1 = true;
			} else{
				$('.nameWarn').show();
				islogin1 = false; 
			}
		})
		if($(this).val() == ""){
			$('.nameWarn').show();
		}
	});
	
	//验证密码
	$('.passWarn').hide();
	$("#pass").keyup(function(){
		$(this).blur(function(){
			var patern2 = /^[a-zA-Z]\w{5,17}$/gi;
			
			if (patern2.test($(this).val())) {
				$('.passWarn').hide();
				islogin2 = true;
			} else{
				$('.passWarn').show();
				islogin2 = false;
			}
		})
		if($(this).val() == ""){
			$('.passWarn').show();
		}
	});
	
	//点击登录按钮
//	$(".deng").click(function(){
//		$("#logUsername").keyup().blur();
//		$("#pass").keyup().blur();
//		
//		console.log($("#code").val() != "");
//		
//		if (islogin1 && islogin2 && $("#code").val() != "") {
//			var obj = {
//				"logUsername":$("#logUsername").val(),
//				"pass":$("#pass").val()
//			}
//			obj = JSON.stringify(obj);
//			$.cookie("message",obj,{ expires: 7, path: '/' })
//			alert("完成", "即将跳转到首页面", function () {
//				location.href = "../index.html";
//	            }, {type: 'success', confirmButtonText: '确定'});
//	            
//		} else{
//			alert("注册失败", "请完成页面信息", function () {
//				
//	            }, {type: 'error', confirmButtonText: '确定'});
//			
//		}
//	});

	//点击登录按钮
	$('.deng').click(function(){
		    	//console.log("aaaaaaaaaa");
				$.post('../php/login.php',{
					mobile: $('#logUsername').val(),
					password: $('#pass').val()
				}, function(response2){
					var $obj2 = eval('(' + response2 + ')');
					if($obj2.state){
						alert("登录成功", "即将跳转到主页面", function () {
							location.href = "../index.html";
							}, {type: 'success', confirmButtonText: '确定'});
						} else{	
							 alert("登录失败", "请完成页面信息", function () {
								
							 }, {type: 'error', confirmButtonText: '确定'});
							
							
						
					}
				})				
			});
	
	
})
