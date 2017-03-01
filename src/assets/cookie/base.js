

			/**
			 * cookie的封装
			 */
		//设置cookie	
		function setCookie(name,value,expires,path,domain,secure){
			//name=value
			var cookieText = encodeURIComponent(name)+"="+encodeURIComponent(value);
			
			if(expires instanceof Date){
				//instanceof 判断是否属于某一个类型(必须是用new关键字创建的变量才能用)
				
				cookieText += "; expires="+expires;
				
			}
			
			//path
			if(path){
				cookieText += "; path="+path;
			}
			
			//domain
			if(domain){
				cookieText += "; domain="+domain;
			}
			
			//secure
			if(secure){
				cookieText += "; secure";
			}
			
			document.cookie = cookieText;//设置cookie
			return document.cookie;
		}
			
		//获取cookie
		//name=lisa; pass=123445; age=16
		function getCookie(name){
			var cookie = decodeURIComponent(document.cookie);
			
//			[name=lisa,pass=123445, age=16]
			var arr = cookie.split("; ");
			for(var i=0;i<arr.length;i++){
				//pass=123,age=18
				var arr2 = arr[i].split("=");
				if(arr2.length>=2){
					if(arr2[0]==name){
						return arr2[1];
					}
				}
				
			}

			return "";
		}
		
		
		//删除cookie
		function removeCookie(name){
			var d = new Date();
			document.cookie = decodeURIComponent(name)+"=; expires="+d;
			return document.cookie;
		}