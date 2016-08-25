//nav
var lis = 0;
$("#use_message ul li").mousemove(function() {
	lis = $("#use_message ul li").index(this);
	$("#use_message ul li a").css("color", "#666");
	$("#use_message ul li a").eq(lis).css("color", "orange");
}).mouseout(function() {
	$("#use_message ul li a").css("color", "#666");
});
//按钮保持原样及移入移出
$(".search_up input").eq(1).attr("abc", "xyz");
$(".search_up input").click(function() {
	$(".search_up input").attr("abc", "xyz");
	$(this).removeAttr("abc", "xyz");
});

$(".search_footer div a").mousemove(function() {
	$(".search_footer div a").css("color", "black");
	$(this).css("color", "rgb(255, 108, 0)");

})

$(".search_nav>div>a").eq(5).attr("change", "changes");
$(".search_nav div a").not(".search_f").mouseenter(function() {
		if($(this).attr("change") == "undefined" || typeof($(this).attr("change")) == "undefined") {
			$(this).css("color", "rgb(255, 108, 0)");
			console.log("11111");
		}
	}).mouseleave(function() {
		if($(this).attr("change") == "undefined" || typeof($(this).attr("change")) == "undefined") {
			$(this).css("color", "black");
		}
	}).click(function() {
		$(".search_nav div a").not(".search_f").css("color", "#666");
		$(this).css("color", "rgb(255, 108, 0)");
		$(".search_nav div a").not(".search_f").removeAttr("change", "changes");
		$(this).attr("change", "changes");
		$(".search_nav div a").filter(".search_f").css("color", "white");
	})
	//搜索内容判断显示
function abc(data) {
	$("#search_ul").html("");
	for(var i = 0; i < data.s.length; i++) {
		//var ls = "<li><a href=https://www.baidu.com/s?wd=" + data.s[i] + ">" + data.s[i] + "</a></li>";
		var ls = "<li><a href=hangye08.html?wd=" + data.s[i] + ">" + data.s[i] + "</a></li>";
		if($("#search_ul li").length >= 6) {
			$("#search_ul").val($("#search_ul li").slice(0, 6));
			return;
		}
		$("#search_ul").append(ls);

	}
}
$('#inp').bind('input propertychange', function() { 
	var script = document.createElement('script');
	script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + $("#inp").val() + "&cb=abc";
	document.head.appendChild(script);
	document.head.removeChild(script);
});
//键盘事件 回车 上下键 清除
var keys = 0;
$("#inp").keydown(function(event) {
	//	console.log(event.which);
	if(event.which == 13) {
		document.location = "hangye08.html";
	}
	if(event.which == 38) {
		keys--;
		if(keys <= 0) {
			keys = 0;
		}
		$(".inp_left ul li").css("background-color", "azure");
		$(".inp_left ul li").eq(keys).css("background-color", "gainsboro");
		$("#inp").val($(".inp_left ul li").eq(keys).text());
	}
	if(event.which == 40) {
		keys++;
		if(keys >= 5) {
			keys = 5;
		}
		$(".inp_left ul li").css("background-color", "azure");
		$(".inp_left ul li").eq(keys).css("background-color", "gainsboro");
		$("#inp").val($(".inp_left ul li").eq(keys).text());
	}
});

//轮播
var len = $(".num > li").length;
var index = 0; //图片序号
var adTimer;
$(".num li").mouseover(function() {
	index = $(".num li").index(this); //获取鼠标悬浮 li 的index
	showImg(index);
}).eq(0).mouseover();
//滑入停止动画，滑出开始动画.
$('#scrollPics').hover(function() {
	clearInterval(adTimer);
}, function() {
	adTimer = setInterval(function() {
		showImg(index)
		index++;
		if(index == len) { //最后一张图片之后，转到第一张
			index = 0;
		}
	}, 3000);
}).trigger("mouseleave");

