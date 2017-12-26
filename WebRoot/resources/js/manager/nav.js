$(document).ready(function() {
	
    /**
    * 增加jquery方法
    * 替换class为popbox的内容
    */
    $.fn.replacePopboxContent = function() {
        $(this).each(function() {
            $(this).html(StringUtil.bindPopboxStyle($(this).html(), true));
        });
    }
    /*页面泡泡滑过弹出效果*/
    $(".tip").live("mouseover", function() {
        $(this).find("span").show();
        $(this).addClass("tip_other");
    });
    $(".tip").live("mouseout", function() {
        $(this).find("span").hide();
        $(this).removeClass("tip_other");
    });
    /* 表格滑过加背景色
    $(".table_data>tbody>tr").live("mouseover", function() {
        $(this).addClass("tr_bgcolor");
    });
    $(".table_data>tbody>tr").live("mouseout", function() {
        $(this).removeClass("tr_bgcolor");
    }); */
    /*
     * $("#topnav>li>div>h5>b>dl").live("mouseover", function() { $(this).addClass("tr_bgcolor"); });
     * $("#topnav>li>div>h5>b>dl").live("mouseout", function() { $(this).removeClass("tr_bgcolor"); });
     */
    $(".authorized").live("mousedown", function() {
        $(this).parent().parent().addClass("tr_bgcolor_ye");
    });
    $(".zz_box").css("display", "none");
    $(".zz_hide").live("mouseover", function() {
        $(".zz_box").css("display", "block");
    });
    $(".zz_hide").live("mouseout", function() {
        $(".zz_box").css("display", "none");
    });
    $(".warning>td").first().css("border-left", "1px solid #e60012");
    $(".warning>td").last().css("border-right", "1px solid #e60012");
    /*eq和rv 日历效果 */
    $(".calendar_center").hover(function() {
        $(".calendar_center>dl").show();
    }, function() {
        $(".calendar_center>dl").hide();
    });
    $(".calendar_center>dl>dd").live("mouseover", function() {
        $(this).addClass("over");
    });
    $(".calendar_center>dl>dd").live("mouseout", function() {
        $(this).removeClass("over");
    });
    // 替换class="popbox"的内容(加上弹出层效果)
    $(".popbox").replacePopboxContent();
    // 禁止文本框自动记忆
    $("input,textarea").attr("autocomplete", "off");
    /* 控制物料查看打印页面的划过样式 */
    $("div.tabDiv>ul.view_list>li").live("mouseover", function() {
        $(this).attr("class", "table_ma_trbg");
    });
    $("div.tabDiv>ul.view_list>li").live("mouseout", function() {
        $(this).removeClass("table_ma_trbg");
        $('div.tabDiv>ul.view_list>li:gt(0)').attr("class", "print_li");
    });
    /* 控制物料表格信息的滑过样式 */
    $(".table_ma>tbody>tr").live("mouseover", function() {
        $(this).addClass("table_ma_trbg");
    });
    $(".table_ma>tbody>tr").live("mouseout", function() {
        $(this).removeClass("table_ma_trbg");
    });
    $(".table_ma>tbody>tr.odd_bg").live("mouseover", function() {
        $('td', $(this)).eq(0).addClass('odd_first');
        $('tr.odd_bg > td.last', $("table.table_ma")).addClass('odd_last');
        $(this).addClass("table_ma_trbg");
    });
    $(".table_ma>tbody>tr").live("mouseout", function() {
        $(this).removeClass("table_ma_trbg");
    });
    /* 控制备件表格信息的滑过样式 */
    $(".table_sp>tbody>tr").live("mouseover", function() {
        $(this).addClass("table_sp_trbg");
    });
    $(".table_sp>tbody>tr").live("mouseout", function() {
        $(this).removeClass("table_sp_trbg");
    });
    $(".table_sp>tbody>tr.odd_bg").live("mouseover", function() {
        $('td', $(this)).eq(0).addClass('odd_first');
        $('tr.odd_bg > td.last', $("table.table_sp")).addClass('odd_last');
        $(this).addClass("table_sp_trbg");
    });
    $(".table_sp>tbody>tr").live("mouseout", function() {
        $(this).removeClass("table_sp_trbg");
    });
    /* 2012-01-18 金骞 控制导航图片路径 */
    var host = window.location.host;
    var pathname = window.location.pathname;
    var url = window.location.protocol + "//" + host;
    // 判断是否是测试工程
    if (pathname.substr(0, 8) == "/sp_web/") {
        url = url + "/sp_web";
    }
    /* 2011-12-08 董佳 控制menu菜单滑动效果 */
    var $navBg = $('<div id="navBg"></div>');
    /* 2011-12-19 董佳 控制menu菜单滑动效果 */
    var navInterval;
    $('ul#topnav > li').hover(function() {
        // 取得当前li下面的div名称，命名为divClassName，并且判断divClassName是否等于top9或者top10
        var divClassName = $(this).children("div").attr("class");
        if (divClassName == "top9" || divClassName == "top10") {
            $("a:first", $(this))
                    .attr(
                        'style',
                        "background:url("
                                + url
                                + "/web/images/menuNewRight.png) no-repeat scroll 0 0 transparent;position: absolute; top:4px; right:2px;width:99px; height: 38px;z-index:601;"
                    );
        } 
        else if(divClassName == "topLast"){
			$("a:first", $(this))
                    .attr(
                        'style',
                        "background:url("
                                + url
                                + "/web/images/menuOtherSelDown.png) no-repeat scroll right center;z-index:601;"
                    );			
					$(".lastOtherA").hover(function(){
						$(".addTop1",$(this)).show();
					},function(){
						$(".addTop1",$(this)).hide();
					});
				} 
        // 判断divClassName是否等于undefined，就是判断是否含有div
        else if (divClassName == undefined) {
            $("a:first", $(this))
                    .attr(
                        'style',
                        "background:url("
                                + url
                                + "/web/images/menuNewNoDiv.png) no-repeat scroll 0 0 transparent;position: absolute; top:2px; left:1px;width:99px; height: 38px;z-index:601;"
                    );
        }
        // divClassName其他情况执行
        else {
            $("a:first", $(this))
                    .attr(
                        'style',
                        "background:url("
                                + url
                                + "/web/images/menuNew.png) no-repeat scroll 0 0 transparent;position: absolute; top:4px; left:2px;width:99px; height: 38px;z-index:601;"
                    );
        }
        // 取得当前滑过的li
        var $currentLi = $(this);
        // 取得内容的左侧定位
        $('#navBg').stop().animate({
            left : $currentLi.position().left
        }, 'fast');
        navInterval = window.setInterval(_mSlideDown($currentLi), 50);
    },
    function() {
        // 去除第一个a的样式
        $("a:first", $(this)).removeAttr('style');
        window.clearInterval(navInterval);
        // 导航内容收起
        if ($('div[class^="top"]',$(this)).is(":visible")) {
        	$('div[class^="top"]', $(this)).slideUp('fast');
        }
    }
    );
    // 导航内容弹出
    function _mSlideDown($currentLi) {
        return function() {
            mSlideDown($currentLi);
        }
    }
    // 导航内容弹出
    function mSlideDown($currentLi) {
        $('div[class^="top"]', $currentLi).slideDown('fast');
    }
    
	$(".menuJob").hover(function(){
			$(this).addClass("hover");
			$(this).children(".myJob").show();
		},function(){
			$(this).removeClass("hover");
			$(this).children(".myJob").hide();
		}
	)

});
/*tab键切换*/
function selectTab(num) {
    $("a[name^='tab']").each(function(index) {
        if ((index + 1) == num) {
            $(this).addClass("tab_bar");
        }
        else {
            $(this).removeClass("tab_bar");
        }
    });
}
function setTab(n) {
    var tli = document.getElementById("menu1").getElementsByTagName("li");
    var mli = document.getElementById("main1").getElementsByTagName("ul");
    for (i = 0; i < tli.length; i++) {
        tli[i].className = i == n ? "hover" : "";
        mli[i].style.display = i == n ? "block" : "none";
    }
}