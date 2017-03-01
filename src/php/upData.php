

<?php
	
	$p2 = array(
		'dbname' => 'cyb',
	);

	/*
		调用数据插入函数
		@url: json文件地址, 请自行修改
		@db: 数据库信息
	*/
    query('goods.json',$p2);



	/*---------------------------------------------------------------------------------------------------*/
	/*---------------------------------------------------------------------------------------------------*/
	/*------------------------------------------- 封 装 -------------------------------------------------*/
	/*---------------------------------------------------------------------------------------------------*/
	/*---------------------------------------------------------------------------------------------------*/
	// 初始化一个数据库信息类
	Class dbObj{
		var $servername;
		var $username;
		var $password;
		var $dbname;
	};

	// 显示当前时间
	function timenow(){
		echo '['.$showtime=date("Y-m-d H:i:s").'] ';
	}

	// 连接数据库
	function connect($obj){
		// 默认设置
		$default = new dbObj();
		$default->servername = '127.0.0.1';
		$default->username = 'root';
		$default->password = 'root';
		foreach ($obj as $key => $value) {
			$default->$key = $value;
		}
		$obj = $default;
		
		// 创建连接
		$conn = mysqli_connect($obj->servername, $obj->username, $obj->password, $obj->dbname);
		// 检测是否连接到数据库
		if (!$conn) {
			die('连接数据库失败:'.mysqli_connect_error());
			return null;
		}
		echo timenow().'连接数据库成功<br/>';
		return $conn;
	}

	// 数据库操作
    function query($url, $db){
    	// 初始化数据库连接对象
	    $conn = connect($db);

	    echo timenow()."已获取表单相关属性:<br/>";
	    // 获取表单字段及详情
    	$temp = mysqli_query($conn,'SHOW FULL FIELDS FROM goodslist');
    	while($row = mysqli_fetch_array($temp)){
			echo timenow().'字段名称：'.$row['Field'].' ---数据类型：'.$row['Type'].' ---注释：'.$row['Comment'].'<br/>';
		}

		// 打开json文件获取数据
		$my_file = json_decode(file_get_contents($url));
		
		// 遍历整个数据数组
		foreach ($my_file as $num => $dataObj) {
			$fields = array();
			$price = array();
			// 遍历每条数据
			foreach ($dataObj as $key => $value) {
				$fields[] = $key;
				$price[] = '"'.$value.'"';
			}
			$fieldStr = implode(",", $fields);
			$priceStr = implode(",", $price);
			// 添加进数据库
			$temp = "INSERT INTO goodslist($fieldStr) VALUES($priceStr);";

			if (mysqli_query($conn,$temp) == true) {
	    		echo timenow().'下标 <'.$num.'> 数据插入成功<br/>';
	    	} else {
	    		echo timenow().'下标 <'.$num.'> 数据插入失败,请重新插入此条数据<br/>';
	    	}
		}

	    // 释放数据库连接对象
	    mysqli_close($conn);
    }

    /*---------------------------------------------------------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------------*/

?>