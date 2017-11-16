//querySelector----获取单个元素---第一个
//querySelectorAll---查找元素--参数---css选择器--所有


var ccount=document.getElementById("ccount");
var btns=document.querySelectorAll(".list dl dd button");
	//把上次的cookie拿出来
	
				var cookies=getCookie("datas");	
				//如果没拿到cookie--第一次添加cookie
				if(cookies==undefined){
					//设置cookie=datas=[];
					setCookie("datas","[]",50);
					cookies=getCookie("datas");
				}
			//获取到的cooKie是字符串--转成数组
			var cookiesarr=JSON.parse(cookies);
	ccount.innerHTML=getTotal();	
		for(var i=0;i<btns.length;i++){
			//按钮点击事件
			btns[i].onclick=function(){
				//获取要添加到cookie的信息
				var dl=this.parentNode.parentNode;
				var arrs=dl.children;
				var pid=dl.getAttribute("pid");
				var imgSrc=arrs[0].firstElementChild.src;
				var pdes=arrs[2].innerHTML;
				var price=arrs[3].firstElementChild.innerHTML;
				//---判断是否存在商品
				if(checkishas(pid)){
					//把该商品的pcout+1
					updateNum(pid,1);
					
				}else{
						//存储到obj对象中
					var obj={
						pid:pid,
						imgSrc:imgSrc,
						pdes:pdes,
						price:price,
						pcount:1//商品数量
					}
					//设置cooKie--从新获取cookie
					var cookies=getCookie("datas");	
					var cookiesarr=JSON.parse(cookies);
				//像数组中添加本次的商品信息的obj
					cookiesarr.push(obj);	
				//把数组转回字符串
					var cookiesarrstr=JSON.stringify(cookiesarr);
					
			//添加到cookie中
					setCookie("datas",cookiesarrstr,50);
					//点击完成从新获取总数
				
					
				}
					ccount.innerHTML=getTotal();
				
				
			}
			
			
		}
