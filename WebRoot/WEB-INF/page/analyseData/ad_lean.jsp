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
    <title> 受电弓动态监测系统</title>
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
   <script type="text/javascript" src="js/analyseData/lean.js"></script>
   
  <script type="text/javascript">
  //打印
  function myPrint(obj){
    var newWindow=window.open("打印窗口","_blank");//打印窗口要换成页面的url
    var docStr = obj.innerHTML;
    newWindow.document.write(docStr);
    newWindow.document.close();
    newWindow.print();
    newWindow.close();
}
</script>
   
   </head>
<body class="fixed-top">
<%@ include file="../main/head.jsp" %>
<div id="container" class="row-fluid">
    <%@ include file="../main/left.jsp"%>
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
                      	  受电弓
                        <small> 动态检测系统 </small>
                    </h3>
                    <ul class="breadcrumb">
                        <li>
                            <a href="#"><i class="icon-home"></i></a><span class="divider">&nbsp;</span>
                        </li>
                        <li>
                            <a href="#">数据分析</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#">倾斜统计</a><span class="divider-last">&nbsp;</span></li>
                    </ul>
                </div>
            </div>
            <div class="widget-body">
                    <table class="table" style="border:0px;">
                                       <tbody>
                        <tr style="margin-bottom: 0px;padding:0px;">
                        	<td style="width:auto;">
                        		<div class="control-group">
                        		<label  style="vertical-align:top;margin-top:3%;display:inline-block;">列车编号:</label>
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
                        		<label  style="vertical-align:top;margin-top:3%;display:inline-block;">端位号:</label>
                                <select class="chosen"  id="duanNo"  style="width:auto;" >
                                  	 <option value="">所有数据</option>
                                  	 <c:forEach items="${showselectTrainNO}" var="train" varStatus="vs">
                                  	 <c:set var="trainId" value="${train.trainId}"/>
										<c:set var="duan" value="${fn:substring(trainId,12, 14)}" />
                                      <option value="${duan}" <c:if test="${duanNo eq duan}">selected="selected"</c:if>>${duan}</option>
                                     </c:forEach>
                                  </select>
                                  </div>
                              </td>
                                 <td width="auto">
                               	<div class="control-group">
                        		<label  style="vertical-align:top;margin-top:3%;display:inline-block;">弓号:</label>
                                <select class="chosen"  id="planeNo"  style="width:60%;" >
                                  	 <option  value="">全部</option>
                                  	 <c:forEach items="${selectedList}" var="train" varStatus="vs">
                                      <option value="${train.planeNo}" <c:if test="${planeNo eq train.planeNo}">selected="selected"</c:if>>${train.planeNo}</option>
                                     </c:forEach>
                                  </select>
                                  </div>
                              </td>
                              </tr>
                              <tr>
                       			<td  style="border-top:0px;padding:0px;">
                                	<label style="margin-left:2%;">
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
                            <td colspan="2" style="border-top:0px;padding:0px;">
                               <a href="javascript:showCharts()"><button style="width:auto;" type="submit" class="btn btn-primary"  title="Search">生成统计图 &nbsp;<i class="icon   icon-bar-chart"></i></button></a>
                              <button onclick="myPrint(document.getElementById('chartdiv'))" style="width:auto;margin-left:30%;" type="submit"  class="btn btn-info" title="Search">打印统计图 &nbsp;<i class="icon   icon-bar-chart"></i></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                <script>
            var chartData=${json};

            var average = ${lRAangleThreshold};

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
                valueAxis.title = "碳 滑 板 倾 斜 角 度";
                valueAxis.axisColor = "#DADADA";
                valueAxis.dashLength = 1;
                valueAxis.unit = "°"
                valueAxis.tickLength=2;
                valueAxis.minimum = 0;
                valueAxis.logarithmic = false; // this line makes axis logarithmic
                chart.addValueAxis(valueAxis);

                // GUIDE for average
                var guide = new AmCharts.Guide();
                guide.value = average;
                guide.lineColor = "#CC0000";
                guide.dashLength = 4;
                guide.label = "警戒线"+${lRAangleThreshold}+"°";
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
                graph.balloonText="左右倾斜:[[value]] °C";
                graph.bulletSize = 7;
                graph.title = "左右倾斜";
                graph.valueField = "lRAngle";
                graph.lineThickness = 2;
                graph.lineColor = "#00BBCC";
                 graph.legendValueText = " [[value]] °";
                graph.legendPeriodValueText = "[[value]] °";
                
                chart.addGraph(graph);
				
				var graph1 = new AmCharts.AmGraph();
                graph1.type = "smoothedLine";
                graph1.bullet = "round";
                graph1.bulletColor = "#FFFFFF";
                graph1.useLineColorForBulletBorder = true;
                graph1.bulletBorderAlpha = 1;
                graph1.bulletBorderThickness = 2;
                graph1.balloonText="前后倾斜:[[value]] °C";
                graph1.bulletSize = 7;
                graph1.title = "前后倾斜";
                graph1.valueField = "fBAngle";
                graph1.lineThickness = 2;
                graph1.lineColor = "orange";
                graph1.legendValueText = " [[value]] °";
                graph1.legendPeriodValueText = "[[value]] °";
                chart.addGraph(graph1);

		
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
        $("#ad3").addClass("active");
        $("#shou").addClass("active");
    });
</script>
</body>
</html>
