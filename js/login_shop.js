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

    // 登录判断及跳转
    $(document).on("click",".login-in",function(){
	var telno = $(".tel input").val().trim();
	var pass = $(".pass input").val().trim();
	var isCode1 = $(".code").val().trim() == $(".check-pic").html();
	if(checkSeller(telno, pass) && isCode1){
	    popup("登陆成功");
	    setTimeout("location.href='error.html';",3000);
	}else{
	    popup("登陆失败");
	}

    });
});

// 生成随机验证码
function randomCheckCode(){
    var code = randomString(4);
    $(".check-pic").html(code);
}

// 检验用户身份信息
function checkSeller(username, userpass){
    for(var i = 0; i < sellerInfo.length; i++) {
	if(sellerInfo[i].username == username && sellerInfo[i].password == userpass){
	    return true;
	}
    }
    return false;
}
