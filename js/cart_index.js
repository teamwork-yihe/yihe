// 计算总钱数以及各家商品的总钱数
function totalPrice(){
    // 如果某一家的商品被删除完了，那么就把这家的全部显示内容都清除掉
    // 计算每家的总钱数
    $(".good-item").each(function(){
	if($(this).find(".item-content").length == 0){
	    $(this).remove();
	    return;
	}
	var goodTotal = 0;
	$(this).find(".item-content").each(function(){
	    if($(this).find(".che").attr("checked") == "checked"){
		goodTotal += parseFloat($(this).find(".total-price span").html());
	    }
	});
	$(this).find(".price-num span").html(goodTotal.toFixed(2));
    });
    if($(".good-item").length == 0){
	$(".cart-empty").show();
	$(".cart-title").hide();
	$(".good-list").hide();
	$(".operate-box").hide();
    }
    // 计算总钱数
    var total = 0;
    $(".item-content").each(function(){
	if($(this).find(".che").attr("checked") == "checked"){
	    var temp = parseFloat($(this).find(".total-price span").html());
	    total += temp;
	}
    });
    $(".good-totalprice span span").html(total.toFixed(2));
}

$(function(){
    // 每一项商品勾选事件
    $(document).on("click",".item-content .che",function(){
	// 先判断是否所有的商品项都已勾选，从而影响该家商品是否勾选
	var goodItem = $(this).parent().parent();
	var checkedNum = 0;
	goodItem.find(".item-content .che").each(function(){
	    if($(this).attr("checked") == "checked"){
		checkedNum++;
	    }
	});
	if(checkedNum == goodItem.find(".item-content").length){
	    goodItem.find(".item-title .che").attr("checked","checked");
	}else{
	    goodItem.find(".item-title .che").removeAttr("checked");
	}
	totalPrice();
    });

    // 每一项商品删除事件
    $(document).on("click",".operate label",function(){
	// console.log("test");
	var itemName = $(this).parent().parent().find(".item-name").html();
	if(confirm("是否删除 "+itemName+" ?")){
	    $(this).parent().parent().remove();
	}
	totalPrice();
    });

    // 每一家商品勾选事件
    $(document).on("click",".item-title .che",function(){
	if($(this).attr("checked") == "checked"){
	    $(this).parent().parent().find(".item-content .che").attr("checked","checked");
	}else{
	    $(this).parent().parent().find(".item-content .che").removeAttr("checked");
	}
	totalPrice();
    });

    // 加号点击事件，命名出错了。。。
    $(document).on("click",".minusOne",function(){
	var numDiv = $(this).parent().find("span");
	var num =parseInt(numDiv.html());
	num++;
	numDiv.html(num);
	var singlePrice = parseFloat($(this).parent().parent().find(".single-price span").html());
	var price = singlePrice * num ;
	$(this).parent().parent().find(".total-price span").html(price.toFixed(2));
	totalPrice();
    });

    // 减号点击事件，命名写反啦
    $(document).on("click",".addOne",function(){
	var numDiv = $(this).parent().find("span");
	var num =parseInt(numDiv.html());
	if(num == 1){
	    return;
	}
	num--;
	numDiv.html(num);
	var singlePrice = parseFloat($(this).parent().parent().find(".single-price span").html());
	var price = singlePrice * num ;
	$(this).parent().parent().find(".total-price span").html(price.toFixed(2));
	totalPrice();
    });

    // 全局全选按钮
    $(document).on("click",".operate-box .select-all",function(){
	$(".good-list .che").attr("checked","checked");
	totalPrice();
    });

    // 批量删除按钮
    $(document).on("click",".operate-box .delete-select",function(){
	if($(".good-list .item-content .che[checked=checked]").length == 0){
	    alert("未勾选任何项目");
	    return;
	}
	if (confirm("是否删除所勾选的项？")) {
	    $(".good-list .item-content").each(function(){
		if($(this).find(".che").attr("checked") == "checked"){
		    $(this).remove();
		}
	    });
	}
	totalPrice();
    });

    // 去首页
    $(document).on("click",".cart-tip .index-btn",function(){
	location.href = "error.html";
    });

    // 去确认页面
    $(document).on("click",".operate-box .index-btn",function(){
	location.href = "cart_order.html";
    });

    totalPrice();
});
