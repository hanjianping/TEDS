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
    <script type="text/javascript" src="js/zha/history.js"></script>
    <script type="text/javascript" src="js/zha/newData.js"></script>
    <script type="text/javascript">
        function searchZha(){
            var firstDate=$("#firstDate").val();
            var lastDate =$("#lastDate").val();
            var trainId=$('#trainId').val().trim();
            window.location.href='Zha_historyData.action?trainId='+trainId+'&firstDate='+firstDate+'&lastDate='+lastDate;
        }
        function gotoDemandPage(num){
            var trainId=$('#trainId').val().trim();
            var firstDate=$("#firstDate").val();
            var lastDate =$("#lastDate").val();
            if(num>0){
                window.location.href='Zha_historyData.action?pageCode='+num+'&trainId='+trainId+'&firstDate='+firstDate+'&lastDate='+lastDate;
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
                    <li id="hd1"><a class="" href="Zha_historyData.action">闸历史瓦数据</a></li>
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
					<li id="ad5"><a class="" href="Zha_analyseTime.action">闸瓦按时间统计</a></li>
					<li id="ad6"><a class="" href="Zha_analyseMiles.action">闸瓦按公里数统计</a></li>
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
                            <a href="#">最新数据</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#">历史数据</a><span class="divider-last">&nbsp;</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="widget-body">
            <table class="table" style="border:0px;margin-left:3%;">
                <tbody>
                <tr style="margin-bottom: 0px;padding:0px;">
                    <td style="width:30%; ">
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
                    <td style="width:40%;">
                        <label style="margin-left:1%;">
                            检测日期
                            <div class="input-append date date-picker" data-date="12-02-2017" data-date-format="dd-mm-yyyy" data-date-viewmode="years"  >
                                <input onblur="checkBeforeDate()" class=" m-ctrl-medium date-picker" style="width:80px;" type="text" id="firstDate" value="${firstDate}" />

                            </div>
                            至：
                            <div class="input-append date date-picker" data-date="12-02-2017" data-date-format="dd-mm-yyyy" data-date-viewmode="years" >
                                <input  onblur="checkEndDate()" class=" m-ctrl-medium date-picker" style="width:80px;" type="text"   id="lastDate" value="${lastDate}" />
                            </div>
                        </label>
                    </td>

                    <td style="width: 30%;">
                        <a href="javascript:searchZha()"><button  style="width:auto;margin-top:1%;"  class="btn btn-primary" title="Search">搜索数据 &nbsp;<i class="icon  icon-search"></i></button></a>
                    </td>
                </tr>

                </tbody>
            </table>
            <table class="table table-bordered table-cell table-hover" style="margin-top:1%;margin-left:3%;width:90%;">
                <thead>
                <tr>
                    <th style="text-align: center;vertical-align: middle;padding:0px;">列车编号</th>
                    <th style="text-align: center;vertical-align: middle;padding:0px;">车厢号</th>
                    <th style="text-align: center;vertical-align: middle;padding:0px;">闸瓦编号</th>
                    <th style="text-align: center;vertical-align: middle;" width="18%;padding:0px;">检测时间</th>
                    <th style="text-align: center;vertical-align: middle;padding:0px;">厚度</th>
                    <th style="text-align: center;vertical-align: middle;padding:0px;">图片</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pageBean.recordList}" var="zha" varStatus="vs">
                    <tr>
                        <td style="text-align: center;vertical-align: middle;">
                                ${zha.trainId}
                        </td>
                        <td style="text-align: center;vertical-align: middle;">
                                ${zha.cheXiangNo}
                        </td>
                        <td style="text-align: center;vertical-align: middle;">
                                ${zha.brakeNo}
                        </td>
                        <td style="text-align: center;vertical-align: middle;">
                            <fmt:formatDate value="${zha.dateNow}" pattern="yyyy-MM-dd HH:mm:ss aa"/>
                        </td>
                        <c:choose>
                            <c:when test="${zha.brakeThickness >=13}">
                                <td class="exception" style="background-color:red;text-align: center;vertical-align: middle;">
                                        ${zha.brakeThickness}
                                </td>
                            </c:when>
                            <c:when test="${zha.brakeThickness >=10 && zha.brakeThickness<13}">
                                <td class="exception" style="background-color:yellow;text-align: center;vertical-align: middle;">
                                        ${zha.brakeThickness}
                                </td>
                            </c:when>
                            <c:otherwise>
                                <td style="text-align: center;vertical-align: middle;">
                                        ${zha.brakeThickness}
                                </td>
                            </c:otherwise>
                        </c:choose>
                        <td style="text-align: center;vertical-align: middle;" width="16%">
                            <button class="btn btn-info" type="button" style="width:65%;" onclick="picture('${zha.photoPath}','查看')">实时</button>
                        </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </div>
        <div class="pagin" style="margin-left:3%;width:90%;">
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
        <div style="background-image: url(images/train.jpg );background-repeat:no-repeat; margin-left:4%;background-position:left; width:80%;height:108px;"></div>
    </div>
</div>
</div>

<div id="dlg" class="modal hide fade" tabindex="-1" style="left:30%;width:80%;height:80%;margin-top:-2%;" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">图片信息 &nbsp共<span id="imgNumber" style="color:red;"></span>张图片
                <button id="pre" style="font-family:宋体;font-weight: bold; margin-left:60px;" onclick="pre()" class="btn btn-success">上一张</button>
                <button id="next" style="font-family:宋体;font-weight: bold; margin-left:20px;" onclick="next()" class="btn btn-info">下一张</button>
                <span id="pageinfo" style="font-size:15px;font-family:宋体;margin-left:40px;"></span>
            </h4><input type="hidden" id="imgnohidden"/>
        </div>
        <div class="modal-body" style="width:auto;max-height:600px;margin-top:0px;height:auto;padding:1px;">
            <div class="item">
                <a class="fancybox-button" data-rel="fancybox-button" id="ahref" href="" title="点击放大" target="_blank">
                    <div class="zoom">
                        <div id="showpicture">
                            <img width="100%" height="70%"  id="imghref" src=""/>
                        </div>
                        <div class="zoom-icon" ></div>
                    </div>
                </a>
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
        $("#hd").addClass("has-sub active");
        $("#hd1").addClass("active");
        $("#zou").addClass("active");
        $("#zou").css("backgroud-color","red");
    });
</script>
</body>
</html>
