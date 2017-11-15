
var arrImg = ["img/hw.png","img/nb.png","img/xz.png"];
var num = 0;

$(".lists").children().click(function(){
//	$(this).addClass("active").siblings().removeClass("active");
	var q =$(this).index();
	$('.buttonSp>div').eq(q).css({'display':'block'}).siblings().css({'display':'none'});
})

function autoImg(){
				num++;
				if (num<3) {
					$('.Carousel img').eq(0).prop("src",arrImg[num]);
				} else{
					num=0;
					$('.Carousel img').eq(0).prop("src",arrImg[num]);
				}
			}
			
var timer = setInterval(autoImg,3000);










