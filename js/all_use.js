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
		var ls = "<li><a href=https://www.baidu.com/s?wd=" + data.s[i] + ">" + data.s[i] + "</a></li>";
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
//
$(".change_center ul li").not(".five").mousemove(function() {
	$(".change_center ul li").not(".five").css("background-color", "white");
	$(".change_center ul li").not(".five").css("color", "black");
	$(this).css("background-color", "rgb(0, 141, 225)");
	$(this).css("color", "white");
});

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
