<?php
	include 'DBHelper.php';
	include 'format.php';

	//判断当前 email 是否已存在数据表中
	$mobileCheck = format("select * from baby where mobile='{0}'", $_POST["mobile"]);
	$result = query($mobileCheck);
	//当前 email 不存在，执行插入操作 
	if(count($result) < 1){
		$sql = format("insert into baby(mobile, password, rpassword,yanzheng) values('{0}', '{1}', '{2}','{3}')", $_POST["mobile"], $_POST["password"], $_POST["rpassword"],$_POST["yanzheng"]);
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: 'email 已被注册！！！'}";
	}
?>