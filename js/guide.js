$(function(){
    // $(".place-list .hot ul").setTemplateElement("hot-tpl").processTemplate(places.hot);
    // $(".place-list .cities").setTemplateElement("cities-tpl").processTemplate(places.citylist);

    window.localStorage.yihe_cityname = "郑州";
    // 城市下拉列表出现
    $(document).on("click",[".place-input",".place-name"],function(){
	$(".up-arrow").show();
	$(".place-list").show();
    });

    // 点击切换城市
    $(document).on("click",".cities .city",function(){
	var cityName = $(this).html();
	$(".place-name").html(cityName);
	$(".place-btn").attr("val",cityName);
	window.localStorage.yihe_cityname = cityName;
    });
    $(document).on("click",".hot li",function(){
	var cityName = $(this).html();
	$(".place-name").html(cityName);
	$(".place-btn").attr("val",cityName);
	window.localStorage.yihe_cityname = cityName;
    });

    // 跳转登陆页面
    $(document).on("click",".login",function(){
	location.href = "login.html?city="+$(".place-btn").attr("val");
    });

    // 跳转注册页面
    $(document).on("click",".register",function(){
	location.href = "register.html";
    });

    // test
    // popup("这是什么鬼啊aaaaaaaaaaaaaaa");
});



$(function(){
    for(var i = 0; i < places.hot.length; i++) {
	var li = $("<li>"+places.hot[i]+"</li>");
	$(".place-list .hot ul").append(li);
    }
    for(var i = 0; i < places.citylist.length; i++) {
	var firstLetter = places.citylist[i].firstletter;
	var cities = places.citylist[i].cities;
	var li = $("<li></li>");
	var fl = $("<div>"+firstLetter+"</div>");
	fl.attr("class","first-letter");
	li.append(fl);
	for(var j = 0; j < cities.length; j++) {
	    var ct = $("<div>"+cities[j].name+"</div>");
	    ct.attr("class","city");
	    li.append(ct);
	}
	$(".place-list .cities").append(li);
    }
    $(document).on("click",".place-input",function(){
	$(".up-arrow").show();
	$(".place-list").show();
    });
});
