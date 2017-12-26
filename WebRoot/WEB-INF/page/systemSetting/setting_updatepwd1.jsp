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
    <title> 海尔开利销售工具管理系统需求列表</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-datepicker/css/datepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-timepicker/compiled/timepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/assets/bootstrap-daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" type="text/css" href="resources/resource/css/page.css"  />
    <script type="text/javascript" src="resources/resource/page/contact/contact.js"></script>
</head>
<body class="fixed-top">
<%@ include file="../main/head.jsp" %>
<div id="container" class="row-fluid">
    <%@ include file="../main/left.jsp"%>
    <div id="main-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span12">
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
                            <a href="#">系统设置</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#">修改密码</a><span class="divider-last">&nbsp;</span></li>
                    </ul>
                </div>
            </div>
            <div class="widget-body">
            <input type="hidden" id="currentUserPWD" value="${currentUSe.password}"/>
            <input type="hidden" id="currentUserID" value="${currentUSe.id}"/>
                <form id="form" class="form-horizontal" style="margin-bottom:1%;">
                    <table class="table" style="border:0px;">
                        <tbody>
                        <tr style="margin-bottom: 0px;padding:0px;">
                        	   <td style="border-top: 0;">
                					<span style="margin-left:5%;">原密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;
               						 <input type="text" id="oldpwd" style="border-color: red;" onblur="isEmpty('oldpwd','请输入原密码')"/>
                						<span class="input-error tooltips" data-original-title="请输入原密" id="oldpwdMsg">
                   							<i class="icon-exclamation-sign" style="color: #B94A48" id="oldpwdIcon"></i>
                             	</td>
                          </tr>
                             <tr style="margin-bottom: 0px;padding:0px;">
                        	 <td style="border-top: 0;">
                					<span style="margin-left:5%;">新密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;
               						 <input type="text" id="newpwd" style="border-color: red;" onblur="isEmpty('newpwd','请输入新密码')"/>
                						<span class="input-error tooltips" data-original-title="请输入新密码" id="newpwdMsg">
                   							<i class="icon-exclamation-sign" style="color: #B94A48" id="newpwdIcon"></i>
                             	</td>
                          </tr>
                             <tr style="margin-bottom: 0px;padding:0px;">
                        	 <td style="border-top: 0;">
                					<span style="margin-left:5%;">重新输入：&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;
               						 <input type="text" id="repwd" style="border-color: red;" onblur="isEmpty('repwd','请重新输入')"/>
                						<span class="input-error tooltips" data-original-title="请重新输入" id="repwdMsg">
                   							<i class="icon-exclamation-sign" style="color: #B94A48" id="repwdIcon"></i>
                   					  </span>
                             	</td>
                          </tr>
                          <tr>
                            <td width="auto;" style="border-top:0px;">
                               <button style="width:auto;margin-left:16%;" type="submit" class="btn btn-primary" >重置&nbsp;<i class="icon  icon-check"></i></button>
                               &nbsp; &nbsp; &nbsp;
                               <button style="width:auto;" type="submit" onclick="subModifyPEWD();" class="btn btn-danger" >提交&nbsp;<i class="icon   icon-share-alt"></i></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                
                
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
          $("#ss").addClass("has-sub active");
        $("#ss2").addClass("active");
    });
</script>
</body>
</html>
