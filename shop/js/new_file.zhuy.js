//回到顶部	
window.addEventListener("scroll", function() {
	var to = document.body.scrollTop || window.pageYoffset || document.documentElement.scrollTop;
	if(to > 1500) {
		$(".top").show();
	} else if(to == 0) {
		clearInterval(temp);
	} else {
		$(".top").hide();
	}

})
$(".top>ul li:nth-of-type(3) ul li").click(function() {
	$(".top").hide();
	temp = setInterval(function() {
		window.scrollBy(0, -100);
	}, 10)

})
$("#nav>ul:nth-of-type(2)>li:nth-of-type(10)").mouseover(function() {
	$("#nav>ul:nth-of-type(2)>li:nth-of-type(10)>ul").show();
})
$("#nav>ul:nth-of-type(2)>li:nth-of-type(10)").mouseout(function() {
	$("#nav>ul:nth-of-type(2)>li:nth-of-type(10)>ul").hide();
})
$(".top>ul>li:nth-of-type(1)").mouseover(function() {
	$(".top>ul>li:nth-of-type(1) ul li").show();

})
$(".top>ul>li:nth-of-type(1) ul li").mouseover(function() {
	$(this).show();
})
$(".top>ul>li:nth-of-type(1) ul li").mouseout(function() {
	$(this).hide();
})
$(".top>ul li:nth-of-type(2)").mouseover(function() {
	$(".top>ul li:nth-of-type(2) ul li img").slideDown(500);

})
$(".top>ul li:nth-of-type(2) ul li img").mouseout(function() {
	$(".top>ul li:nth-of-type(2) ul li img").hide();

})
$(".top>ul li:nth-of-type(3)").mouseover(function() {
	$(".top>ul li:nth-of-type(3) ul li").show();
})
$(".top>ul li:nth-of-type(3)").mouseover(function() {
	$(".top>ul li:nth-of-type(3) ul li").show();
})
$(".top>ul li:nth-of-type(3) ul li").mouseout(function() {
	$(this).hide();
})

//轮播图
var num = 0;
var arrImg = ["img/zhuy.img/7.png", "img/zhuy.img/5.png", "img/zhuy.img/3.png", "img/zhuy.img/6.png", "img/zhuy.img/4.png"];

function autoImg() {
	num++;
	if(num < 5) {
		$("#nav>ul:nth-of-type(1) li img").eq(0).prop("src", arrImg[num]);
		$($("#nav>ul:nth-of-type(4) li")[num]).css("background", "dodgerblue").siblings().css("background", "#F5F5F5");
	} else {
		num = 0;
		$("#nav>ul:nth-of-type(1) li img").eq(0).prop("src", arrImg[num]);
		$($("#nav>ul:nth-of-type(4) li")[num]).css("background", "dodgerblue").siblings().css("background", "#F5F5F5");
	}
}
$("#nav>ul:nth-of-type(4) li").click(function() {
	$($("#nav>ul:nth-of-type(4) li")[num]).css("background", "dodgerblue").siblings().css("background", "#F5F5F5");
	num = $(this).index();
	$("#nav>ul:nth-of-type(1) li img").eq(0).prop('src', arrImg[num]);
})
var timer = setInterval(autoImg, 3000);
//			鼠标悬浮停止轮播
$("#nav").mouseover(function() {
	clearInterval(timer);
})
//鼠标离开悬浮继续轮播
$("#nav").mouseout(function() {
	timer = setInterval(autoImg, 3000);
})
//点击li切换
$("#nav>ul:nth-of-type(4) li").click(function() {
	$(this).css("background", "dodgerblue").siblings().css("background", "#F5F5F5");
	var q = $(this).index();
	$("#nav>ul:nth-of-type(1) li img").eq(0).prop('src', arrImg[q]);
})

//手动轮播图

var zdy = 0;
//alert($(".CarouselF").children())
$("#CarouselF ul:nth-of-type(2) li").click(function() {

	$(this).css("background", "dodgerblue").siblings().css("background", "#F5F5F5");
	zdy = $(this).index();
	$($(".CarouselF").children()[zdy]).fadeIn(300).siblings().hide(000, function() {
		$($(".CarouselF").children()[zdy]).animate({ 'margin-left': '0px' }, "linear")
	});
})
//alert($("#CarouselF ul:nth-of-type(2) li").length)
$("#CarouselF div:nth-of-type(1)").click(function() {
	zdy--;
	if(zdy >= 0) {
		$($(".CarouselF").children()[zdy]).fadeIn(300).siblings().hide(000);
		$($("#CarouselF ul:nth-of-type(2) li")[zdy]).css("background", "dodgerblue").siblings().css("background", "#F5F5F5");
	} else {
		zdy = 2;
		$($(".CarouselF").children()[zdy]).fadeIn(300).siblings().hide(000);
		$($("#CarouselF ul:nth-of-type(2) li")[zdy]).css("background", "dodgerblue").siblings().css("background", "#F5F5F5");

	}
})
$("#CarouselF div:nth-of-type(2)").click(function() {
	zdy++;
	if(zdy < 3) {
		$($(".CarouselF").children()[zdy]).fadeIn(300).siblings().hide(000, function() {
			$($(".CarouselF").children()[zdy]).animate({ 'margin-left': '0px' }, "linear")
		});
		$($("#CarouselF ul:nth-of-type(2) li")[zdy]).css("background", "dodgerblue").siblings().css("background", "#F5F5F5");
	} else {
		zdy = 0;
		$($(".CarouselF").children()[zdy]).fadeIn(300).siblings().hide(000);
		$($("#CarouselF ul:nth-of-type(2) li")[zdy]).css("background", "dodgerblue").siblings().css("background", "#F5F5F5");

	}
})
$("#CarouselF").mouseover(function() {
	$("#CarouselF div").show();
})
$("#CarouselF").mouseout(function() {
	$("#CarouselF div").hide();
})

//吸顶菜单
		window.addEventListener("scroll", function() {
			var to = document.body.scrollTop || window.pageYoffset || document.documentElement.scrollTop;
			if(to > 500){
				$("#fixed").slideDown(500);
			}else{
				$("#fixed").slideUp(500);
			}

		})




















//$("#main ul li div").mouseover(function(){
//		$(this).animate({'margin-left':'100px'},500,"linear")
//	
//})
//$("#main ul li div").MOUSEOUT(function(){
//		$(this).animate({'margin-left':'0px'},500,"linear")
//	
//})
//var lst = $("#list ul li").eq().nodeName == "img";
//$("#list").mouseover(function(){
//	alert(lst.length)
//	$(lst).show()
//})


//if(target.nodeName.toLowerCase() == "li")
//obj = {"cid":"C0","ctext":"区县"}; 
