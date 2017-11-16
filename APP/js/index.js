


$(".Tabs").children().click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	var q =$(this).index();
	$('.TabChildren>div').eq(q).css({'display':'block'}).siblings().css({'display':'none'});
})
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
					add:function(){
						var obj = {
						   textC:this.msg,
						   state:false,
						   flag:false,
						}
						this.arr.push(obj);
						this.msg = "";
					},
					del:function(flag,index){
						if (flag == true) {
							this.arr.splice(index,1);
						}
					},
					show:function(index){
						this.arr[index].flag = true;
					},
					hide:function(index){
						this.arr[index].flag = false;
					},
				}
			})







