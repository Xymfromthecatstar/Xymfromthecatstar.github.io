//登录页面
var topPs = $("#p").nextAll();
var imgErwms = $(".imgErwm").prevAll();
var clkimg = $(".clk").children();
var validates = $(".clk").nextAll();
var googles = $("#google").children();
var clks = $(".clk").nextAll();
var handsets = $("#handset").children();
$(clkimg[0]).click(function() {
	if($(clkimg[1]).hide()) {
		$(this).hide();
		$(clkimg[1]).show();
	}

	$(".logs").hide();
	$(".logCon").hide();
	$(".imgErwm").show();

})
$(clkimg[1]).click(function() {
	if($(clkimg[0]).hide()) {
		$(this).hide();
		$(clkimg[0]).show();
	}
	$(".logs").hide();
	$(".logCon").show();
	$(".imgErwm").hide();

})
$(".logFont").click(function() {
	$(".logs").show();
	$(".logCon").hide();

})
$(".proFont").click(function() {
	$(".logs").hide();
	$(".logCon").show();

})

$(".pollCode").click(function() {
	$("#LoginRegisterog").show();
	$(".pollCodes").show();
	$(this).hide();

})
$(".pollCodes").click(function() {
	$("#LoginRegisterog").hide();
	$(".pollCode").show();
	$(this).hide();

})
////验证手机号
var phone=document.getElementById("handsets");
var prompt1=document.getElementById("prompt1");
var prompt1=document.getElementById("prompt1");
var phones=document.getElementById("phones");
var username=document.getElementById("username");

var shouji=document.getElementById("shouji");
			$(".log").click(function(){
				if(phone.value == ""){
					prompt1.innerText = "手机号不能为空!";
					flag = false;
				}else{
					if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(phone.value)){
						prompt1.innerText = "手机号错误!";
						flag = false;
					}else{
						flag = true;
						prompt1.innerText = "欢迎回来!";
					}
				}
		})
			$("#passwords").click(function(){
				if(username.value == ""){
					shouji.innerText = "手机号不能为空!";
					flag = false;
				}else{
					if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(username.value)){
						shouji.innerText = "手机号错误!";
						flag = false;
					}else{
						flag = true;
						shouji.innerText = "√";
					}
				}
		})
	$("#usernames").click = function(){
				if(flag == true){
					var ajax = null;
					if(window.XMLHttpRequest){
						ajax = new XMLHttpRequest();
					}else{
						ajax = new ActiveXObject("Microsoft.XMLHTTP");
					}
					ajax.open("GET","js/get.php?username="+username.value,true);
					ajax.onreadystatechange = function(){
						if(ajax.readyState == 4 && ajax.status == 200){
							var data = ajax.responseText;
							phones.innerHTML =(data);
						}
					}
					ajax.send();
				}
			}








