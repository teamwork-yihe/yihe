// 校验手机号合法性的正则表达式
var telReg = /^1[3-8][0-9]{9}$/;
// 校验密码长度的正则表达式
var passReg = /^\w{6,20}$/;
// var test = "abcd987";
// console.log(passReg.test(test));

var charArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// 定义登陆用的用户信息
var userInfo = [
    {
	"username": "13512345678",
	"password": "abcdefg"
    }
];

// 定义登陆用的商家信息
var sellerInfo = [
    {
	"username": "13612345678",
	"password": "abcdefg"
    }
];

// 城市列表
var places = {
    "hot": [
	"石家庄",
	'北京'
    ],
    "recent":[
	"郑州",
	"北京"
    ],
    "citylist":[
	{
	    'firstletter': 'A',
	    'cities':[
		{"name": "鞍山"},
		{"name": "安阳"},
		{"name": "阿拉善"},
		{"name": "安庆"}
	    ]
	},
	{
	    'firstletter': 'B',
	    'cities':[
		{"name": "北京"},
		{"name": "保定"},
		{"name": '包头'},
		{"name": '巴彦卓尔'},
		{"name": '本溪'},
		{"name": '白山'},
		{"name": '白城'},
		{"name": '蚌埠'},
		{"name": '滨州'},
		{"name": '北海'},
		{"name": '百色'},
		{"name": '毕节'},
		{"name": '保山'},
		{"name": '宝鸡'},
		{"name": '白银'},
		{"name": '亳州'},
		{"name": '博尔塔拉蒙古'},
		{"name": '巴音郭楞蒙古'},
		{"name": '保亭'},
		{"name": '白沙'},
		{"name": '北碚'},
		{"name": '璧山'}
	    ]
	},
	{
	    'firstletter': 'C',
	    'cities':[
		{"name": '长春'}
	    ]
	},
	{
	    'firstletter': 'D',
	    'cities':[
		{"name": '丹东'},
		{"name": '大连'}
	    ]
	},
	{
	    'firstletter': 'E',
	    'cities':[
		{"name":"鄂尔多斯"},
		{"name":"鄂州"},
		{"name":"恩施"}
	    ]
	},
	{
	    'firstletter': 'F',
	    'cities':[
		{"name": '抚顺'}
	    ]
	},
	{
	    'firstletter': 'H',
	    'cities':[
		{"name": '荷泽'},
		{"name": '呼和浩特'},
		{"name": '邯郸'},
		{"name": '衡水'}
	    ]
	},
	{
	    'firstletter': 'J',
	    'cities':[
		{"name": '锦州'},
		{"name": '焦作'},
		{"name": '济南'}
	    ]
	},
	{
	    'firstletter': 'K',
	    'cities':[
		{"name": '开封'}
	    ]
	},
	{
	    'firstletter': 'L',
	    'cities':[
		{"name": '洛阳'}
	    ]
	}
    ]
};

// 定义三级联动的地理信息
var placeInfo = {
    "北京":{
	"北京市":[
	    "东城区",
	    "西城区",
	    "朝阳区",
	    "海淀区"
	]
    },
    "上海":{
	"上海市":[
	    "黄浦区",
	    "徐汇区",
	    "静安区"
	]
    },
    "安徽":{
	"合肥市":[
	    "瑶海区",
	    "肥东县",
	    "肥西县"
	],
	"安庆市":[
	    "迎江区",
	    "大观区"
	]
    },
    "河南":{
	"郑州市":[
	    "中原区",
	    "二七区",
	    "金水区"
	],
	"开封市":[
	    "龙亭区",
	    "杞县",
	    "兰考县"
	],
	"洛阳市":[
	    "老城区",
	    "西工区",
	    "吉利区"
	]
    }
}


/**** 自定义 radiobox 的单击选中事件 ****/
$(document).on("click",".rad",function(){
    var name = $(this).attr("name");
    $(document).find(".rad[name='"+name+"']").removeAttr("checked");
    $(this).attr("checked","checked");
});

/**** 自定义 checkbox 的单击选中事件 ****/
$(document).on("click",".che",function(){
    if($(this).attr("checked") == "checked"){
	$(this).removeAttr("checked");
    }else{
	$(this).attr("checked","checked");
    }
});

// 获取url中的参数
function getParam(url, paraName){
    if(url.indexOf("?") == -1 || url.indexOf(paraName) == -1){
	return "";
    }
    var paraArr = url.slice(url.indexOf("?")+1).split("&");
    var obj = new Object();
    for(var i = 0; i < paraArr.length; i++) {
	var key = paraArr[i].split("=")[0];
	if(key === paraName){
	    return paraArr[i].split("=")[1];
	}
    }
}
// test
// var url = "abc?a=1&b=2";
// console.log(getParam(url,"a"));

// 返回随机字符串
function randomString(length){
    var result = "";
    for(var i = 0; i < length; i++) {
	result += charArr[randomNum(0,charArr.length - 1)];
    }
    return result;
}

// 返回随机数
function randomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 生成全局弹出信息
function popup(str){
    var info = $("<div>"+str+"</div>");
    info.attr("class","public-info");
    info.prependTo($("body"));
    info.css({
	"top": $(window).height() / 2,
	"left": ($(window).width() - info.width()) /2
    });
    info.animate({
	"opacity": 0
    },3000,function(){
	info.remove();
    });
}

$(function(){
    /********* 定义全局导航栏上的事件  *********/
    // 页面左上角城市信息显示，全局针对 .city-name 元素
    $(".city-name").html(localStorage.getItem('yihe_cityname'));
    $(document).on("click",".city-name",function(){
	location.href = "city.html";
    });
    // 页面上用户信息显示判断
    var usertelno = localStorage.getItem("yihe_usertelno");
    // console.log(usertelno);
    if(usertelno == "" || usertelno == null){
	$(".user-info").hide();
	$(".register-login").show();
	$(".login-out").hide();
    }else{
	$(".user-info").show();
	$(".user-info a").html(usertelno);
	$(".register-login").hide();
	$("login-out").show();
    }
    // 用户退出按钮
    $(document).on("click",".login-out a",function(){
	localStorage.removeItem("yihe_usertelno");
	location.href = "homepage.html";
    });
    // 我的订单
    $(document).on("click",".my-news",function(){
	var usertelno = localStorage.getItem("yihe_usertelno");
	if(usertelno == "" || usertelno == null){
	    location.href="login.html";
	}else{
	    location.href="error.html";
	}
    });
    // 我的消息
    $(document).on("click",".my-order",function(){
	var usertelno = localStorage.getItem("yihe_usertelno");
	if(usertelno == "" || usertelno == null){
	    location.href="login.html";
	}else{
	    location.href="error.html";
	}
    });

    /********* 定义全局搜索部分的事件  *********/
    // logo点击
    $(document).on("click","#search .logo",function(){
	location.href = "homepage.html";
    });
    // “我的易和”按钮
    $(document).on("click","#geren_left",function(){
	location.href = "error.html";
    });
    // “购物车”按钮
    $(document).on("click","#geren_right",function(){
	location.href = "error.html";
    }
});
