$(function(){
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


});
