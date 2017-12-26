<%@ page language="java" pageEncoding="utf-8" isELIgnored="false"
         contentType="text/html; charset=utf-8"%>
<%@include file="../common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <meta charset="utf-8" />
    <title> 走行部监测系统</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-datepicker/css/datepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-timepicker/compiled/timepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/css/page.css"  />
    <script type="text/javascript" src="js/zha/newData.js"></script>
    <script type="text/javascript">
        function gotoDemandPage(num){
            if(num>0){
                window.location.href='Zha_newData.action?pageCode='+num;
            }
        }
    </script>
</head>
<body class="fixed-top">
<%@ include file="../main/head.jsp" %>
<div id="container" class="row-fluid">
    <div id="sidebar" class="nav-collapse collapse">
        <div class="sidebar-toggler hidden-phone"></div>
        <div class="navbar-inverse">
            <form class="navbar-search visible-phone">
                <input type="text" class="search-query" placeholder="Search" />
            </form>
        </div>
        <ul class="sidebar-menu">
            <li class="has-sub" id="zx">
                <a href="javascript:;" class="">
                    <span class="icon-box"> <i class="icon-edit"></i></span> 最新数据
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <li id="zx1"><a class="" href="Zou_newData.action" >图片展示</a></li>
                    <li id="zx2"><a class="" href="Zou_newData.action" >故障识别</a></li>
					<li id="zx3"><a class="" href="Zha_newData.action" >闸瓦数据</a></li>
                </ul>
            </li>
            <li class="has-sub" id="hd">
                <a href="javascript:;" class="">
                    <span class="icon-box"> <i class="icon-calendar"></i></span> 历史数据
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <li id="hd2"><a class="" href="Zou_historyData.action">走行部历史数据</a></li>
                    <li id="hd1"><a class="" href="Zha_historyData.action">闸瓦数据</a></li>
                </ul>
            </li>
            <li class="has-sub" id="ad">
                <a href="javascript:;" class="">
                    <span class="icon-box"> <i class="icon-signal"></i></span> 数据分析
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <li id="ad1"><a class="" href="Zou_TrainAnalyse.action">车型统计</a></li>
                    <li id="ad2"><a class="" href="">故障类型统计</a></li>
                    <li id="ad3"><a class="" href="">列车不同位置统计</a></li>
                    <li id="ad4"><a class="" href="">列车运行故障数量统计</a></li>
					<li id="ad5"><a class="Zha_analyseTime.action" href="">闸瓦按时间统计</a></li>
					<li id="ad6"><a class="Zha_analyseMiles.action" href="">闸瓦按公里数统计</a></li>
                </ul>
            </li>
            <li class="has-sub" id="st">
                <a href="javascript:;" class="">
                    <span class="icon-box"> <i class="icon-retweet"></i></span> 系统状态
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <li id="st1"><a class="" href="Status_currentStatus.action">系统当日状态</a></li>
                    <li id="st2"><a class=""  href="Status_historyStatus.action">系统历史状态</a></li>
                    <li id="st3"><a class=""  href="Status_countStatus.action">系统状态统计</a></li>
                </ul>
            </li>
            <li class="has-sub" id="ss">
                <a href="javascript:;" class="">
                    <span class="icon-box"> <i class="icon-cogs"></i></span> 系统设置
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <c:if test="${currentUser.posi =='管理员'}">
                        <li id="ss1"><a class="" href="">车号设置</a></li>
                    </c:if>
                    <li id="ss2"><a class=""  href="Setting_updatePwd.action">修改密码</a></li>
                    <c:if test="${currentUser.posi =='管理员'}">
                        <li id="ss3"><a class=""  href="Setting_threshold.action">修改阈值</a></li>
                    </c:if>
                </ul>
            </li>
        </ul>
    </div>
    <div id="main-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span12" style="background-image: url(images/train2.jpg );background-repeat:no-repeat; background-position:right;
                width:100%;height:108px;">
                    <div id="theme-change" class="hidden-phone">
                        <i class="icon-cogs"></i>
							<span class="settings">
                                <span class="text">颜色:</span>
                                <span class="colors">
                                    <span class="color-default" data-style="default"></span>
                                    <span class="color-gray" data-style="gray"></span>
                                    <span class="color-purple" data-style="purple"></span>
                                    <span class="color-navy-blue" data-style="navy-blue"></span>
                                </span>
							</span>
                    </div>
                    <h3 class="page-title">
                            走行部
                        <small> 动态检测系统 </small>
                    </h3>
                    <ul class="breadcrumb">
                        <li>
                            <a href="#"><i class="icon-home"></i></a><span class="divider">&nbsp;</span>
                        </li>
                        <li>
                            <a href="#">数据分析</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#">车型统计</a><span class="divider-last">&nbsp;</span></li>
                    </ul>
                </div>
            </div>
        <div class="widget-body">
            <div id="chartdiv" style="width: 100%; height: 400px;"></div>
        </div>

    </div>
</div>
</div>

<%@include file="../main/footer.jsp"%>
<script src="resources/resource/js/jquery-1.8.3.min.js"></script>
<script src="resources/resource/assets/jquery-slimscroll/jquery-ui-1.9.2.custom.min.js"></script>
<script src="resources/resource/assets/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<script src="resources/resource/assets/fullcalendar/fullcalendar/fullcalendar.min.js"></script>
<script src="resources/resource/assets/bootstrap/js/bootstrap.min.js"></script>
<script src="resources/resource/js/jquery.blockui.js"></script>
<script src="resources/resource/js/jquery.cookie.js"></script>
<!-- ie8 fixes -->
<!--[if lt IE 9]>
<script src="resources/resource/js/excanvas.js"></script>
<script src="resources/resource/js/respond.js"></script>
<![endif]-->
<script src="resources/resource/js/scripts.js"></script>

<script type="text/javascript" src="resources/resource/assets/chosen-bootstrap/chosen/chosen.jquery.min.js"></script>
<script type="text/javascript" src="resources/resource/assets/uniform/jquery.uniform.min.js"></script>

<script>
    jQuery(document).ready(function() {

        App.init();
        $("#ad").addClass("has-sub active");
        $("#ad1").addClass("active");
        $("#zou").addClass("active");
        $("#zou").css("backgroud-color","red");
    });
</script>
</body>
</html>
