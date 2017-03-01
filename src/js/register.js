$(function(){
	var islogin1 = false;
	var islogin2 = false;
	var islogin3 = false;
	var islogin4 = false;
	var islogin5 = false;
	
	//验证手机号
	$('.plephone').hide();
	$("#mobile").keyup(function(){
		$(this).blur(function(){
			var patern = /^1[34578]\d{9}$/;
			
			if (patern.test($(this).val())) {
				$('.plephone').hide();
				islogin1 = true;
			} else{
				$('.plephone').show();
				islogin1 = false; 
			}
		})
		if($(this).val() == ""){
			$('.plephone').show();
		}
	});
	
	
	//验证密码
	$('.plepass').hide();
	$("#passWord").keyup(function(){
		$(this).blur(function(){
			var patern2 = /^[a-zA-Z]\w{5,17}$/gi;
			
			if (patern2.test($(this).val())) {
				$('.plepass').hide();
				islogin2 = true;
			} else{
				$('.plepass').show();
				islogin2 = false;
			}
		})
		if($(this).val() == ""){
			$('.plepass').show();
		}
	});
	
	//确认密码
	$('.plecomi').hide();                            
	$("#rpassWord").keyup(function(){
		$("#passWord").keyup().blur();
		$(this).blur(function(){
			var pater = $("#passWord").val();
			if( pater==""){
				$('.plecomi').show();
				islogin3 = false;
			}else{
				
				if (pater == $(this).val()) {
					$('.plecomi').hide();    
					islogin3 = true;
				} else{
					$('.plecomi').show();
					islogin3 = false;
				}
			} 
			
		})
		if($(this).val() == ""){
				$('.plecomi').show();
		}
	});
	
	//输入验证码vcpzbo
	$('.tuyan').hide();
	$('.yan').keyup(function(){
		$(this).blur(function(){
			if($(this).val() === 'vcpzbo'){
				$('.tuyan').hide();
				islogin4 = true;
			}else{
				$('.tuyan').show();
				islogin4 = false;
			}
		})	
	});
	
	//验证码 
	$(".sCode").click(function(){
		var $this = $(this);
		
		if(islogin1){
			var index = 10;
			var timer;
			timer = setInterval(function(){
				
				console.log(index);
				$('.sCode').val(index);
				if(index == 0){
					clearInterval(timer);
					$('.sCode').val("获取验证码");
					return;
				}
				index--;
			},1000)
		}else{
			alert("获取手机验证号失败", "请输入正确的手机号", function () {
	            }, {type: 'error', confirmButtonText: '确定'});
		}
		
	});
	
	//点击注册按钮
//	$(".regS").click(function(){
//		$("#moblie").keyup().blur();
//		$("#password").keyup().blur();
//		$("#rpassword").keyup().blur();
//		$('.yan').keyup().blur();
//		$(".sCode").keyup().blur();
//		
//		console.log($("#code").val() != "");
//		
//		if (islogin1 && islogin2 && islogin3 && islogin4 && $("#code").val() != "") {
//			var obj = {
//				"mobile":$("#moblie").val(),
//				"password":$("#password").val()
//			}
//			obj = JSON.stringify(obj);
//			$.cookie("message",obj,{ expires: 7, path: '/' })
//			alert("注册完成", "即将跳转到登录页面", function () {
//				location.href = "login.html";
//	            }, {type: 'success', confirmButtonText: '确定'});
//	            
//		} else{
//			alert("注册失败", "请完成页面信息", function () {
//				
//	            }, {type: 'error', confirmButtonText: '确定'});
//			
//		}
//	});

		$('.regS').click(function(){
				$.post('../php/register.php',{
					mobile: $('#mobile').val(),
					password: $('#passWord').val(),
					rpassword: $('#rpassWord').val(),
					yanzheng:$('.yan').val()
				}, function(response){
					var $obj = eval('(' + response + ')');
					if($obj.state){
						alert("注册完成", "即将跳转到登录页面", function () {
							location.href = "login.html";
							}, {type: 'success', confirmButtonText: '确定'});
						} else{	
							alert("注册失败", "请完成页面信息", function () {
								
							 }, {type: 'error', confirmButtonText: '确定'});
							
							
						
					}
				})				
			});



	
	
	
	
	
})
