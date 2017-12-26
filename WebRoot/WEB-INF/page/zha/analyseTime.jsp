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
    <link rel="stylesheet" href="resources/jschart/style.css" type="text/css"/>
    <script src="resources/jschart/amcharts/amcharts.js" type="text/javascript"></script>
    <script src="resources/jschart/amcharts/serial.js" type="text/javascript"></script>
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
                    <li id="zx1"><a class="" href="" >图片展示</a></li>
                    <li id="zx2"><a class="" href="" >故障识别</a></li>
					<li id="zx3"><a class="" href="" >闸瓦数据u</a></li>
                </ul>
            </li>
            <li class="has-sub" id="hd">
                <a href="javascript:;" class="">
                    <span class="icon-box"> <i class="icon-calendar"></i></span> 历史数据
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <li id="hd2"><a class="" href="Zou_historyData.action">走行部历史数据</a></li>
                    <li id="hd1"><a class="" href="Zha_historyData.action">闸瓦历史数据</a></li>
                </ul>
            </li>
            <li class="has-sub" id="ad">
                <a href="javascript:;" class="">
                    <span class="icon-box"> <i class="icon-signal"></i></span> 数据分析
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <li id="ad1"><a class="" href="">车型统计</a></li>
                    <li id="ad2"><a class="" href="">故障类型统计</a></li>
                    <li id="ad3"><a class="" href="">列车不同位置统计</a></li>
                    <li id="ad4"><a class="" href="">列车运行故障数量统计</a></li>
					<li id="ad5"><a class="" href="">闸瓦按时间统计</a></li>
					<li id="ad6"><a class="" href="">闸瓦按公里数统计</a></li>
                </ul>
            </li>
            <li class="has-sub" id="st">
                <a href="javascript:;" class="">
                    <span class="icon-box"> <i class="icon-retweet"></i></span> 系统状态
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <li id="st1"><a class="" href="">系统当日状态</a></li>
                    <li id="st2"><a class=""  href="">系统历史状态</a></li>
                    <li id="st3"><a class=""  href="">系统状态统计</a></li>
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
                    <li id="ss2"><a class=""  href="">修改密码</a></li>
                    <c:if test="${currentUser.posi =='管理员'}">
                        <li id="ss3"><a class=""  href="">修改阈值</a></li>
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
                        <small> 检测系统 </small>
                    </h3>
                    <ul class="breadcrumb">
                        <li>
                            <a href="#"><i class="icon-home"></i></a><span class="divider">&nbsp;</span>
                        </li>
                        <li>
                            <a href="#">数据分析</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#">按时间统计</a><span class="divider-last">&nbsp;</span></li>
                    </ul>
                </div>
            </div>
            <div class="widget-body">
                <table class="table" style="border:0px;">
                    <tbody>
                    <tr style="margin-bottom: 0px;padding:0px;">
                        <td style="width:40%; ">
                            <div class="control-group">
                                <label  style="vertical-align:top;margin-top:2%;display:inline-block;">列车编号:</label>
                                <select class="chosen"  id="trainId"  style="width:auto;" >
                                    <option value="" >全部</option>
                                    <c:forEach items="${showselectTrainNO}" var="train" varStatus="vs">
                                        <option value="${train.trainId}" <c:if test="${trainId eq train.trainId}">selected="selected"</c:if>>${train.trainId}</option>
                                    </c:forEach>
                                </select>
                            </div>
                        </td>
                        <td width="auto">
                            <div class="control-group">
                                <label  style="vertical-align:top;margin-top:3%;display:inline-block;">车厢号:</label>
                                <select class="chosen"  id="trainboxIndex"  style="width:auto;" >
                                    <option value="">所有数据</option>
                                    <c:forEach items="${showselectTrainNO}" var="train" varStatus="vs">
                                        <option value="${train.trainboxIndex}" <c:if test="${trainboxIndex eq train.trainboxIndex}">selected="selected"</c:if>>${train.trainboxIndex}</option>
                                    </c:forEach>
                                </select>
                            </div>
                        </td>
                        <td width="auto">
                            <div class="control-group">
                                <label  style="vertical-align:top;margin-top:2%;display:inline-block;">闸瓦号:</label>
                                <select class="chosen"  id="brakeNO"  style="width:60%;" >
                                    <option  value="">全部</option>
                                    <c:forEach items="${selectedList}" var="train" varStatus="vs">
                                        <option value="${train.brakeNO}" <c:if test="${brakeNO eq train.brakeNO}">selected="selected"</c:if>>${train.brakeNO}</option>
                                    </c:forEach>
                                </select>
                            </div>
                        </td>
                        <td width="auto;">
                        </td>
                    </tr>
                    <tr>
                        <td  style="border-top:0px;padding:0px;">
                            <label style="margin-left:1%;">
                                检测日期
                                <div class="input-append date date-picker" data-date="12-02-2012" data-date-format="dd-mm-yyyy" data-date-viewmode="years"  >
                                    <input onblur="checkBeforeDate()" class=" m-ctrl-medium date-picker" style="width:80px;" type="text" id="firstDate" value="${firstDate}" />

                                </div>
                                至：
                                <div class="input-append date date-picker" data-date="12-02-2012" data-date-format="dd-mm-yyyy" data-date-viewmode="years" >
                                    <input  onblur="checkEndDate()" class=" m-ctrl-medium date-picker" style="width:80px;" type="text"   id="lastDate" value="${lastDate}" />
                                </div>
                            </label>
                        </td>

                        <td colspan="3" style="border-top:0px;padding:0px;text-align: left;">
                            <a href="javascript:searchTrain()"><button  style="width:auto;margin-left:6%;"  class="btn btn-primary" title="Search">生成统计图 &nbsp;<i class="icon  icon-search"></i></button></a>
                            <button style="width:auto;margin-left:16%;" type="submit" class="btn btn-success" onclick="myPrint(document.getElementById('content'))" title="打印">打印统计图&nbsp;<i class="icon  icon-print"></i></button>
                        </td>
                    </tr>

                    </tbody>
                </table>
                <script>
                    var chartData=${json};

                    var average = ${firstLeftThreshold};

                    AmCharts.ready(function () {

                        // SERIAL CHART
                        chart = new AmCharts.AmSerialChart();

                        chart.dataProvider = chartData;
                        chart.categoryField = "detTime";
                        chart.dataDateFormat = "YYYY-MM-DD JJ:NN:SS";

                        // AXES
                        // category
                        var categoryAxis = chart.categoryAxis;
                        categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
                        categoryAxis.minPeriod = "hh"; // our data is daily, so we set minPeriod to DD
                        categoryAxis.dashLength = 1;
                        categoryAxis.gridAlpha = 0.15;
                        categoryAxis.axisColor = "#DADADA";

                        // value
                        var valueAxis = new AmCharts.ValueAxis();
                        valueAxis.title = "碳 滑 板 剩 余 量";
                        valueAxis.axisColor = "#DADADA";
                        valueAxis.dashLength = 1;
                        valueAxis.unit = "mm"
                        valueAxis.logarithmic = false; // this line makes axis logarithmic
                        chart.addValueAxis(valueAxis);

                        // GUIDE for average
                        var guide = new AmCharts.Guide();
                        guide.value = average;
                        guide.lineColor = "#CC0000";
                        guide.dashLength = 4;
                        guide.label = "警戒线"+${firstLeftThreshold}+"mm";
                        guide.inside = true;
                        guide.lineAlpha = 2;
                        valueAxis.addGuide(guide);


                        // GRAPH
                        var graph = new AmCharts.AmGraph();
                        graph.type = "smoothedLine";
                        graph.bullet = "round";
                        graph.bulletColor = "#FFFFFF";
                        graph.useLineColorForBulletBorder = true;
                        graph.bulletBorderAlpha = 1;
                        graph.bulletBorderThickness = 2;
                        graph.bulletSize = 7;
                        graph.title = "闸瓦剩余厚度值";
                        graph.valueField = "firstLeft";
                        graph.lineThickness = 2;
                        graph.lineColor = "#00BBCC";
                        graph.legendValueText = " [[value]] mm";
                        graph.legendPeriodValueText = "[[value]] mm";
                        chart.addGraph(graph);

                        // CURSOR
                        var chartCursor = new AmCharts.ChartCursor();
                        chartCursor.cursorPosition = "mouse";
                        chart.addChartCursor(chartCursor);

                        // SCROLLBAR
                        var chartScrollbar = new AmCharts.ChartScrollbar();
                        chartScrollbar.graph = graph;
                        chartScrollbar.scrollbarHeight = 30;
                        chart.addChartScrollbar(chartScrollbar);

                        chart.creditsPosition = "bottom-right";

                        var legend = new AmCharts.AmLegend();
                        legend.useGraphSettings = true;
                        chart.addLegend(legend);
                        // WRITE
                        chart.write("chartdiv");
                    });
                </script>

                <div id="chartdiv" style="width: 100%; height: 400px;"></div>
            </div>
        </div>
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
<script type="text/javascript" src="resources/resource/assets/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="resources/resource/assets/bootstrap-daterangepicker/date.js"></script>
<script type="text/javascript" src="resources/resource/assets/bootstrap-daterangepicker/daterangepicker.js"></script>
<script type="text/javascript" src="resources/resource/assets/bootstrap-colorpicker/js/bootstrap-colorpicker.js"></script>
<script type="text/javascript" src="resources/resource/assets/bootstrap-timepicker/js/bootstrap-timepicker.js"></script>
<script>
    jQuery(document).ready(function() {

        App.init();
        $("#ad").addClass("has-sub active");
        $("#ad5").addClass("active");
        $("#zou").addClass("active");
        $("#zou").css("backgroud-color","red");
    });
</script>
</body>
</html>
