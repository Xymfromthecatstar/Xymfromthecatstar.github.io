



new Vue({
				el:"#box",
				data:{
					msg:'',
					arr:[
						{src:"img/hw.png",state:true,flag:false,conent:"The North Face"},
						{src:"img/nb.png",state:true,flag:false,conent:"The North Face"},
						{src:"img/xz.png",state:true,flag:false,conent:"The North Face"},
						{src:"img/hw.png",state:true,flag:false,conent:"The North Face"},
						{src:"img/nb.png",state:true,flag:false,conent:"The North Face"},
						{src:"img/xz.png",state:true,flag:false,conent:"The North Face"},
						{src:"img/hw.png",state:true,flag:false,conent:"The North Face"},
						{src:"img/nb.png",state:true,flag:false,conent:"The North Face"},
						{src:"img/xz.png",state:true,flag:false,conent:"The North Face"},
					],
				},
				methods:{
					
				}
			})

$(".Tabs").children().click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	var q =$(this).index();
	$('.TabChildren>div').eq(q).css({'display':'block'}).siblings().css({'display':'none'});
})





