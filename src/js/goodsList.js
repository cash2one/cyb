//列表页
;$(function () {
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
				if(scrollTop > 400){
					$fixnav.show();
				}else{
					$fixnav.hide();
				}
			
		});	
		
	//点击回到顶部
	$fixnav.find('img').eq(2).click(function(){
		$('html,body').animate({scrollTop:0})
	});
	
	
	
	

    //定义全局变量
    var $goodsIt = $('.goodsIt');

    //排序方式  默认为按id排序
    var _orderType = 'id';

    //从第几页开始加载  即分页
    var _page = 0;

    //每页的商品数;
    var _pageCount = 18;

    //使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列
    //默认升序 ASC
    var _orderWay = 'ASC';

    //是否按价格区间获取内容;
    var _priceBoolean = 'false';
    var _priceRange = '';




    //按 价格 或 销量 排序后分页
/********  点击分页  ******  点击分页   ********  点击分页   ************/

    //点击分页
    $('.btn-group').on('click','button',function () {
        _page = _pageCount * ($(this).text() - 1);
        //console.log("22222");
        goodsPost();
    });
 
	$('.btn-group').on('click')





/***************      发送请求数据库内的所有商品信息     *************/
    //设为同步 
    // $.ajaxSetup({
    //     async : false
    // });
	
//	$('img').on('click',function(){
//		location.href = "detail2.html";
//	});
	
    // 封装向数据库请求商品信息的函数
    function goodsPost() {

        $.post('../php/goodsList.php', {

            orderType:    _orderType,
            page:         _page,
            pageCount:    _pageCount,
            orderWay:     _orderWay,
            priceBoolean: _priceBoolean,
            priceRange:   _priceRange

        }, function (response) {
            //返回的是 string
            var respon = eval('(' + response + ')');
            var res = ' ';

            //商品列表结构
            var goodsListHtml = respon.map(function (value, index, array) {
                //map 返回数组, 每index返回一次

                res = '<li ' + ' data-index=' + '"' + value.id + '"' + ' >' +
                        '<img src=' + value.img + '>' +
                        '<ul>' +
                            '<li>'+ value.descript + '</li>' +
                            '<li>' + '￥' + value.price + '</li>' +
                            '<li><del>' + value.point + '</del></li>' +
                            '<li>' + '已售: ' + value.sale + '&nbsp;&nbsp;&nbsp;'+'<button class="shou">'+'加进购物车'+'</button></li>' +
                        '</ul>' +
                    '</li>';
                return res;
                //把map方法返回的数组转为字符串
            }).join('\n');

            //写入html页面
            $goodsIt.html('<ul>' + goodsListHtml + '</ul>');
			
			//点击加入购物车
			$('.shou').on('click',function(){
				console.log("yes");
				alert("通知","添加进购物车成功",{type: 'success', confirmButtonText: '确定'});
//				location.href = "detail2.html";
				plea();
			});
			
			//请求一个php，往数据库的表插入数据
			
			
			
    /*******      点击跳转至详情页   *****    点击跳转至详情页    ****************/

                // 获取.goodsIt的子元素的子元素 li
            var $goodsLi = $goodsIt.children().children();

            $goodsLi.on('click','img', function () {

                //获取属性值 (商品id)
                var goodsIndex = $(this).attr('data-index');

                //是否能获取到商品的信息  若能,则跳转到该商品的详情页
//              $.post('../php/detail.php', {goodsIdx: goodsIndex}, function (data) {
//                  var goodsDetail = eval('(' + data + ')');
//                  if (goodsDetail.state) {
//                      window.location.href = 'detail2.html?id=' + goodsIndex;
//                  }
//              });
				window.location.href = "detail2.html";
            })
        });

    };

    goodsPost();
	
	

});