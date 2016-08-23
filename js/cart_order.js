// 用户收货地址信息
var buyerInfo = [];

var buyerInfo = [
    {
	"id": 1,
	"isDefault": true,
	"province": "北京",
	"city": "北京市",
	"town": "朝阳区",
	"location": "XX街XX号",
	"name": "张三",
	"telnoPre": "0000",
	"telnoSuf": "66666666",
	"mobile": "13512345678"
    },
    {
	"id": 2,
	"isDefault": false,
	"province": "河南",
	"city": "郑州市",
	"town": "二七区",
	"location": "YY街YY号",
	"name": "李四",
	"telnoPre": "1111",
	"telnoSuf": "88888888",
	"mobile": "13598765432"
    },
    {
	"id": 3,
	"isDefault": false,
	"province": "河南",
	"city": "开封市",
	"town": "兰考县",
	"location": "ZZ街ZZ号",
	"name": "王五",
	"telnoPre": "2222",
	"telnoSuf": "77777777",
	"mobile": "13512345678"
    }
];


$(function(){
    // 调整弹出框的位置居中
    $(".place-info-popup").css({
	"top": ($(window).height() - $(".place-info-popup").height())/2,
	"left":  ($(window).width() - $(".place-info-popup").width())/2
    });

    var placeShowAll = false; // 标识是否显示全部的地址信息

    // 页面初始化，根据地址信息来确定显示的内容
    function init(){
	if(buyerInfo.length == 0){
	    $("#place-list").hide();
	    $(".place-info .new-place").show();
	    $(".new-place-btn").hide();
	}else{
	    $("#place-list .place-list").empty();
	    $("#place-list").show();
	    $(".new-place-btn").show();
	    // 如果地址信息多于两条，那么 placeShowAll 为 true 时显示全部，为 false 显示2条
	    // 如果地址信息不多于两条，那么无论 placeShowAll 为true还是false都全部显示
	    // var num = (placeShowAll) ? buyerInfo.length : 2;
	    var num = (buyerInfo.length > 2)? (placeShowAll? buyerInfo.length:2):(buyerInfo.length);
	    $(".place-list").css({
		"height" : 52 * num
	    });
	    $(".place-info .new-place").hide();
	    for(var i = 0; i < buyerInfo.length; i++) {
		addPlaceItem(buyerInfo[i]);
	    }
	}

	if(!placeShowAll){
	    $(".show-more").show();
	    $(".hide-more").hide();
	}else{
	    $(".show-more").hide();
	    $(".hide-more").show();
	}
    }
    init();

    // 如果buyerInfo 无任何数据，那么会显示增加新地址的元素，其中的点击事件
    $(document).on("click",".place-info .new-place .place-btn",function(){
	var placeObj = new Object();
	placeObj.id = buyerInfo.length + 1;
	placeObj.isDefault = true;
	placeObj.name = $(".place-info .new-place .buyer-name-text").val();
	placeObj.province = $(".place-info .new-place .province span").text();
	placeObj.city = $(".place-info .new-place .city span").text();
	placeObj.town = $(".place-info .new-place .town span").text();
	placeObj.location = $(".place-info .new-place .buyer-address-text").val();
	placeObj.mobile = $(".place-info .new-place .buyer-mobile-text").val();
	placeObj.telnoPre = $(".place-info .new-place .telno-prefix").val();
	buyerInfo.push(placeObj);
	console.log(buyerInfo);
	init();
	popup("保存成功");
    });

    // 向地址列表里添加一条数据
    function addPlaceItem(obj){
	var li = $("<li index='"+obj.id+"'></li>");
	li.append($("<div class='che'><div></div></div>"));
	li.append($("<div class='username'>"+obj.name+"</div>"));
	li.append($("<div class='province'>"+obj.province+"</div>"));
	li.append($("<div class='city'>"+obj.city+"</div>"));
	li.append($("<div class='location'>"+obj.town+"</div>"));
	li.append($("<div class='street'>"+obj.location+"</div>"));
	li.append($("<div class='telphone'>"+obj.mobile+"</div>"));
	li.append($("<div class='delete'>删除</div>"));
	li.append($("<div class='modify'>修改</div>"));
	if(obj.isDefault){
	    li.append($("<div class='default'>默认地址</div>"));
	    li.find(".che").attr("checked","checked");
	}else{
	    li.append($("<div class='set-default'>设为默认地址</div>"));
	}
	$("#place-list .place-list").append(li);
    }

    // 增加新的地址信息/修改原有的地址信息
    $(document).on("click",".new-place-btn",function(){// 新地址
	fillInfo(-1);
	$(".full").show();
	$(".place-info-popup").show();
    });
    $(document).on("click",".place-info .place-list li .modify",function(){ // 原地址修改按钮
	var index = $(this).parent().attr("index");
	fillInfo(parseInt(index));
	$(".full").show();
	$(".place-info-popup").show();
    });
    function fillInfo(index){ // 向新弹出的页面中填充数据
	// console.log(index);
	var hasContent = false; // 定义新页面填充的数据是否为空，因为存在修改原地址这种可能
	if(index == -1){
	    hasContent = false;
	}
	var itemIndex = -1;
	for(var i = 0; i < buyerInfo.length; i++) {
	    // console.log("---"+buyerInfo[i].id +"---"+parseInt(index)+"---");
	    //  console.log(typeof(buyerInfo[i].id));
	    // console.log(typeof(parseInt(index)));
	    // console.log(buyerInfo[i].id == parseInt(index));
	    // console.log(buyerInfo[i].id == 1);
	    // console.log(parseInt(index) == 1);
	    // console.log(parseInt(index) == "1");
	    if(buyerInfo[i].id == parseInt(index)){
		hasContent = true;
		itemIndex = i;
		break;
	    }
	}
	// console.log(hasContent);
	var o = hasContent ? buyerInfo[itemIndex] : "";
	var div = $(".place-info-popup .new-place");
	div.attr("index",index);
	div.find(".buyer-name-text").val((hasContent? o.name : ""));
	if(hasContent){
	    div.find(".location-box .province ul li").each(function(){
		if($(this).html() == o.province){
		    $(this).attr("sel","sel");
		}else{
		    $(this).removeAttr("sel");
		}
	    });
	    div.find(".location-box .city ul li").each(function(){
		if($(this).html() == o.city){
		    $(this).attr("sel","sel");
		}else{
		    $(this).removeAttr("sel");
		}
	    });
	    div.find(".location-box .town ul li").each(function(){
		if($(this).html() == o.town){
		    $(this).attr("sel","sel");
		}else{
		    $(this).removeAttr("sel");
		}
	    });
	}
	div.find(".location-box .province span").html(hasContent?o.province:"请选择省份");
	div.find(".location-box .city span").html(hasContent?o.city:"请选择城市");
	div.find(".location-box .town span").html(hasContent?o.town:"请选择地区");
	div.find(".buyer-address-text").val(hasContent?o.location:"");
	div.find(".buyer-mobile-text").val(hasContent?o.mobile:"");
	div.find(".telno-prefix").val(hasContent?o.telnoPre:"");
	div.find(".telno-suffix").val(hasContent?o.telnoSuf:"");
    }
    $(document).on("click",".full",function(){
	$(this).hide();
	$(".place-info-popup").hide();
    });
    $(document).on("click",".place-info-popup .close-btn",function(){
	$(".full").hide();
	$(".place-info-popup").hide();
    });
    $(document).on("click",".place-info-popup .place-popup-btn",function(){
	var indexStr = $(this).parent().parent().attr("index");
	var index = parseInt(indexStr);
	var placeObj = new Object();
	placeObj.id = buyerInfo.length + 1;
	placeObj.isDefault = false;
	placeObj.name = $(".place-info-popup .buyer-name-text").val();
	placeObj.province = $(".place-info-popup .province span").text();
	placeObj.city = $(".place-info-popup .city span").text();
	placeObj.town = $(".place-info-popup .town span").text();
	placeObj.location = $(".place-info-popup .buyer-address-text").val();
	placeObj.mobile = $(".place-info-popup .buyer-mobile-text").val();
	placeObj.telnoPre = $(".place-info-popup .telno-prefix").val();
	placeObj.telnoSuf = $(".place-info-popup .telno-suffix").val();
	// addPlaceItem(placeObj);
	// console.log(buyerInfo);
	if(indexStr != "-1"){
	    for(var i = 0; i < buyerInfo.length; i++) {
		if(buyerInfo[i].id == index){
		    placeObj.isDefault = buyerInfo[i].isDefault;
		    buyerInfo.splice(i,1);
		    break;
		}
	    }
	}
	buyerInfo.push(placeObj);
	// console.log(buyerInfo);
	init();
	popup("保存成功");
	$(".full").hide();
	$(".place-info-popup").hide();
    });

    // 选择一条地址信息
    $(document).on("click",".place-list .che",function(){
	$(".place-list .che").removeAttr("checked");
	$(this).attr("checked","checked");
    });

    // 设置为默认地址
    $(document).on("click",".place-list .set-default",function(){
	$(".place-list .default").attr("class","set-default").html("设为默认地址");
	$(this).attr("class","default").html("默认地址");
	var index = parseInt($(this).parent().attr("index"));
	for(var i = 0; i < buyerInfo.length; i++) {
	    if(buyerInfo[i].id == index){
		buyerInfo[i].isDefault = true;
	    }else{
		buyerInfo[i].isDefault = false;
	    }
	}
    });

    // 删除一条地址信息
    // 需要判断地址列表是否为空，以及如果默认地址被删除那么应当指定第一条地址为默认地址
    $(document).on("click",".place-list .delete",function(){
	if(confirm("确认要删除该地址?")){
	    $(this).parent().remove();
	    var index = parseInt($(this).parent().attr("index"));
	    var isPlaceDefault = false;
	    for(var i = 0; i < buyerInfo.length; i++) {
		if(buyerInfo[i].id == index){
		    isPlaceDefault = buyerInfo[i].isDefault;
		    buyerInfo.splice(i,1);
		    break;
		}
	    }
	    if(buyerInfo.length != 0 && isPlaceDefault){
		buyerInfo[0].isDefault = true;
	    }
	    init();
	}
    });

    // 修改一条地址信息
    $(document).on("click",".place-list .modify",function(){
	$(".full").show();
	$(".place-info-popup").show();
    });

    // 显示/隐藏更多的地址信息
    $(document).on("click",".show-more",function(){
	// $(this).hide();
	// $(".hide-more").show();
	// $(".place-list").css({
	//     "height" : 52 * buyerInfo.length
	// });
	placeShowAll = true;
	init();
    });
    $(document).on("click",".hide-more",function(){
	// $(this).hide();
	// $(".show-more").show();
	// var num = (buyerInfo.length <=2)? buyerInfo.length : 2;
	// $(".place-list").css({
	//     "height" : 52 * num
	// });
	placeShowAll = false;
	init();
    });

    /********* 地理信息的三级联动 *********/
    // 数据来自 public.js 中的 placeInfo
    // 初始化省份的下拉列表信息
    for(var key in placeInfo){
	var li = $("<li>"+key+"</li>");
	$(".location-box .province-list").append(li);
    }
    // 点击省份的下拉框
    $(document).on("click",".location-box .province",function(e){
	e.stopPropagation();
	$(this).find(".province-list").show();
    });
    // 点击省份中的每一项
    $(document).on("click",".location-box .province-list li",function(e){
	e.stopPropagation();
	// 选中信息显示在下拉框中，下拉列表消失
	$(this).parent().find("li[sel='sel']").removeAttr("sel");
	$(this).attr("sel","sel");
	$(this).parent().hide();
	var province = $(this).html();
	$(this).parent().parent().find("span").html(province).attr("value",province);
	// 生成相对应的城市信息
	var locationBox = $(this).parent().parent().parent();
	locationBox.find(".city span").html("请选择城市");
	locationBox.find(".town span").html("请选择地区");
	var cityListUl = locationBox.find(".city-list");
	cityListUl.empty();
	cityListUl.append($("<li sel='sel'>请选择城市</li>"));
	var townListUl = locationBox.find(".town-list");
	townListUl.empty();
	townListUl.append($("<li sel='sel'>请选择地区</li>"));
	for(var cityName in  placeInfo[province]){
	    cityListUl.append($("<li>"+cityName+"</li>"));
	}
    });
    // 点击城市的下拉框
    $(document).on("click",".location-box .city",function(e){
	e.stopPropagation();
	$(this).find(".city-list").show();
    });
    // 点击城市中的每一项
    $(document).on("click",".location-box .city-list li",function(e){
	e.stopPropagation();
	// 选中信息显示在下拉框中，下拉列表消失
	$(this).parent().find("li[sel='sel']").removeAttr("sel");
	$(this).attr("sel","sel");
	$(this).parent().hide();
	var city = $(this).html();
	$(this).parent().parent().find("span").html(city).attr("value",city);
	// 生成对应的地区信息
	var locationBox = $(this).parent().parent().parent();
	locationBox.find(".town span").html("请选择地区");
	var townListUl = locationBox.find(".town-list");
	townListUl.empty();
	townListUl.append($("<li sel='sel'>请选择地区</li>"));
	var province = locationBox.find(".province span").html();
	console.log(province);
	console.log(placeInfo[province]);
	var townArr = placeInfo[province][city];
	for(var i = 0; i < townArr.length; i++) {
	    townListUl.append($("<li>"+townArr[i]+"</li>"));
	}
    });
    // 点击地区的下拉框
    $(document).on("click",".location-box .town",function(e){
	e.stopPropagation();
	$(this).find(".town-list").show();
    });
    // 点击地区中的每一项
    $(document).on("click",".location-box .town-list li",function(e){
	e.stopPropagation();
	// 选中信息显示在下拉框中，下拉列表消失
	$(this).parent().find("li[sel='sel']").removeAttr("sel");
	$(this).attr("sel","sel");
	$(this).parent().hide();
	var town = $(this).html();
	$(this).parent().parent().find("span").html(town).attr("value",town);
    });


    $(document).on("click",".bill-type li:nth-child(n+2) .item",function(i,v){
	$(this).parent().parent().next().show();
    });
    $(document).on("click",".bill-type li:nth-child(1) .item",function(i,v){
	$(this).parent().parent().next().hide();
    });

    // 加号点击事件，命名出错了。。。
    $(document).on("click",".minusOne",function(){
	var numDiv = $(this).parent().find("span");
	var num =parseInt(numDiv.html());
	num++;
	numDiv.html(num);
	calPrice();
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
	calPrice();
    });

    //输入使用的积分
    $(document).on("keyup","#discount-use-num",function(){
	var truePrice = parseInt($(".good-total-price").html());
	// console.log($(this).val());
	var discount = parseInt($(".discount-num").text());
	var discountUse = parseInt($(this).val());
	$(".money-less").html(discountUse);
	if(discountUse > discount){
	    popup("过分了啊，只有"+discount+"，想用"+discountUse+"?");
	    $(this).val("");
	    $(".money-less").html(0);
	    $(".true-price-num").html(truePrice);
	    return;
	}
	$(".true-price-num").html(truePrice - discountUse);
	$(".discount-get-num").html(Math.ceil((truePrice - discountUse)/10));
    });

    // 跳转至下一页面
    $(document).on("click",".submit-btn",function(){
	location.href="cart_pay.html";
    });

    calPrice();
});

// 计算各个地方的总价钱
function calPrice(){
    var totalPrice = 0; // 全部商品的总价格
    $(".single-item").each(function(){
	var itemTotalPrice = 0; // 某一家的商品的总价格
	$(this).find(".item-content").each(function(){
	    var singlePrice = parseInt($(this).find(".single-price span").text());
	    var amount = parseInt($(this).find(".amount span").text());
	    var price = amount * singlePrice; // 某一家的某一项商品的价格
	    $(this).find(".total-price span").html(price.toFixed(2));
	    itemTotalPrice += price;
	});
	$(this).find(".good-price span span").html(itemTotalPrice.toFixed(2));
	var fee = parseFloat($(this).find(".trans-fee span span").html());
	// console.log(itemTotalPrice);
	// console.log(fee);
	totalPrice += (itemTotalPrice+fee);
	$(this).find(".total-price span span").html((itemTotalPrice + fee ).toFixed(2));
    });
    $(".good-total-price").html(totalPrice.toFixed(2));
    $(".true-price-num").html(totalPrice.toFixed(2));
}
