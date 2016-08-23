$(function(){
    $(".tel input").val("");
    $(".tel input").focus();
    $(".cityname").html(window.localStorage.yihe_cityname);

    // 生成随机验证码
    randomCheckCode();

    // 更新验证码
    $(document).on("click",".check-refresh",function(){
	randomCheckCode();
    });

    var telBool = false;
    var passBool = false;
    var checkPassBool = false;
    var codeBool = false;
    // 手机号验证
    $(document).on("blur",".tel input",function(){
	$(this).parent().find(".check").hide();
	var tel = $(this).val().trim();
	if(tel == "" || typeof(tel) == "undefinded"){
	    $(this).parent().find(".warn-info").html("手机号不能为空").show();
	    telBool = false;
	    return;
	}
	if(!telReg.test(tel)){
	    $(this).parent().find(".warn-info").html("手机号格式错误").show();
	    telBool = false;
	    return;
	}
	$(this).parent().find(".check").show();
	$(this).parent().find(".warn-info").hide();
	telBool = true;
    });

    // 密码验证
    $(document).on("blur",".pass input",function(){
	$(this).parent().find(".check").hide();
	var pass = $(this).val().trim();
	if(pass == "" || typeof(pass) == "undefinded"){
	    $(this).parent().find(".warn-info").html("密码不能为空").show();
	    passBool = false;
	    return;
	}
	if(!passReg.test(pass)){
	    $(this).parent().find(".warn-info").html("密码长度不符合要求").show();
	    passBool = false;
	    return;
	}
	$(this).parent().find(".check").show();
	$(this).parent().find(".warn-info").hide();
	passBool = true;
});

    // 重复密码验证
    $(document).on("blur",".pass-confirm input",function(){
	$(this).parent().find(".check").hide();
	var passConfirm = $(this).val().trim();
	if(passConfirm == "" || typeof(passConfirm) == "undefinded"){
	    $(this).parent().find(".warn-info").html("密码不能为空").show();
	    checkPassBool = false;
	    return;
	}
	if(!passReg.test(passConfirm)){
	    $(this).parent().find(".warn-info").html("密码长度不符合要求").show();
	    checkPassBool = false;
	    return;
	}
	if(passConfirm != $(".pass input").val().trim()){
	    $(this).parent().find(".warn-info").html("两次密码输入不一致").show();
	    checkPassBool = false;
	    return;
	}
	$(this).parent().find(".check").show();
	$(this).parent().find(".warn-info").hide();
	checkPassBool = true;
    });

        // 校验验证码
    $(document).on("blur",".code",function(){
	var code = $(this).val().trim();
	if(code == ""){
	    $(this).parent().find(".warn-info").html("验证码不能为空").show();
	    codeBool = false;
	    return;
	}
	if(code != $(this).parent().find(".check-pic").html().trim()){
	    $(this).parent().find(".warn-info").html("验证码输入错误").show();
	    codeBool = false;
	    return;
	}
	$(this).parent().find(".check").show();
	$(this).parent().find(".warn-info").hide();
	codeBool = true;
    });

    // 跳转登录页面
    $(document).on("click",".login-in",function(){
	location.href="login.html";
    });

    // 注册判断
    $(document).on("click",".register",function(){
	if($(".deal").attr("checked") != "checked"){
	    popup("请先阅读并同意《易和用户使用协议》");
	    return;
	}
	if(telBool && passBool && checkPassBool && codeBool){
	    popup("注册成功，但是没啥实际用");
	    setTimeout("location.href='error.html'",3000);
	}else{
	    popup("未能满足校验条件");
	}
    });

});


// 生成随机验证码
function randomCheckCode(){
    var code = randomString(4);
    $(".check-pic").html(code);
}
