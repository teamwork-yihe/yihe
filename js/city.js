$(function(){
    console.log(document.referrer);

    // 添加最近访问的城市
    var recentCities = places.recent;
    for(var i = 0; i < recentCities.length; i++) {
	var div = $("<div class='rec-city'>"+recentCities[i]+"</div>");
	$(".city-box .recent").append(div);
    }
    // 添加热门城市
    var hotCities = places.hot;
    for(var i = 0; i < hotCities.length; i++) {
	var div = $("<div class='hot-city'>"+hotCities[i]+"</div>");
	$(".city-box .hot").append(div);
    }
    // 添加城市列表
    var cityList = places.citylist;
    for(var i = 0; i < cityList.length; i++) {
	var cityItem = cityList[i];
	var li = $("<li></li>");
	var firstLetter = $("<div class='first-letter'>"+cityItem.firstletter+"</div>");
	var cities = $("<div class='cities'></div>");
	for(var j = 0; j < cityItem.cities.length; j++) {
	    var city = $("<div class='city'>"+cityItem.cities[j].name+"</div>");
	    cities.append(city);
	}
	li.append(firstLetter);
	li.append(cities);
	$(".city-box .city-list").append(li);
    }
    // 显示当前城市
    function setCurrentCity(){
	var currentCity = localStorage.getItem("yihe_cityname");
	if(currentCity == "" || currentCity == null){
	    $(".city-box .cur-city").html("");
	}else{
	    $(".city-box .cur-city").html(currentCity);
	}
    }
    setCurrentCity();

    $(document).on("click",".city",function(){
	localStorage.setItem("yihe_cityname",$(this).html());
	setCurrentCity();
	location.href = document.referrer;
    });

    $(document).on("click",".hot-city",function(){
	localStorage.setItem("yihe_cityname",$(this).html());
	setCurrentCity();
	location.href = document.referrer;
    });

    $(document).on("click",".rec-city",function(){
	localStorage.setItem("yihe_cityname",$(this).html());
	setCurrentCity();
	location.href = document.referrer;
    });

});
