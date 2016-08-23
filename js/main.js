$(function() {
	/********新添加收货地址*******/
	$(".sheng-wrap img").click(function() {
		$("#sheng ul").css("display", "block");
		$("#sheng ul li").click(function() {
			console.log($(this).html());
			$("#sheng ul").css("display", "none");
			$("#sheng span").html($(this).html());
			if($(this).html() === "北京") {
				$("#city img").click(function() {
					$("#beijing").css("display", "block");
					beijing();
				})
			}
			if($(this).html() === "河南") {
				$(".city-wrap img").click(function() {
					$("#henan").css("display", "block");
					henan();
				})
			}
			if ($("#sheng ul").css("display") == 'block') {
				$(document).click(function() {
					console.log("xxx");
					alert("1")
					$("#sheng ul").hide();
				})
			}
		})

	})
	


	var beijing = function() {
		$("#beijing li").click(function() {
			$("#beijing").css("display", "none");
			$("#city span").html($(this).html());
			if($(this).html() === "北京") {
				$("#area img").click(function() {
					$("#beijingqu").css("display", "block");
					$("#beijingqu li").click(function() {
						$("#area span").html($(this).html());
						$("#beijingqu").css("display", "none");
					})
				})
			}
		})
	}
	var henan = function() {
			$("#henan li").click(function() {
				$("#city span").html($(this).html());
				$("#henan").css("display", "none");
				if($(this).html() === "郑州") {
					$("#area img").click(function() {
						$("#zz").css("display", "block");
						$("#zz li").click(function() {
							$("#area span").html($(this).html());
							$("#zz").css("display", "none");
						})
					})
				}
			})
		}
		/****************评论框start*************评论框start***********评论框start*************评论框start*****************/
	$("#shangpin span").click(function() {
		$("#shangpin span").css("color", "#333333");
		var n = $(this).index();
		console.log(n);
		for(var i = 0; i <= n; i++) {
			$("#shangpin span").eq(i).css("color", "red");
			//			console.log($("#shangpin span").eq(i));
		}
	})
	$("#fuwu span").click(function() {
		$("#fuwu span").css("color", "#333333");
		var n = $(this).index();
		for(var i = 0; i <= n; i++) {
			$("#fuwu span").eq(i).css("color", "red");
			//			console.log($("#fuwu span").eq(i));
		}
	})
	$("#miaoshu span").click(function() {
		$("#miaoshu span").css("color", "#333333");
		var n = $(this).index();
		for(var i = 0; i <= n; i++) {
			$("#miaoshu span").eq(i).css("color", "red");
			//			console.log($("#miaoshu span").eq(i));
		}
	})
	$(".eval-txt").bind('input propertychange', function() {
		var ctn = $(".eval-txt").val().length; //获取字数
		//		console.log($(".eval-txt").val().length);
		var sn = 501 - ctn;
		//		console.log(sn);
		$(".num-txt").text("还可以输入" + sn + "字");
		if(ctn > 500) {
			var $a = $(".eval-txt").val().substring(0, 500);
			$(".eval-txt").val($a);
		}
	});
	/***********评论框end********评论框end******评论框end*******评论框end**********/
	/****************支付start************支付start************支付start************支付start*****************/

	$(".pay-way li").click(function() {
			var i = $(this).index();
			//			console.log(i);
			$("#ra").attr("id", "");
			$("#rb").attr("id", "");
			$(".pay-way").children().eq(i).children(".max-round").attr("id", "ra");
			$(".pay-way").children().eq(i).children(".max-round").children(".min-round").attr("id", "rb");
			//			$(".min-round").attr("id","rb");
		})
		/***************支付end********支付end*****支付end********支付end***********/
		/****************充值start************充值start************充值start************充值start*****************/
	$("#recharge-btn").click(function(){
		var myDate = new Date();
		var yea = myDate.getFullYear();
		var mon = myDate.getMonth();
		var dte = myDate.getDate();
		var hou = myDate.getHours();
		var min = myDate.getMinutes();
		var sec = myDate.getSeconds();
		var timer = yea + "-" + mon + "-" + dte + " " + hou + ":" + min + ":" + sec;
//		if($("#recharge-txt").val() != "" && isNaN($("#recharge-txt").val()) == false) {
//			console.log($("#recharge-txt").val());
			var newli = $("<li class='address-info-content newul' id='recharge-wrap'><div class='re-one newTime'><span></span></div><div class='re-two' id='re-order-num'><span>41347943297567</span></div><div class='re-three newjine' id='re-order-num'><span></span></div><div  class='newzong'  id='re-four'><span>2</span></div><li>");
			newli.children(".newTime").find("span").text(timer);
		 	newli.children(".newjine").find("span").text("¥"+ " " +$("#recharge-txt").val());
		 	
		 	newli.prependTo('.address-info-wrap');
//		}
		/***************充值end********充值end*****充值end********充值end***********/

	})
	/********************绑定手机号**********start*********************************/
	$("#iphone-a").blur(function() {
		var a = $("#iphone-a").val();
		var E = /^[1][358][0-9]{9}$/;
		if(E.test(a)){
//			alert("成功");
			$("#iphone-b").blur(function(){
				var b = $("#iphone-b").val();
				var B = /^[\x21-\x7E]{6,20}$/;
				if (B.test(b)) {
//					alert("密码成功");
					$("#iphone-c").blur(function () {
						var c = $("#iphone-c").val();
						if(c === b) {
//							alert("密码一致");
							$("#yanzhengma").blur(function() {
								var yzm = $("#yanzhengma").val();
								if (yzm === "123") {
//									alert("验证码正确");
									$("#phone-code").blur(function() {
										var code = $("#phone-code").val();
										if (code === "6057") {
//											alert("成功");
											$("#binding-tbn").click(function() {
												$(".bd-success").css("display","block");
											})
										} else{
											alert("手机验证码不正确");
										}
									})
								}else{
									alert("验证码不正确");
								}
							})
						}else{
							alert("密码输入不一致");
						}
					})
				}else{
					alert("密码输入不符合要求");
				}
			})	
		} else{
			alert("手机号输入不确定,请重新输入");
		}
	})
	/********************绑定手机号**********end*********************************/
	/********************收藏页面***********start********************************/
		$(".aaa").click(function() {
//			console.log("XXxx");
			$(this).toggleClass("collbbb");
			if ($(this).text() == "收藏") {
				$(this).text("取消收藏");
//				alert("xxxx");
			}else{
				$(this).text("收藏"); 
			}
		})
		

	/********************收藏页面***********end********************************/
	
	
	
})