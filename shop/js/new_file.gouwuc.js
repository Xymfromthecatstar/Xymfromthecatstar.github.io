var detailss = $("#detailss").children();
var fixedUl = $("#fixedUl").children();
var details = $(".detailsUl").children();


//登录
var navs = $(".nav>ul>li:nth-of-type(10)>ul");
$(".nav>ul>li:nth-of-type(10)").mouseover(function(){
	$(navs).show();
})
$(".nav>ul>li:nth-of-type(10)").mouseout(function(){
	$(navs).hide();
})


//悬浮列表

$(".nav>ul>li:nth-of-type(2)").mouseover(function(){
			$(".Suspension").show(500);
	

})
$(".Suspension").mouseover(function(){
	$(".Suspension").show();
	
})
$(".Suspension").mouseout(function(){
	$(".Suspension").hide();
	
})
$(".nav>ul>li:nth-of-type(2)").mouseout(function(){
	$(".Suspension").delay().hide();
})


for(var i = 0; i < $(fixedUl).length; i++) {
	$(detailss).hide();
	$(detailss[0]).show();

	$(fixedUl[i]).click(function() {
		$(detailss).hide();
		num = $(this).index();
		$(details[num]).show();
		$(detailss[num]).show();
		
	})

	$(details[i]).click(function() {
		$(detailss).hide();
		num = $(this).index();
		$(detailss[num]).show();

	})
	
	

}
var uls = $(".DetailIng>ul:nth-of-type(1)").children();
var divs = $(".DetailIng>div:nth-of-type(1)").children();
for(var i=0; i<uls.length; i++){
	
	$($(uls[i])).click(function(){
		$(divs).hide();
		num = $(this).index();
		$(divs[num]).show();
		$(uls).css("border","1px solid transparent");	
		$(this).css("border","1px solid blue");
})
}



//吸顶菜单

window.addEventListener("scroll", function() {
var to1 = document.body.scrollTop || window.pageYoffset || document.documentElement.scrollTop;
var to2 = document.body.scrollTop || window.pageYoffset || document.documentElement.scrollTop;
var to3 = document.body.scrollTop || window.pageYoffset || document.documentElement.scrollTop;
			if(to1 > 240) {
				$("#fixed").slideDown(1000);
			} else {
				$("#fixed").css("display","none");
			}
			if(to2 > 500) {
				$(".fixed input").show(1000);
			} else {
				$(".fixed input").css("display","none");
			}
			if(to3 > 970) {
				$(".fixed ul:nth-of-type(1)").show(1000)
				}
				else {
				$(".fixed ul:nth-of-type(1)").css("display","none");
			}
			

		})
		
//回到顶部	
		window.addEventListener("scroll", function() {
			var to = document.body.scrollTop || window.pageYoffset || document.documentElement.scrollTop;
			if(to > 1500) {
				$(".scrTop").show();
			} else if(to == 0) {
				clearInterval(temp);
			} else {
				$(".scrTop").hide();
			}

		})
		$(".scrTop ul li:nth-of-type(2)").click(function(){
			$(".scrTop").hide();
			temp = setInterval(function() {
				window.scrollBy(0, -100);
			}, 10)

		})



var proArr = [	
                { "id": "1", "name": "广东省" },
                { "id": "2", "name": "北京省" },
                { "id": "3", "name": "上海省" },
	 			{ "id": "4", "name": "河北省" },
	 			{ "id": "5", "name": "广西省" },
	 			{ "id": "6", "name": "云南省" }
	 			
         ];
var cityObj = {
	"1": ["101#广州", "102#清远", "103#佛山"],
	"2": ["201#北京市"],
	"3": ["301#虹口", "302#浦东", "303#徐汇"],
	"4": ["401#石家庄", "402#保定", "403#沧州"],
	"5": ["501#南宁", "502#百色", "503#桂林"],
	"6": ["601#昆明", "602#丽江", "603#西双版纳"]
	
};
var counObj = {
	"101": ["天河区", "越秀区", "花都区", "海珠区"],
	"102": ["英德", "清城", "清新", "通州区"],
	"103": ["南海", "高明"],
	"201": ["南市区", "北市区"],
	"301": ["陆家嘴", "长寿路"],
	"302": ["金桥", "张江"],
	"303": ["徐家汇"],
	"401": ["桥东", "桥西","无极县"],
	"402": ["莲池", "满城","徐水汇"],
	"403": ["运河", "沧县"],
	"501": ["兴宁", "江南", "良庆", "青秀"],
	"502": ["百色"],
	"503": ["临桂", "秀峰", "叠彩", "灵川"],
	"601": ["西山", "盘龙", "官渡", "安宁"],
	"602": ["古城","玉龙纳西族自治县"],
	"603": ["西双版纳自治州"]
};
//渲染省份数据
var proStr = "<option>--请选择省份--</option>";
for(var i = 0; i < proArr.length; i++) {
	var proJson = proArr[i];
	proStr += "<option value=" + proJson["id"] + ">" + proJson["name"] + "</option>";
}
$('#prov').html(proStr);
//渲染市数据,省份内容改变
$('#prov').change(function() {
	var cityStr = "<option>--请选择市--</option>"
	var provVal = $(this).val(); //保存选中的省份value值
	var cityArr = cityObj[provVal]; //获取对应的市的json数据
	for(var i = 0; i < cityArr.length; i++) {
		var cityData = cityArr[i].split("#"); //通过#将字符串切为数组
		cityStr += "<option value=" + cityData[0] + ">" + cityData[1] + "</option>";
	}
	$('#city').html(cityStr);
	$('#city').prop('disabled', false);
})
$('#city').change(function() {
	var countryStr = "<option>--请选择区--</option>"
	var cityVal = $(this).val(); //保存选中的市份value值
	var countryArr = counObj[cityVal]; //获取对应的区的json数据
	for(var i = 0; i < countryArr.length; i++) {
		var countryData = countryArr[i]
		countryStr += "<option>" + countryData + "</option>";
	}
	$('#country').html(countryStr);
	$('#country').prop('disabled', false);
})














