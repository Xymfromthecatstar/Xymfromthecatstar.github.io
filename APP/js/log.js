var phone=document.getElementById("phone");
var Id=document.getElementById("Id");
var login=document.getElementById("login");


Id.onclick=function(){
	var flag=true;
	if(!phone.value){
	alert("手机号不能为空")
		flag=false;
	}else if(!/^1[3|5|7|8][0-9](\d{4}|\d{8})$/.test(phone.value)){
	alert("手机格式错误");
		flag=false;
	}
	
	
}

login.onclick=function(){
	var flag=true;
	if(!phone.value){
	alert("手机号不能为空")
		flag=false;
	}else if(!/^1[3|5|7|8][0-9](\d{4}|\d{8})$/.test(phone.value)){
	alert("手机格式错误");
		flag=false;
	}else if(!Id.value){
	alert("密码不能为空");
		flag=false;
	}else{
		window.location.href="index.html"
	}
		
}

