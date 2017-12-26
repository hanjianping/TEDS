// JavaScript Document


$(document).ready(function(){
	// 导航
	var $li = $("li",$(".menu"));
	var $liInfo = $(".loanInfo",$("li"));
	$li.hover(function(){
			 // 添加样式
		 // $("a:first",$(this)).attr('style',
//			'background:url(images/liBg.png) no-repeat;color:#ffffff;font-weight:700;position:absolute;z-index:10;width:81px;float:left');
//		   
			
			$(".loanInfo",$(this)).show();
				
			},function(){
				//	$("a:first",$(this)).removeAttr('style');
				$liInfo.hide();
	})	
	
	// 平台交易
	var $span =$(".tradeCon > span")
	var $as = $("a",$span);
	var $ps = $("p",$(".tradeChangeCon"));
	$as.click(function(){
				
				var num = $(this).index();		  
				var $pCurrent = $ps.eq(num);
				
				if(num==0){
					$as.removeClass();
					$(this).addClass("phbClick");
					}else{

				$(this).addClass("gg");
				}
				$ps.hide();
				$pCurrent.show();
			})
//	$as.hover(function(){
//				
//				var num = $(this).index();		  
//				var $pCurrent = $ps.eq(num);
//				$as.removeClass();
//				$(this).addClass("current");
//				$pCurrent.show();
//			},function(){
//				$(this).removeClass("current");
//				$pCurrent.hide();
//			}
	
	//展开收起
	var $a = $(".subCommon > .title > a.show");
	$a.toggle(function(){
			
			$(this).parent().next(".subSon").hide();	
			},function(){
			$(this).parent().next(".subSon").show();
			})
	
	//图片从下向上滑出
	$('.boxgrid.slidedown').hover(function(){
			$(".cover", this).stop().animate({top:'-100px'},{queue:false,duration:300});
		}, function() {
			$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
		});
	//Horizontal Sliding 向右滑出
	//$('.boxgrid.slideright').hover(function(){
	//	$(".cover", this).stop().animate({left:'100px'},{queue:false,duration:300});
	//}, function() {
	//	$(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});
	//});
	
	// 焦点图
	var sWidth = $("#focus").width(); //获取焦点图的宽度
	var len = $("#focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	$("#focus").append(btn);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#focus .btn span").mouseenter(function() {
		index = $("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");


	//左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focus ul").css("width",sWidth * (len));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
	
	}
	
   $("#li_"+$("#thisPageId").val()).addClass("current");
    var $ul = $("ul[name!='mainTab']");
	if($("#thisPageId").val()){
		var id = $("#thisPageId").val().substring(0,2);
		$("#ag_"+ id).addClass("currentLi");
		$ul.each(function(){
			if($(this).attr("id") != ("ul_"+id)){
				$(this).css("display","none");
			}
		});
	}else{
		$ul.css("display","none")
		$("ul[class='menuShow menuShow3']").hide();
	}
	
})