function showImg(index) {
	var adHeight = $("#scrollPics>ul>li:first").height();
	$(".slider").stop(true, false).animate({
		"marginTop": -adHeight * index - 20 + "px" //改变 marginTop 属性的值达到轮播的效果
	}, 1000);
	$(".num li").removeClass("on")
		.eq(index).addClass("on");
}
//分页点击及效果
var click_is = 0;
$(".change_center ul li").click(function() {
//	$(".change_center ul li").css({"background-color":"white","color":"black"});
//	$(this).css({"background-color":"rgb(0, 141, 225)","color":"white"});
	
	console.log(click_is);
	click_is =$(".change_center ul li").index(this);
	var which_is = $(".change_center ul li");
	if (click_is==0) {		
		if (which_is.eq(1).text()!=1) {
			which_is.eq(1).text(parseInt(which_is.eq(1).text())-1);
			which_is.eq(2).text(parseInt(which_is.eq(2).text())-1);
			which_is.eq(3).text(parseInt(which_is.eq(3).text())-1);
			which_is.eq(7).css({"background-color":"white","color":"black"});
		}
	}	
	if (click_is==1) {
		if ($(this).text()!=1) {
			which_is.eq(1).text(parseInt(which_is.eq(1).text())-1);
			which_is.eq(2).text(parseInt(which_is.eq(2).text())-1);
			which_is.eq(3).text(parseInt(which_is.eq(3).text())-1);
			which_is.css({"background-color":"white","color":"black"});
		}else{
			which_is.css({"background-color":"white","color":"black"});
		}
	}
	if (click_is==2) {
		if (which_is.eq(1).text()=="...") {
			which_is.eq(1).empty();
			which_is.eq(1).text(53);
			which_is.eq(2).text(54);
			which_is.eq(3).text(55);
			which_is.eq(4).text("...");
			which_is.css({"background-color":"white","color":"black"});
		}else {
			which_is.css({"background-color":"white","color":"black"});		
		}
	}
	if (click_is==3) {
		if (which_is.eq(3).text()==55) {
			which_is.eq(1).empty();
			which_is.eq(1).text("...");
			which_is.eq(2).text(55);
			which_is.eq(3).text(56);
			which_is.eq(4).text(57);
			which_is.css({"background-color":"white","color":"black"});
		}else if (which_is.eq(3).text()>55){
			which_is.css({"background-color":"white","color":"black"});
		}else if (which_is.eq(3).text()<55){
			which_is.eq(1).text(parseInt(which_is.eq(1).text())+1);
			which_is.eq(2).text(parseInt(which_is.eq(2).text())+1);
			which_is.eq(3).text(parseInt(which_is.eq(3).text())+1);
			which_is.css({"background-color":"white","color":"black"});
		}
	}
	if (click_is==4||click_is==5||click_is==6) {
			which_is.css({"background-color":"white","color":"black"});
	}
	if (click_is==7) {		
		if (which_is.eq(3).text()<=54) {
			which_is.eq(1).text(parseInt(which_is.eq(1).text())+1);
			which_is.eq(2).text(parseInt(which_is.eq(2).text())+1);
			which_is.eq(3).text(parseInt(which_is.eq(3).text())+1);
			which_is.eq(0).css({"background-color":"white","color":"black"});		
		}else if (which_is.eq(3).text()==55) {
			which_is.eq(1).empty();
			which_is.eq(1).text("...");
			which_is.eq(2).text(55);
			which_is.eq(3).text(56);
			which_is.eq(4).text(57);
		}
	}
		$(this).css({"background-color":"rgb(0, 141, 225)","color":"white"});
});
//调页
$("#sure").on("click",function  () {
	var which_is = $(".change_center ul li");
	which_is.css({"background-color":"white","color":"black"});
	console.log($(".changes").val());
	var num= parseInt($(".changes").val());	
		if (num<0) {
			alert("太小!看不到")
		}else if (num==1) {
			which_is.eq(1).css({"background-color":"rgb(0, 141, 225)","color":"white"});
		}else if (num==2) {
			which_is.eq(2).css({"background-color":"rgb(0, 141, 225)","color":"white"});
		}else if (num==3) {
			which_is.eq(3).css({"background-color":"rgb(0, 141, 225)","color":"white"});
		}else if (num>3&&num<=55) {
			which_is.eq(1).text(num-1);
			which_is.eq(2).text(num);
			which_is.eq(3).text(num+1);
			which_is.eq(2).css({"background-color":"rgb(0, 141, 225)","color":"white"});
		}else if (num==56) {
			which_is.eq(1).empty();
			which_is.eq(1).text("...");
			which_is.eq(2).text(55);
			which_is.eq(3).text(56);
			which_is.eq(4).text(57);
			which_is.eq(3).css({"background-color":"rgb(0, 141, 225)","color":"white"});
		}else if (num==57) {
			which_is.eq(1).empty();
			which_is.eq(1).text("...");
			which_is.eq(2).text(55);
			which_is.eq(3).text(56);
			which_is.eq(4).text(57);
			which_is.eq(4).css({"background-color":"rgb(0, 141, 225)","color":"white"});
		}else if (num==58) {
			which_is.eq(5).css({"background-color":"rgb(0, 141, 225)","color":"white"});
		}else if (num==59) {
			which_is.eq(6).css({"background-color":"rgb(0, 141, 225)","color":"white"});
		}else if (num>59) {
			alert("对不起,没那么大滴!")
		}else {
		alert("请输入数字!")
	}
})

//二级菜单
$(".search_nav div").eq(0).mouseover(function() {
		//			$(".navs").css("transform","rotate(180deg)");
		$(".search_f_nav").css("display", "block");
	}).mouseleave(function() {
		//			$(".navs").css("transform","rotate(0deg)");
		$(".search_f_nav").css("display", "none");
	})
	//三级菜单
var index = 0;
$(".search_f_nav>ul li").mousemove(function(e) {
	index = $(".search_f_nav ul li").index(this);
	//				console.log(index);
	$(".search_f_nav>ul li").eq(index).siblings().css("background-color", "black");
	$(".search_f_nav>ul li").eq(index).css("background-color", "#ec6a17");
	$(".search_f_hiddens").css("display", "block");
	$(".search_f_hiddens ul").eq(index).siblings().css("display", "none");
	$(".search_f_hiddens ul").eq(index).css("display", "block");
	e.preventDefault();
	var k = 0;
	$(".search_f_hiddens ul li").mousemove(function() {
		k = $(".search_f_hiddens ul li").index(this);
		$(this).siblings().find("a").css("color", "white");
		$(this).find("a").css("color", "#ec6a17");
	});
	$(".search_f_hiddens").mouseleave(function() {
		k = $(".search_f_hiddens ul li").index(this);
		$(".search_f_hiddens ul li").css("background-color", "black");
		$(".search_f_hiddens ul").css("display", "none");
		$(".search_f_hiddens").css("display", "none");
	});
});
$(".search_f_nav").mouseleave(function() {
	$(".search_f_nav ul li").css("background-color", "black");
	$(".search_f_hiddens").css("display", "none");
	$(".search_f_hiddens ul").css("display", "none");
})