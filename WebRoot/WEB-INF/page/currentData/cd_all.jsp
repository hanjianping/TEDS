<%@ page language="java" pageEncoding="utf-8" isELIgnored="false"
         contentType="text/html; charset=utf-8"%>
<%@include file="../common/common.jsp"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <meta charset="utf-8" />
    <title> TEDS系统</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-datepicker/css/datepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-timepicker/compiled/timepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/css/page.css"  />
    <script type="text/javascript" src="js/currentData/currentData.js"></script>
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
    <script>
  
    //导出到excel表格
    var idTmr;  
        function  getExplorer() {  
            var explorer = window.navigator.userAgent ;  
            //ie  
            if (explorer.indexOf("MSIE") >= 0) {  
                return 'ie';  
            }  
            //firefox  
            else if (explorer.indexOf("Firefox") >= 0) {  
                return 'Firefox';  
            }  
            //Chrome  
            else if(explorer.indexOf("Chrome") >= 0){  
                return 'Chrome';  
            }  
            //Opera  
            else if(explorer.indexOf("Opera") >= 0){  
                return 'Opera';  
            }  
            //Safari  
            else if(explorer.indexOf("Safari") >= 0){  
                return 'Safari';  
            }else{
            	return 'other';
            }  
        }  
        function exportExcel(tableid) { 
            if(getExplorer()=='ie'||getExplorer()=='other')  
            {  
            var curTbl = document.getElementById(tableid);
                var oXL = new ActiveXObject("Excel.Application");

                //创建AX对象excel 
                var oWB = oXL.Workbooks.Add();
                //获取workbook对象 
                var xlsheet = oWB.Worksheets(1);
                //激活当前sheet 
                var sel = document.body.createTextRange();
                sel.moveToElementText(curTbl);
                //把表格中的内容移到TextRange中 
                sel.select;
                //全选TextRange中内容 
                sel.execCommand("Copy");
                //复制TextRange中内容  
                xlsheet.Paste();
                //粘贴到活动的EXCEL中       
                oXL.Visible = true;
                //设置excel可见属性

                try {
                 //var trainId=$('#trainId').val().trim();
                  //var oSheet = oWB.ActiveSheet;
                  // oSheet.Application.ActiveWindow.Caption ='';
                    var fname = oXL.Application.GetSaveAsFilename("Excel.xlsx'", "Excel Spreadsheets (*.xlsx), *.xlsx");
                } catch (e) {
                    print("Nested catch caught " + e);
                } finally {
                    oWB.SaveAs(fname);

                    oWB.Close(savechanges = false);
                    //xls.visible = false;
                    oXL.Quit();
                    oXL = null;
                    //结束excel进程，退出完成
                    //window.setInterval("Cleanup();",1);
                    idTmr = window.setInterval("Cleanup();", 1);

                }
            }
            else  
            {  var trainId=$('#trainId').val().trim();
            	var trainState=$('#trainState').val().trim();
            	if(trainState=='0') {trainState='异常状态';}
            	if(trainState=='1') {trainState='正常状态';}
            	if(trainState==''|| trainState==null) {trainState='所有状态';}
            	if(trainId !=null && trainId !=''){
            	  	tableToExcel(tableid,'name','列车编号'+trainId+'的'+trainState+'.xls') 
            	 }
            	 if(trainId ==null || trainId ==''){tableToExcel(tableid,'name','所有车辆的.xls'); }
                
            }  
        }  
        function Cleanup() {  
            window.clearInterval(idTmr);  
            CollectGarbage();  
        }  
        var tableToExcel = (function() {  
            var uri = 'data:application/vnd.ms-excel;base64,',  
                    template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',  
                    base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) },  
                    format = function(s, c) {  
                        return s.replace(/{(\w+)}/g,  
                                function(m, p) { return c[p]; }) }  
            return function(table, name,filename) {  
                if (!table.nodeType) table = document.getElementById(table)  
                var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}  
                 document.getElementById("dlink").href = uri + base64(format(template, ctx))  
                 document.getElementById("dlink").download = filename;
                  document.getElementById("dlink").click();
            }  
        })()  
    </script>  
