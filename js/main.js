$(function() {
	/********新添加收货地址*******/
	$("#one-sanjiao").click(function() {
		$("#sheng-one").css("display","block");
	})
//	点击省份
	$("#sheng-one li").click(function() {
		$("#sheng-one").css("display","none");
		$("#sheng span").html($(this).html());
//		判断省份的值
		if($("#sheng span").html() == "北京") {
			$("#beijing").css("display","block");
			$("#beijing li").click(function() {
				$("#beijing").css("display","none");
		        $("#city span").html($(this).html());
//		        判断市区的值
		        if ( $("#city span").html() == "北京") {
					$("#beijingqu").css("display","block");
						$("#beijingqu li").click(function() {
							$("#beijingqu").css("display","none");
					        $("#area span").html($(this).html());
						})
				}
			})
		}
		//		判断省份的值
		if($("#sheng span").html() == "河南") {
			$("#henan").css("display","block");
			$("#henan li").click(function() {
				$("#henan").css("display","none");
		        $("#city span").html($(this).html());
//		        判断市区的值
		        if ( $("#city span").html() == "郑州") {
					$("#zz").css("display","block");
					$("#zz li").click(function() {
						$("#zz").css("display","none");
				        $("#area span").html($(this).html());
					})
				}
			})
		}
	})
		//点击市区按钮
		$("#two-sanjiao").click(function(){
			//如果省份显示北京  二级显示北京的市区
			if($("#sheng span").html() == "北京"){
				$("#beijing").css("display","block");
					$("#beijingqu li").click(function() {
						$("#beijingqu").css("display","none");
						$("#area span").html($(this).html());
					})
			}
		})
		$("#two-sanjiao").click(function(){
			//如果省份显示河南  二级显示河南的市区
			if($("#sheng span").html() == "河南"){
				$("#henan").css("display","block");
					$("#zz li").click(function() {
						$("#zz").css("display","none");
						$("#area span").html($(this).html());
					})
			}
		})
	
			
	/****************评论框start*************评论框start***********评论框start*************评论框start*****************/
	$("#shangpin span").click(function() {
		$("#shangpin span").css("color", "#333333");
		var n = $(this).index();
		for(var i = 0; i <= n; i++) {
			$("#shangpin span").eq(i).css("color", "red");
			//console.log($("#shangpin span").eq(i));
		}
	})
	$("#fuwu span").click(function() {
		$("#fuwu span").css("color", "#333333");
		var n = $(this).index();
		for(var i = 0; i <= n; i++) {
			$("#fuwu span").eq(i).css("color", "red");
			//console.log($("#fuwu span").eq(i));
		}
	})
	$("#miaoshu span").click(function() {
		$("#miaoshu span").css("color", "#333333");
		var n = $(this).index();
		for(var i = 0; i <= n; i++) {
			$("#miaoshu span").eq(i).css("color", "red");
			//	console.log($("#miaoshu span").eq(i));
		}
	})
	$(".eval-txt").bind('input propertychange', function() {
		var ctn = $(".eval-txt").val().length; //获取字数
		//		console.log($(".eval-txt").val().length);
		var sn = 500 - ctn;
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
		if($("#recharge-txt").val() != "" && isNaN($("#recharge-txt").val()) == false){
			var newli = $("<li class='address-info-content newul' id='recharge-wrap'><div class='re-one newTime'><span></span></div><div class='re-two' id='re-order-num'><span>41347943297567</span></div><div class='re-three newjine' id='re-order-num'><span></span></div><div  class='newzong'  id='re-four'><span>2</span></div><li>");
			newli.children(".newTime").find("span").text(timer);
		 	newli.children(".newjine").find("span").text("¥"+ " " +$("#recharge-txt").val());
		 	
		 	newli.prependTo('.address-info-wrap');
		}
		/***************充值end********充值end*****充值end********充值end***********/

	})
	/*********************个人地址************start********************************/
//	个人地址
	var namethree;
	$("#shouhuo-name").blur(function(){
		localStorage.setItem("a",$("#shouhuo-name").val())
		namethree = localStorage.getItem("a");
	})
	$("#btn-add-addres").click(function(){
		window.location.href = "../html/personeAddress.html";
		var newadress = $("<li class='address-info-content'><div class='one-div'><span>1</span></div><div class='two-div'><span></span></div><div class='three-div'><span id='name-three'></span></div><div class='four-div'><span></span></div><div class='five-div'><span></span></div><div class='six-div'><span></span></div><div class='seven-div'><span><a href='###'></a> | <a href='###'>删除</a></span></div></li>");
		newadress.prependTo($(".address-info-wrap"));
		$('#name-three').html(namethree);
	})
	$(".add-newadsbtn").click(function() {
		window.location.href = "../html/addAddress.html";
	})	
	$("#newadsa").click(function() {
		window.location.href = "../html/addAddress.html";
	})
	$("#y-new-address").click(function() {
		window.location.href = "../html/addAddress.html";
	})
	/*********************个人地址************end********************************/
	/********************绑定手机号**********start*********************************/
	var E = /^[1][358][0-9]{9}$/;//验证手机表达式
	$("#iphone-a").blur(function() {
		var a = $("#iphone-a").val();
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
												popup("恭喜您绑定成功！");
											})
											$("#pas-btn").click(function() {
												popup("恭喜您修改密码成功！");
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
			alert("手机号输入不正确,请重新输入");
		}
	})
	/********************绑定手机号**********end*********************************/
	/********************收藏页面***********start********************************/
	function coll(a) {
		$(a).click(function() {
			$(this).toggleClass("collbbb");
			if ($(this).text() == "收藏") {
				$(this).text("取消收藏");
			}else{
				$(this).text("收藏"); 
			}
		})
	}
	coll(".aaa");
	coll(".bro");
	//控制字数
	$(".collect-info").each(function(){
		var collStr = $(this).html();
		console.log($(this).html());
		if (collStr.length >= 23) {
			$(this).html(collStr.substring(0,23) + "...");
		}
	});
	/********************收藏页面***********end********************************/
	/*******************左列表跳转**********start*******************/
	var jump = $(".y-content-personal").find("li");
	jump.eq(1).children("a").click(function() {
		window.location.href = "../html/personeAccount.html";
	})
	jump.eq(2).children("a").click(function() {
		window.location.href = "../html/personeOrder.html";
	})
	jump.eq(3).children("a").click(function() {
		window.location.href = "../html/personeIntegral.html";
	})
	jump.eq(4).children("a").click(function() {
		window.location.href = "../html/personeTicket.html";
	})
	jump.eq(6).children("a").click(function() {
		window.location.href = "../html/personeMeans.html";
	})
	jump.eq(7).children("a").click(function() {
		window.location.href = "../html/personeAddress.html";
	})
	jump.eq(8).children("a").click(function() {
		window.location.href = "../html/personeCollect.html";
	})
	jump.eq(9).children("a").click(function() {
		window.location.href = "../html/personeBrowse.html";
	})
	jump.eq(10).children("a").click(function() {
		window.location.href = "../html/personePassword.html";
	})
	jump.eq(12).children("a").click(function() {
		window.location.href = "../html/personeMessage.html";
	})
	/*******************左列表跳转**********end********************/
	/******订单删除*****start*******/
	$(".y-p2-see-detail span").click(function() {
		var jiedian = $(this).parents('.y-order-content');
		jiedian.remove();
	})
	/******订单删除*****end*******/
	/******修改资料****start******/
	$("#sub-btn").click(function() {
		$(".item-right div").fadeIn(500);
		setTimeout(function() {
			$(".item-right div").fadeOut(500);
		},2000)
	})
	/******修改资料****end******/
	// 地址管理
	function removeAdr(select) {
		 $(select).click(function () {
			var adremove = $(this).parents(".address-info-content");
			adremove.remove();
		})
	}
	removeAdr(".addres-remove");
	removeAdr(".message-remove");
	$(".set-default").click(function() {
		$(".set-default").text("设为默认");
		$(this).empty();
	})
	//换绑手机
	var phNum = false;
	var yzm = false;
	var pYzm = false;
	$(".phone-num").blur(function() {
		if(E.test($(".phone-num").val())){
			$(".ip-it").blur(function(){
				if($(".ip-it").val() === "xqcr"){
					$(".phone-verification").blur(function() {
						if($(".phone-verification").val() === "5067"){
							pYzm = true;
						} else{
							alert("验证码有误");
						}
					})
					yzm = true;
				} else{
					alert("验证码有误");
				}
			})
			phNum = true;
		} else{
			alert("手机号输入有误");
		}
	})
	function attPhone(a,b) {
		$(a).click(function() {
			if(phNum == true && yzm == true && pYzm == true ){
				location.href = b;
			} else{
				alert("验证失败 , 请补全以上信息!");
			}
		})
	}
	attPhone(".bt-it","../html/bindingPhonePage2.html");
	attPhone(".bt-it-two","../html/bindingPhonePage3.html")
	
	
	
})