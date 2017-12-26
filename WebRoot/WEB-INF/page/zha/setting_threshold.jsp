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
    <title> 列车动态监测系统</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-datepicker/css/datepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-timepicker/compiled/timepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/css/page.css"  />
    <script>
	 function checkUser(){
        var flag=false;
        var centerBiaseThreshold=$("#centerBiaseThreshold").val();
        var lRAangleThreshold=$("#lRAangleThreshold").val();
        var fBAangleThreshold=$("#fBAangleThreshold").val();
        var firstLeftThreshold=$("#firstLeftThreshold").val();
        var secondLeftThreshold=$("#secondLeftThreshold").val();
        var pressThreshold=$("#pressThreshold").val();
        var cpuTempThreshold=$("#cpuTempThreshold").val();
        var devTempThreshold=$("#devTempThreshold").val();
        var devTempBThreshold=$("#devTempBThreshold").val();
        $('#centerBiaseThreshold').css("border-color","green");
        $('#lRAangleThreshold').css("border-color","green");
        $('#fBAangleThreshold').css("border-color","green");
        $('#firstLeftThreshold').css("border-color","green");
        $('#secondLeftThreshold').css("border-color","green");
        $('#pressThreshold').css("border-color","green");
        $('#cpuTempThreshold').css("border-color","green");
        $('#devTempThreshold').css("border-color","green");
        $('#devTempBThreshold').css("border-color","green");
          if(centerBiaseThreshold==""||isNaN(centerBiaseThreshold)){
            $('#centerBiaseThreshold').css("border-color","red");
		    $('#errroinfo').html('中心线阈值填写有误');
            return false;
        }
          if(lRAangleThreshold==""||isNaN(lRAangleThreshold)){
            $('#lRAangleThreshold').css("border-color","red");
		    $('#errroinfo').html('左右倾斜阈值填写有误');
            return false;
        }
          if(fBAangleThreshold==""||isNaN(fBAangleThreshold)){
            $('#fBAangleThreshold').css("border-color","red");
		    $('#errroinfo').html('前后倾斜阈值填写有误');
            return false;
        }
          if(firstLeftThreshold==""||isNaN(firstLeftThreshold)){
            $('#firstLeftThreshold').css("border-color","red");
		    $('#errroinfo').html('碳滑板一剩余量阈值填写有误');
            return false;
        }
	    if(secondLeftThreshold==""||isNaN(secondLeftThreshold)){
            $('#secondLeftThreshold').css("border-color","red");
		    $('#errroinfo').html('碳滑板二剩余量阈值填写有误');
            return false;
        }
        if(pressThreshold==""||isNaN(pressThreshold)){
            $('#pressThreshold').css("border-color","red");
		    $('#errroinfo').html('压力阈值填写有误');
            return false;
        }
         if(cpuTempThreshold==""||isNaN(cpuTempThreshold)){
            $('#cpuTempThreshold').css("border-color","red");
		    $('#errroinfo').html('cpu温度阈值填写有误');
            return false;
        }
        if(devTempThreshold==""||isNaN(devTempThreshold)){
            $('#devTempThreshold').css("border-color","red");
		    $('#errroinfo').html('设备一温度阈值填写有误');
            return false;
        }
        if(devTempBThreshold==""||isNaN(devTempBThreshold)){
            $('#devTempBThreshold').css("border-color","red");
		    $('#errroinfo').html('设备二阈值填写有误');
            return false;
        }
        var url='register/modifyThreshold.action';
        var data = {
        	"threshold.centerBiaseThreshold": centerBiaseThreshold,
         	"threshold.lRAangleThreshold":lRAangleThreshold,
         	"threshold.fBAangleThreshold":fBAangleThreshold,
         	"threshold.firstLeftThreshold":firstLeftThreshold,
         	"threshold.secondLeftThreshold":secondLeftThreshold,
         	"threshold.pressThreshold":pressThreshold,
         	"threshold.cpuTempThreshold":cpuTempThreshold,
         	"threshold.devTempThreshold":devTempThreshold,
         	"threshold.devTempBThreshold":devTempBThreshold
         	};
        $.ajax({
            type:'post',
            async:false,
            cache:false,
            url:url,
            data:data,
            success:function(param){
                if(param.modifyThresholdInfo =="true"){
               	 	$("#success").modal();
               	 	    setTimeout(function(){
			                 $('#success').modal('hide');
			                 window.location.href="Setting_threshold.action";
			                },2000);
			                flag=true;
                 }else{
                    $("#error").modal();
               	 	    setTimeout(function(){
			                 $('#error').modal('hide');
			                 window.location.href="Setting_threshold.action";
			                },2000);
			                flag=false;
                }
            }
        });    /**/
        return flag;
  }
	
    </script>
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
                      	  列车
                        <small> 动态检测系统 </small>
                    </h3>
                    <ul class="breadcrumb">
                        <li>
                            <a href="#"><i class="icon-home"></i></a><span class="divider">&nbsp;</span>
                        </li>
                        <li>
                            <a href="#">管理员权限</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#"></a>修改阈值<span class="divider-last">&nbsp;</span></li>
                    </ul>
                </div>
            </div>
            <div class="widget-body">
          <form id="regForm" action="" method="post">
          <table class="table  table-responsive" style="margin-left:20%;">
            <tbody>
            <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">中心线偏移阈值：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <input type="text" id="centerBiaseThreshold" name="threshold.centerBiaseThreshold"  value="${threshold.centerBiaseThreshold}" style="border-color: green;" />
                <span id="oldinfo" style="color:red;"></span>
              </td>
            </tr>
            <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">左右倾斜度阈值:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <input type="text"  id="lRAangleThreshold" name="threshold.lRAangleThreshold" value="${threshold.lRAangleThreshold}" style="border-color: green;"/>
            	<span id="newinfo" style="color:red;"></span>
              </td>
            </tr>
            <tr>
              <td style="border-top: 0;">
                <span style="margin-left:5%;">前后倾斜度阈值:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <input type="text" id="fBAangleThreshold" name="threshold.fBAangleThreshold" value="${threshold.fBAangleThreshold}" style="border-color: green;" />
                <span id="repinfo" style="color:red;"></span>
              </td>
            </tr>
            <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">碳滑量一阈值:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  id="firstLeftThreshold" name="threshold.firstLeftThreshold" value="${threshold.firstLeftThreshold}" style="border-color: green;"/>
            	<span id="newinfo" style="color:red;"></span>
              </td>
            </tr>
             <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">碳滑量二阈值:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  id="secondLeftThreshold" name="threshold.secondLeftThreshold" value="${threshold.secondLeftThreshold}" style="border-color: green;"/>
            	<span id="newinfo" style="color:red;"></span>
              </td>
            </tr>
             <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">受电弓压力阈值:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  id="pressThreshold" name="threshold.pressThreshold" value="${threshold.pressThreshold}" style="border-color: green;"/>
            	<span id="newinfo" style="color:red;"></span>
              </td>
            </tr>
             <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">CPU温度阈值:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  id="cpuTempThreshold" name="threshold.cpuTempThreshold" value="${threshold.cpuTempThreshold}" style="border-color: green;"/>
            	<span id="newinfo" style="color:red;"></span>
              </td>
            </tr>
             <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">设备A温度阈值:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  id="devTempThreshold" name="threshold.devTempThreshold" value="${threshold.devTempThreshold}" style="border-color: green;"/>
            	<span id="newinfo" style="color:red;"></span>
              </td>
            </tr>
              <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">设备B温度阈值:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  id="devTempBThreshold" name="threshold.devTempBThreshold" value="${threshold.devTempBThreshold}" style="border-color: green;"/>
            	<span id="newinfo" style="color:red;"></span>
              </td>
            </tr>
            <tr>
            <td style="border-top: 0;"><span id="errroinfo" style="color:red;margin-left:20%;"></span></sapn></td>
            </tr>
            <tr>
            	<td style="border-top:0px;">
            	<input type="hidden" id="error1"/>
            	<input type="reset" class="btn btn-warning" style="margin-left:20%;"/>&nbsp;&nbsp;&nbsp;&nbsp;
            	<button type="button" class="btn btn-success"  type="button" onclick="checkUser()">提交</button>
            	</td>
            </tr>
            </tbody>
          </table>
           </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="existUser" tabindex="-1" role="dialog"   style="margin-top: 10%" aria-labelledby="myModalLabelr3"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">&times;</button>
          <h4 style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-title" id="myModalLabel3">error</h4>
        </div>
        <div style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-body">用户账号已经存在!</div>
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
    });
</script>
</body>
</html>
