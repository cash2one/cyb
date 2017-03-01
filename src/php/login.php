<?php
	include "DBHelper.php";
	include "format.php";

	//判断当前 mobile 是否已存在数据表中
	$sql = format("select * from baby where mobile='{0}' and password='{1}'", $_POST["mobile"], $_POST["password"]);
	$result = query($sql);
	//当前 mobile 不存在，登录失败
	if(count($result) < 1){ 
		echo "{state: false, message: '登录失败！！！'}";
	} else {
		echo "{state: true, message: '登录成功！！！'}";
		session_start();
		$_SESSION["login_mobile"] = $result[0]->mobile;		
	}
?>