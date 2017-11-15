


$(".Tabs").children().click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	var q =$(this).index();
	$('.TabChildren>div').eq(q).css({'display':'block'}).siblings().css({'display':'none'});
})



