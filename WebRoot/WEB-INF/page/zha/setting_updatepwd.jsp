<%@ page language="java" pageEncoding="utf-8" isELIgnored="false"
         contentType="text/html; charset=utf-8"%>
<%@include file="../common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<!-- BEGIN HEAD -->
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
  <script type="text/javascript" src="js/setting/system_setting.js"></script>
</head>
<body class="fixed-top">
<%
if(session.getAttribute("currentUser")==null){
	response.sendRedirect("login.jsp");
	return;
}
%> 
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
                                <span class="text">样式:</span>
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
                            <a href="#">系统设置</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#">修改密码</a><span class="divider-last">&nbsp;</span></li>
                    </ul>
        </div>
      </div>
      <div class="widget-body">
        <form>
          <table class="table  table-responsive" style="margin-left:20%;">
            <tbody>
            <tr>
              <td style="border-top:0px;">
              <input type="hidden" value="${currentUser.password}" id="currentUserPWD"/>
              <input type="hidden" value="${currentUser.id}" id="currentUserID"/>
                <span style="margin-left:5%;">原密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <input type="password" id="oldpwd"  style="border-color: green;" onblur="checkOldPWD()"/>
                <span id="oldinfo" style="color:red;"></span>
              </td>
            </tr>
            <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">新密码：&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" id="newpwd" value="" style="border-color: green;"/>
            	<span id="newinfo" style="color:red;"></span>
              </td>
            </tr>
            <tr>
              <td style="border-top: 0;">
                <span style="margin-left:5%;">确认密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" id="repwd" value=""  style="border-color: green;" onblur="checkSame()"/>
                <span id="repinfo" style="color:red;"></span>
              </td>
            </tr>
            <tr>
            	<td style="border-top:0px;">
            	<input type="reset" class="btn btn-warning" style="margin-left:20%;"/>&nbsp;&nbsp;&nbsp;&nbsp;
            	<button type="button" class="btn btn-success" onclick="submodidyPWD();">提交</button>
            	</td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
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
<script src="resources/resource/page/common/tools.js"></script>
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
      $("#ss").addClass("has-sub active");
        $("#ss2").addClass("active");
  });
</script>
</body>
</html>
