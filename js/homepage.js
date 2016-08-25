$(function(){
	$(".search_nav>div>a").removeAttr("change");
	$(".search_nav>div>a").eq(1).attr("change", "changes");
    // 每一项的图形滑动
    $(document).on("mouseover",".common .titles li",function(i,v){
	var li = $(this);
	$(this).parent().find("li").each(function(i,v){
	    if($(v).html() == li.html()){
		li.parent().parent().find(".slide").css({
		    "left": 307 + i * 120
		});
		li.parent().parent().find(".items").hide();
		li.parent().parent().find(".items").eq(i).css({
		    "display":"inline-block"
		})
	    }
	});
    });
    // 页面滚动距离监测
    var pageTimer = setInterval(function(){
	// console.log($(window).scrollTop());
	var height = $(window).scrollTop();
	console.log(height+"--"+$("body").scrollTop());
	if(height > 1200){
	    $(".left-slider").css("display","block");
	}else{
	    $(".left-slider").css("display","none");
	}
    },200);
    // 建议反馈
    $(".response-li").click(function  () {
	$(window).scrollTop(0);
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
});
