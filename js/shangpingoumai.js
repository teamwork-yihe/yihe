//选择
$(".d_c_top input").click(function  () {
	$(this).css("border","2px solid orange");
	$(this).siblings().css("border","1px solid gainsboro");
	$(".d_c_bottom input").css("border","1px solid gainsboro");
});
$(".d_c_bottom input").click(function  () {
	$(this).css("border","2px solid orange");
	$(this).siblings().css("border","1px solid gainsboro");
});
// jiaruyihe03 加入易和 建议+++++++++++++++++++++++++++++++
$(".left_s_b").click(function  () {
	$("#d_xianshi").css("display","block");
	$("#d_tijiao").css("display","block");
})
$("#no_setting").click(function  () {
	$("#d_xianshi").css("display","none");
	$("#d_tijiao").css("display","none");
})
$('.tijiao').bind('input propertychange', function() {
	if (200-$(".tijiao").val().length<=0) {
	var news=$(".tijiao").val().substring(0,200);
	$(".tijiao").val(news);
		alert("亲：字数有点多！");
		$(".zishu").html(0+"字");
		return;
	}
	$(".zishu").html((200-$(".tijiao").val().length)+"字");
	 
}); 
//今日特价10 轮播图设置-------------------------------
var x = 0; //记录x轴的位置
function scroll() {
	x--;
	$(".lunbo_content").css("left", x);
	if(x == -1200) {
		x = 0;
	}
	return x;
}
//定时器划入停止 划出继续
var time_clock = setInterval(scroll, 10);
$(".lunbo_content img").mousemove(function  () {
	clearInterval(time_clock);
}).mouseleave(function  () {
	time_clock = setInterval(scroll, 10);
});
//上下按钮
$(".left").hover(function  () {
	clearInterval(time_clock);
}).click(function  () {
	x=x+280;
	if (x>=0) {
		x=-1200;
	}
	scroll();
}).mouseleave(function  () {
	time_clock = setInterval(scroll, 10);
});
$(".right").hover(function  () {
	clearInterval(time_clock);
}).click(function  () {
	x=x-280;
	if (x<=-1200) {
		x=0;
	}
	scroll();
}).mouseleave(function  () {
	time_clock = setInterval(scroll, 10);
})
//商品11 shangpin 11 下选框
$(".wrap_nav ul li").click(function  () {
	$(this).css({
	    "color":"#008de1",
	    "border":0,
	    "background-color":"white",
	    "border-top":"2px solid #008de1"
	});
	$(this).siblings().css({
		"color": "#323333",
	    "background-color":"rgb(239, 239, 239)",
	    "border":"1px solid gainsboro"
	})
})
//加减++++++++++++++++++++++++++++++++++++++++++++++++
var n=1;
$(".center_xuanze ul li").eq(0).click(function  () {	
	if (n<=1) {
	$(".center_xuanze ul li").eq(1).html("1");
	return;
	}
	n--;
	$(".center_xuanze ul li").eq(1).html(n);
});
$(".center_xuanze ul li").eq(2).click(function  () {
	n++;
	$(".center_xuanze ul li").eq(1).html(n);
});
//加入购物车++++++++++++++++++++++++++++++++++++++++
$(".jiage_join").click(function  () {
	$(".tanchuang").css("display","block");
	$(".tanchuang_kuang").css("display","block");
});
$(".go_buy").click(function  () {
	$(".tanchuang").css("display","none");
	$(".tanchuang_kuang").css("display","none");
})
