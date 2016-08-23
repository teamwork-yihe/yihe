$(function(){
    $(".waiting").css({
	"top": ($(window).height() - $(".waiting").height())/2,
	"left": ($(window).width() - $(".waiting").width())/2
    });

    $(document).on("click",".pay-btn",function(){
	$(".full").show();
	$(".waiting").show();
    });

    $(document).on("click",".full",function(){
	$(this).hide();
	$(".waiting").hide();
    });
});
