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
    <title> 受电弓动态监测系统</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-datepicker/css/datepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-timepicker/compiled/timepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/css/page.css"  />
    <script type="text/javascript" src="js/user/user.js"></script>
    <script>
	 function checkUser(){
        var flag=false;
        var id=$("#id").val();
        var realName=$("#realName").val();
        var posi=$("#posi").val();
        var depart=$("#depart").val();
        var password=$("#password").val();
        $('#realName').css("border-color","green");
        $('#id').css("border-color","green");
        $('#posi').css("border-color","green");
        $('#password').css("border-color","green");
          if(id==""){
            $('#id').css("border-color","red");
		    $('#errroinfo').html('请填写用户id');
            return false;
        }
          if(realName==""){
            $('#realName').css("border-color","red");
		    $('#errroinfo').html('请填写真实姓名');
            return false;
        }
          if(password==""){
            $('#password').css("border-color","red");
		    $('#errroinfo').html('请填写用户初始密码');
            return false;
        }
          if(posi==""){
            $('#posi').css("border-color","red");
		    $('#errroinfo').html('请填写用户的职位');
            return false;
        }
        var url='register/existUser.action';
        var data={"id":id};
        $.ajax({
            type:'post',
            async:false,
            cache:false,
            url:url,
            data:data,
            success:function(param){
                if(param.error1 =="false"){
               	 	$("#id").val('');
               	 	 $('#id').css("border-color","red");
               	 	$("#existUser").modal();
               	 	    setTimeout(function(){
			                 $('#existUser').modal('hide');
			                },2000);
                    }else{
                        var url1 = 'register/addUser.action';
                        var data1 = {"user.id": id,"user.password":password,"user.posi":posi,"user.depart":depart,"user.realName":realName};
                        $.ajax({
                            type:'post',
                            async:false,
                            cache:false,
                            url:url1,
                            data:data1,
                            success:function (param2) {
                                if (param2.addUserInfo == "success") {
                                    $("#id").val('');
        							$("#realName").val('');
       								$("#posi").val('');
        							$("#password").val('');
                                $("#success").modal();
               	 	   		  setTimeout(function(){
			                  $('#success').modal('hide');
			                  },2000);
                                    flag=true;
                                } else {
                                   $("#id").val('');
        							$("#realName").val('');
       								$("#posi").val('');
        							$("#password").val('');
                                   $("#error").modal();
               	 	   		  		setTimeout(function(){
			                  		$('#error').modal('hide');
			                  		},2000);
                                    flag=false;
                                }
                            }
                        });
                }
            }
        });
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
                            <a href="#">管理用户</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#">添加用户</a><span class="divider-last">&nbsp;</span></li>
                    </ul>
                </div>
            </div>
            <div class="widget-body">
          <form id="regForm" action="" method="post">
          <table class="table  table-responsive" style="margin-left:20%;">
            <tbody>
            <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">用户ID：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <input type="text" id="id" name="user.id"  style="border-color: green;" />
                <span id="oldinfo" style="color:red;"></span>
              </td>
            </tr>
            <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">真实姓名：&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  id="realName" name="user.reaName" style="border-color: green;"/>
            	<span id="newinfo" style="color:red;"></span>
              </td>
            </tr>
            <tr>
              <td style="border-top: 0;">
                <span style="margin-left:5%;">初始密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="password" name="user.password"  style="border-color: green;" />
                <span id="repinfo" style="color:red;"></span>
              </td>
            </tr>
            <tr>
              <td style="border-top:0px;">
                <span style="margin-left:5%;">职&nbsp;&nbsp;位:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  id="posi" name="user.posi" style="border-color: green;"/>
            	<span id="newinfo" style="color:red;"></span>
              </td>
            </tr>
            <tr>
            <td style="border-top: 0;">
                <span style="margin-left:5%;">所在部门:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <select class="chosen" name="user.depart" id="depart"  style="width:200px;" >
                          <c:forEach items="${selectedList}" var="user" varStatus="vs">
                          <option value="${user.depart}" <c:if test="${depart eq user.depart}">selected="selected"</c:if>>${user.depart}</option>
                        </c:forEach>
                  </select>
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
