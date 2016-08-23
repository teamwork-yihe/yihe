$(function(){
    var canLogin = false;

    // 鼠标焦点、显示城市信息
    $(".tel input").focus();
    var city = decodeURI(getParam(location.href,"city"));
    city = window.localStorage.yihe_cityname;
    $(".cityname").html(city);

    // 生成随机验证码
    randomCheckCode();

    // 更新验证码
    $(document).on("click",".check-refresh",function(){
	randomCheckCode();
    });

    // 手机登陆与账号登陆切换
    var loginType = 0; // 登录类型，手机为0，账号为1
    $(document).on("click",(".tel-login"),function(){
	$(".user-login").css("display","block");
	$(".pass").hide();
	$(".tel-code").show();
	$(this).css("display","none");
	$(".warn-info").hide();
	loginType = 1;
    });
    $(document).on("click",(".user-login"),function(){
	$(".tel-login").css("display","block");
	$(".pass").show();
	$(".tel-code").hide();
	$(this).css("display","none");
	$(".warn-info").hide();
	loginType = 0;
    });

    // 校验手机号
    $(document).on("blur",".tel input",function(){
	$(this).parent().find(".check").hide();
	var tel = $(this).val().trim();
	if(tel == "" || typeof(tel) == "undefinded"){
	    $(this).parent().find(".warn-info").html("手机号不能为空").show();
	    return;
	}
	if(!telReg.test(tel)){
	    $(this).parent().find(".warn-info").html("手机号格式错误").show();
	    return;
	}
	$(this).parent().find(".check").show();
	$(this).parent().find(".warn-info").hide();
    });

    // 校验密码
    $(document).on("blur",".pass input",function(){
	$(this).parent().find(".check").hide();
	var pass = $(this).val().trim();
	if(pass == "" || typeof(pass) == "undefinded"){
	    $(this).parent().find(".warn-info").html("密码不能为空").show();
	    return;
	}
	if(!passReg.test(pass)){
	    $(this).parent().find(".warn-info").html("密码长度不符合要求").show();
	    return;
	}
	$(this).parent().find(".check").show();
	$(this).parent().find(".warn-info").hide();
    });

    // 校验验证码
    $(document).on("blur",".code",function(){
	var code = $(this).val().trim();
	if(code == ""){
	    $(this).parent().find(".warn-info").html("验证码不能为空").show();
	    return;
	}
	if(code != $(this).parent().find(".check-pic").html().trim()){
	    $(this).parent().find(".warn-info").html("验证码输入错误").show();
	    return;
	}
	$(this).parent().find(".check").show();
	$(this).parent().find(".warn-info").hide();
    });

    // 手机验证码倒计时
    var code = ""; // 全局验证码
    var canUse = true;
    $(document).on("click",".get-code",function(){
	if(!canUse){
	    return;
	}
	$(this).css("background-color","#ccc");
	code = randomString(4);
	canUse = false;
	var time = 6;
	var codeTimer = setInterval(function(){
	    $(".get-code").html(code + "("+time+")");
	    if(time == 0){
		clearInterval(codeTimer);
		$(".get-code").html("获取验证码");
		$(".get-code").css("background-color","#008ce1");
		canUse = true;
	    }
	    time--;
	},1000);

    });

    // 跳转注册页面
    $(document).on("click",".register",function(){
	location.href = "register.html";
    });

    // 登录判断及跳转
    $(document).on("click",".login-in",function(){
	var telno = $(".tel input").val().trim();
	var pass = $(".pass input").val().trim();
	var isCode1 = $(".code").val().trim() == $(".check-pic").html();
	var isCode2 = code == $(".tel-code input").val().trim();
	if(loginType == 0){
	    if(checkUser(telno, pass) && isCode1){
		popup("登陆成功");
		localStorage.setItem("yihe_usertelno",telno);
		setTimeout("location.href='homepage.html';",3000);
	    }else{
		popup("登陆失败");
	    }
	}else if(loginType ==1){
	    var flag = false;
	    for(var i = 0; i < userInfo.length; i++) {
		if(userInfo[i].username == telno && isCode2){
		    popup("登陆成功");
		    localStorage.setItem("yihe_usertelno",telno);
		    setTimeout("location.href='homepage.html';",3000);
		    flag = true;
		    break;
		}
	    }
	    if(!flag){
		popup("登陆失败");
	    }
	}
    });
});

// 生成随机验证码
function randomCheckCode(){
    var code = randomString(4);
    $(".check-pic").html(code);
}

// 检验用户身份信息
function checkUser(username, userpass){
    for(var i = 0; i < userInfo.length; i++) {
	if(userInfo[i].username == username && userInfo[i].password == userpass){
	    return true;
	}
    }
    return false;
}
