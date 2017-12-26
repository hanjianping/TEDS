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
    <script type="text/javascript" src="js/video/history.js"></script>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
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
                            <a href="#">视频数据</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#">历史视频</a><span class="divider-last">&nbsp;</span></li>
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
                             <td>
                             	<div class="control-group">
                                	<label>
                               	   检测日期 
                  					<div class="input-append date date-picker" data-date="12-02-2012" data-date-format="dd-mm-yyyy" data-date-viewmode="years"  >
                    					<input onblur="checkBeforeDate()" class=" m-ctrl-medium date-picker" style="width:80px;" type="text" id="firstDate" value="${firstDate}" />
                  						
                  					</div>
                  					至：
                  						<div class="input-append date date-picker" data-date="12-02-2012" data-date-format="dd-mm-yyyy" data-date-viewmode="years" >
                    						<input onblur="checkEndDate()" class=" m-ctrl-medium date-picker" style="width:80px;" type="text"   id="lastDate" value="${lastDate}" />
                  						</div>
                 					</label>
                				</div>
                             </td>
                            <td width="auto;">
                               <button style="width:auto;" type="submit" class="btn btn-primary" onclick="searchTrain()">搜索视频 &nbsp;<i class="icon    icon-play"></i></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                     <table   class="table table-bordered table-cell table-hover" style="margin-top:1%;">
                    <tr>
                        <th style="text-align: center;vertical-align: middle;padding:10px;">列车编号</th>
                        <th style="text-align: center;vertical-align: middle;padding:10px;">检测时间</th>
                        <th  style="text-align: center;vertical-align: middle;padding:10px;">播放视频</th>
                    </tr>
                    <c:forEach items="${vd}" var="train" varStatus="vs">
                        <tr>
                            <td  style="text-align: center;vertical-align: middle;padding:0px;">
                            ${train.trainID}
                            </td>
                            <td style="text-align: center;vertical-align: middle;padding:0px;">
                             <fmt:formatDate value="${train.devTime}" pattern="yyyy-MM-dd HH:mm:ss aa"/>
                            </td>
                            <td id="printPicture1" style="text-align: center;vertical-align: middle;" width="15%">
											<button class="btn btn-info" type="button" onclick="video('${train.src}')">播放视频</button>&nbsp;
							</td>
                        </tr>
                    </c:forEach>
                </table>
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


<div class="modal hide fade" id="video" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1"
       aria-hidden="true">
      <div class="modal-dialog">
          <button type="button" class="close" data-dismiss="modal"aria-hidden="true" id="pointflush" onclick="return refresh()">×</button>
          <div class="modal-content">
                <div class="modal-body" style="align: center;vertical-align: middle;padding:1px;margin-top:0px; max-width: 700px; max-height: 700px;"> 
                 <video id="my_video" src="" class="video-js vjs-default-skin" controls  preload="auto" width="555" height="500"  data-setup="{}">
      			    </video>
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
        $("#vd").addClass("has-sub active");
        $("#vd2").addClass("active");
    });
</script>
</body>
</html>