</head>
<body class="fixed-top">
<a id="dlink"style="display:none;"></a>
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
                            <a href="#">当日数据</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#">综合数据</a><span class="divider-last">&nbsp;</span></li>
                    </ul>
                </div>
            </div>
            <div id="test" class="widget-body">
                    <table class="table" style="border:0px;">
                        <tbody>
                        <tr style="margin-bottom: 0px;padding:0px;">
                        	<td style="width:auto;">
                        		<div class="control-group">
                        		<label  style="vertical-align:top;margin-top:2%;display:inline-block;">列车编号:</label>
                                <select class="chosen"  id="trainId"  style="width:auto;" >
                                 	<option value="" selected>全部</option>
                                 	<c:forEach items="${showselectTrainNO}" var="train" varStatus="vs">
                                      <option value="${train.trainId}" <c:if test="${trainId eq train.trainId}">selected="selected"</c:if>>${train.trainId}</option>
                                     </c:forEach>
                                  </select>
                                  </div>
                             </td>
                              <td width="auto">
                               	<div class="control-group">
                        		<label  style="vertical-align:top;margin-top:3%;display:inline-block;">状态:</label>
                                <select class="chosen"  id="trainState"  style="width:auto;" >
                                  	 <option value="">所有数据</option>
                                      <option  value="1" <c:if test="${trainState eq '1'}">selected="selected"</c:if>>正常状态</option>
                                       <option value="0" <c:if test="${trainState eq '0'}">selected="selected"</c:if>>异常状态</option>
                                  </select>
                                  </div>
                              </td>
                             <td>  <input type="hidden" id="flagException"  value=""/>
                             		<label style="width:auto; margin-top:3%;">
                 					 <input type="checkbox" value="true" onclick="show()"  class="no-margin" <c:if test="${checkflag=='true'}">checked="checked" </c:if> id="checkflag" style="margin-top:3%;"/>
                               		 标记异常数据
                               		  <input type="checkbox"  disabled class="no-margin"  style="margin-top:3%;"/>
                               		  是否报警
                               		 </label>
                             </td>
                        </tr>
                        <tr>
                          <td colspan="3" style="border-top:0px;padding:0px;">
							<a href="javascript:searchTrain()"><button style="width:auto;margin-left:23%;" type="submit" class="btn btn-primary"  title="Search" >搜索数据&nbsp;<i class="icon  icon-search"></i></button></a>
								<button style="width:auto;margin-left:6%;" type="submit" onclick="myPrint(document.getElementById('content'))" class="btn btn-success" title="Search">打印列表&nbsp;<i class="icon  icon-print"></i></button>
					
								<button style="width:auto;margin-left:6%;" type="submit" class="btn btn-warning" onclick="exportExcel('content')" title="提示:使用IE浏览器,要启用未标记的安全Active控件">导出数组&nbsp;<i class="icon  icon-external-link"></i></button>
                         
                          </td>
                        </tr>
                     	
                        </tbody>
                  </table>
               <table   class="table table-bordered table-cell table-hover" style="margin-top:1%;">
                    <tr>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">列车编号</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">端位号</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">弓编号</th>
                        <th style="text-align: center;vertical-align: middle;" width="18%;padding:0px;">检测时间</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">中心线偏移</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">左右倾斜</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">前后倾斜</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">弓网压力</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">滑板一</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">滑板二</th>
                        <th  style="text-align: center;vertical-align: middle;padding:0px;">图片</th>
                    </tr>
                    <c:forEach items="${pageBean.recordList}" var="train" varStatus="vs">
                        <tr>
                            <td>
                            ${train.trainId}
                            </td>
                            <td>
                           <c:set var="trainId" value="${train.trainId}"/>
							<c:set var="duanNo" value="${fn:substring(trainId,12, 14)}" />
                             ${duanNo}
                            </td>
                            <td>
                             ${train.planeNo}
                            </td>
                            <td>
                             <fmt:formatDate value="${train.detTime}" pattern="yyyy-MM-dd HH:mm:ss aa"/>
                            </td>
                            <c:choose>  
                        		<c:when test="${train.centerBiase >centerBiaseThreshold}">
                           		  	<td class="exception">
                            			${train.centerBiase}
                            		</td>
                    			</c:when>
                    			<c:otherwise>
                    				<td>
                            		${train.centerBiase}
                            		</td>
                    		    </c:otherwise>
                    		</c:choose>
                            <c:choose>  
                        		<c:when test="${train.lRAangle >lRAangleThreshold}">
                           		  	<td class="exception">
                            			${train.lRAangle}
                            		</td>
                    			</c:when>
                    			<c:otherwise>
                    				<td>
                            		${train.lRAangle}
                            		</td>
                    		    </c:otherwise>
                    		</c:choose>
                             <c:choose>  
                        		<c:when test="${train.fBAangle >fBAangleThreshold}">
                           		  	<td class="exception">
                            			${train.fBAangle}
                            		</td>
                    			</c:when>
                    			<c:otherwise>
                    				<td>
                            		${train.fBAangle}
                            		</td>
                    		    </c:otherwise>
                    		</c:choose>
                             <c:choose>  
                        		<c:when test="${train.press >pressThreshold}">
                           		  	<td class="exception">
                            			${train.press}
                            		</td>
                    			</c:when>
                    			<c:otherwise>
                    				<td>
                            		${train.press}
                            		</td>
                    		    </c:otherwise>
                    		</c:choose>
                            <c:choose>  
                        		<c:when test="${train.firstLeft >firstLeftThreshold}">
                           		  	<td class="exception">
                            			${train.firstLeft}
                            		</td>
                    			</c:when>
                    			<c:otherwise>
                    				<td>
                            		${train.firstLeft}
                            		</td>
                    		    </c:otherwise>
                    		</c:choose>
                    		<c:choose>  
                        		<c:when test="${train.secondLeft >secondLeftThreshold}">
                           		  	<td class="exception">
                            			${train.secondLeft}
                            		</td>
                    			</c:when>
                    			<c:otherwise>
                    				<td>
                            		${train.secondLeft}
                            		</td>
                    		    </c:otherwise>
                    		</c:choose>
                            <td id="printPicture1" style="text-align: center;vertical-align: middle;" width="15%">
								<button class="btn btn-info" type="button" onclick="picture('${train.photoPath}','实时图片')">实时</button>&nbsp;
								<button class="btn btn-success" type="button"  onclick="pointCloud('${train.graphicPath}','${train.trainId}','${duanNo}','${train.planeNo}','${train.centerBiase}','${train.lRAangle}','${train.fBAangle}','${train.press}','${train.firstLeft}','${train.secondLeft}')">拟合</button>
							</td>
                        </tr>
                    </c:forEach>
                </table>
                  <%--打印和导入excel表格的数据 --%>
                  <div id="content"  style="display:none;">
                  <table width="100%" border="1"  cellspacing="0" cellpadding="0" style=" margin-top:1%;">
                    <tr>
                        <th >列车编号</th>
                        <th >端位号</th>
                        <th >弓编号</th>
                        <th>检测时间</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">中心线偏移</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">左右倾斜</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">前后倾斜</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">弓网压力</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">滑板一</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">滑板二</th>
                    </tr>
                    <c:forEach items="${printData}" var="train" varStatus="vs">
                        <tr style="text-align: center;vertical-align: middle;padding:0px;">
                            <td>
                            ${train.trainId}
                            </td>
                            <td>
                           <c:set var="trainId" value="${train.trainId}"/>
							<c:set var="duanNo" value="${fn:substring(trainId,12, 14)}" />
                             ${duanNo}
                            </td>
                            <td>
                             ${train.planeNo}
                            </td>
                            <td>
                             <fmt:formatDate value="${train.detTime}" pattern="yyyy-MM-dd HH:mm:ss aa"/>
                            </td>
                            <td>
                            	${train.centerBiase}
                            </td>
                            <td>
                            	${train.lRAangle}
                            </td>
                            <td>
                            	${train.fBAangle}
                            </td>
                            <td>
                            	${train.press}
                            </td>
                            <td>
                            	${train.firstLeft}
                            </td>
                            <td>
                            	${train.secondLeft}
                            </td>
                      </tr>
                  </c:forEach>
                 </table>
                 </div>
                	<div class="pagin">
                    <div class="message">共&nbsp;<i class="blue">${pageBean.recordCount }</i>&nbsp;条记录，当前显示第&nbsp;
                        <i class="blue">${pageBean.currentPage}</i>&nbsp;页，
                        每页显示&nbsp;<i class="blue">${pageBean.pageSize }&nbsp;条</i>
                    </div>
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
<script>
function refresh(){
    window.location.reload();//刷新当前页面.
}
</script>
<%--拟合图片 --%> 
<script src="pointCloud/three.js"></script>
<script src="pointCloud/PCDLoader.js"></script>
<script src="pointCloud/TrackballControls.js"></script>
<script src="pointCloud/Detector.js"></script>
<script src="pointCloud/stats.min.js"></script>
  <div id="pointCloud" class="modal hide fade" tabindex="-1" style="left:22%;margin-top:-4%;width:95%;height:100%;" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-header" style="padding:10px 10px 5px 1px;">
		<button type="button" class="close" data-dismiss="modal"aria-hidden="true" id="pointflush" onclick="return refresh()">×</button>
		<span id="1" style="margin-left:10%;font-weight:bold;"></span>
		<span id="9" style="margin-left:1%;font-weight:bold;"></span>
		<span id="2" style="margin-left:1%;font-weight:bold;"></span>
		<span id="3" style="margin-left:1%;font-weight:bold;"></span>
		<span id="4" style="margin-left:1%;font-weight:bold;"></span>
		<span id="5" style="margin-left:1%;font-weight:bold;"></span>
		<span id="6" style="margin-left:1%;font-weight:bold;"></span>
		<span id="7" style="margin-left:1%;font-weight:bold;"></span>
		<span id="8" style="margin-left:1%;font-weight:bold;"></span>
	</div>
	<div class="modal-body" style="width:100%;margin-top:0px;height:100%;max-width: 1500px;max-height: 1000px;padding:1px;"> 
        <div id="info">
        </div>
	</div>
 </div>
<%@include file="../main/alert.jsp"%>
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
        $("#cd").addClass("has-sub active");
         $("#cd1").addClass("active");
        $("#shou").addClass("active");
    });
</script>
</body>
</html>
