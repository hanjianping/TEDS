<%@ page language="java" pageEncoding="utf-8" isELIgnored="false"
         contentType="text/html; charset=utf-8"%>
<%@include file="../common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta charset="utf-8" />
    <title> 闸瓦动态监测系统</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-datepicker/css/datepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-timepicker/compiled/timepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/css/page.css"  />
    <script type="text/javascript" src="js/deviceStatus/status_history.js"></script>
     <script>
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
    <%@ include file="../main/leftZha.jsp"%>
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
                      	  闸瓦
                        <small> 动态检测系统 </small>
                    </h3>
                    <ul class="breadcrumb">
                        <li>
                            <a href="#"><i class="icon-home"></i></a><span class="divider">&nbsp;</span>
                        </li>
                        <li>
                            <a href="#">系统状态</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#">系统历史状态</a><span class="divider-last">&nbsp;</span></li>
                    </ul>
                </div>
            </div>
            <div class="widget-body">
                    <table class="table" style="border:0px;">
                        <tbody>
                        <tr style="margin-bottom: 0px;padding:0px;">
                        	<td style="width:auto;">
                        		<div class="control-group">
                        		<label  style="vertical-align:top;margin-top:3%;display:inline-block;">设备编号:</label>
                                <select class="chosen"  id="devId"  style="width:auto;" >
                                 	<option value="" >全部</option>
                                 	<c:forEach items="${selectedDev}" var="device" varStatus="vs">
                                      <option value="${device.devId}" <c:if test="${devId eq device.devId}">selected="selected"</c:if>>${device.devId}</option>
                                     </c:forEach>
                                  </select>
                                  </div>
                             </td>
                             <td>
                                	<div class="control-group">
                                	<label>
                               	    检测日期 
                  					<div class="input-append date date-picker" data-date="12-02-2012" data-date-format="dd-mm-yyyy" data-date-viewmode="years"  >
                    					<input onblur="checkBeforeDate()" class=" m-ctrl-medium date-picker" style="width:80px;" type="text" id="firstDate" value="${firstDate}" />
                  						
                  					</div>
                  					至：
                  						<div class="input-append date date-picker" data-date="12-02-2012" data-date-format="dd-mm-yyyy" data-date-viewmode="years" >
                    						<input  onblur="checkEndDate()" class=" m-ctrl-medium date-picker" style="width:80px;" type="text"   id="lastDate" value="${lastDate}" />
                  						</div>
                 					</label>
                				</div>
                  				
                              </td>
                             <td>
                             		<label style="width:auto; margin-top:3%;"/>
                 					 <input type="checkbox" value="true" onclick="show()"  class="no-margin" <c:if test="${checkflag=='true'}">checked="checked" </c:if> id="checkflag" style="margin-top:3%;"/>
                               		 标记异常数据
                             </td>
                        </tr>
                     	<tr>
                     	<td colspan="3" style="border-top:0px;padding:0px;">
                               <a href="javascript:searchTrain()"><button  style="width:auto;margin-left:30%;"  class="btn btn-primary" title="Search">查询数据 &nbsp;<i class="icon  icon-search"></i></button></a>
                     		
                     			<button style="width:auto;margin-left:10%;" type="submit" class="btn btn-success" onclick="myPrint(document.getElementById('content'))"  title="打印">打印列表&nbsp;<i class="icon  icon-print"></i></button>
                     		</td>
                     	</tr>
                        </tbody>
                    </table>
                <table class="table table-bordered table-cell table-hover" style="margin-top:1%;">
                    <thead>
                    <tr>
                        <th>设备编号</th>
                        <th>检测时间</th>
                        <th>机箱温度A</th>
                        <th>机箱温度B</th>
                        <th>CPU温度</th>
                        <th>窗口状态</th>
                        <th>降温设备</th>
                        <th>加热设备</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach items="${pageBean.recordList}" var="device" varStatus="vs">
                        <tr>
                            <td>
                            ${device.devId}
                            </td>
                           <td>
                             <fmt:formatDate value="${device.devTime}" pattern="yyyy-MM-dd HH:mm:ss aa"/>
                            </td>
                             <c:choose>  
                        		<c:when test="${device.devTemp >devTemp}">
                           		  	<td class="exception">
                            			${device.devTemp}
                            		</td>
                    			</c:when>
                    			<c:otherwise>
                    				 <td>
                            			${device.devTemp}
                            		</td>
                    		    </c:otherwise>
                    		</c:choose>
                    		 <c:choose>  
                        		<c:when test="${device.devTemp2 >devTempB}">
                           		  	<td class="exception">
                            			 ${device.devTemp2}
                            		</td>
                    			</c:when>
                    			<c:otherwise>
                    				<td>
                            		 ${device.devTemp2}
                            		</td>
                    		    </c:otherwise>
                    		</c:choose>
                    		 <c:choose>  
                        		<c:when test="${device.cpuTemp >cpuTemp}">
                           		  	<td class="exception">
                            			 ${device.cpuTemp}
                            		</td>
                    			</c:when>
                    			<c:otherwise>
                    				<td>
                            		 ${device.cpuTemp}
                            		</td>
                    		    </c:otherwise>
                    		 </c:choose>  
                            <td>
                            ${device.devDoor}
                            </td>
                            <td>
                            ${device.devReduce}
                            </td>
                             <td>
                            ${device.devHeat}
                            </td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
                     <div id="content" style="display:none;">
                	 <table border="1" width="100%" class="table table-bordered table-cell table-hover" style="margin-top:1%;" >
                    <thead>
                    <tr>
                        <th>设备编号</th>
                        <th>检测时间</th>
                        <th>机箱温度A</th>
                        <th>机箱温度B</th>
                        <th>CPU温度</th>
                        <th>窗口状态</th>
                        <th>降温设备</th>
                        <th>加热设备</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach items="${printData}" var="device" varStatus="vs">
                        <tr>
                            <td>
                            ${device.devId}
                            </td>
                           <td>
                             <fmt:formatDate value="${device.devTime}" pattern="yyyy-MM-dd HH:mm:ss aa"/>
                            </td>
                            <td>
                            ${device.devTemp}
                            </td>
                            <td>
                            ${device.devTemp2}
                            </td>
                            <td>
                            ${device.cpuTemp}
                            </td>
                            <td>
                            ${device.devDoor}
                            </td>
                            <td>
                            ${device.devReduce}
                            </td>
                             <td>
                            ${device.devHeat}
                            </td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
                </div>
                <div class="pagin">
                    <div class="message">共&nbsp;<i class="blue">${pageBean.recordCount }</i>&nbsp;条记录，当前显示第&nbsp;
                        <i class="blue">${pageBean.currentPage}</i>&nbsp;页，
                        每页显示&nbsp;<i class="blue">${pageBean.pageSize }&nbsp;条</i></div>
                    <ul class="paginList">
                        <li class="paginItem"><a class="pagepre" href="javascript:gotoDemandPage(${pageBean.currentPage - 1})"></a></li>
                        <c:forEach begin="${pageBean.beginPageIndex}" end="${pageBean.endPageIndex}" var="num">
                            <c:if test="${pageBean.currentPage eq num }">
                                <li class="paginItem current"><a href="javascript:;">${num}</a></li>
                            </c:if >
                            <c:if  test="${pageBean.currentPage ne num }">
                                <li class="paginItem"><a href="javascript:gotoDemandPage(${num})">${num}</a></li>
                            </c:if>
                        </c:forEach>
                             <c:choose>  
                        	<c:when test="${pageBean.endPageIndex > pageBean.currentPage}">
                           		<li class="paginItem"><a class="pagenxt" href="javascript:gotoDemandPage(${pageBean.currentPage + 1})"></a></li>
                    		</c:when>
                    		<c:otherwise>
                    			<li class="paginItem"><a class="pagenxt" href=""></a></li>
                    		</c:otherwise>
                    	</c:choose>
                    </ul>
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
        $("#zha").addClass("active");
        $("#zha").css("backgroud-color","red");
         $("#st").addClass("has-sub active");
        $("#st2").addClass("active");
    });
</script>
</body>
</html>
