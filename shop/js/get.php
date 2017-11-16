<?php
	header("content-type:text/html;charset=utf-8");
//	$username = $_GET["username"];
	$phone = $_GET["username"];
	$username = array("15813263883");
//	$usernameArr = array("张仁翔","张杰","黄振洪","邱志勇");
	if(in_array($phone, $username)){
		echo "手机号已注册！";
	}else{
		echo "注册成功！";
	}
?>