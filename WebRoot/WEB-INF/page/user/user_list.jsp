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
    <%--用户删除判断 --%>
    <script>
    function userDelete(id){
	 if(${currentUser.id}==null || ${currentUser.id} =='' || ${currentUser.id}==id){
	 	$('#error').modal();
         setTimeout(function(){
         $('#error').modal('hide');
         },2000);
	 }else{
		 $('#idhidd').val(id);
		$('#isDelete').modal();	
	 }
	}
	
	function modifyUse(id,realName,depart,posi){
	if(${currentUser.id}==null || ${currentUser.id} =='' || ${currentUser.id}==id){
	 	$('#error').modal();
         setTimeout(function(){
         $('#error').modal('hide');
         },2000);
	 }else{
	 $('#idshow').val(id);
	 $('#realNameshow').val(realName);
	 $('#departshow').val(depart);
	 $('#posishow').val(posi);
	 $('#idhidd').val(id);
	  $('#dlg').modal();
	 }
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
                        <li><a href="#">用户信息</a><span class="divider-last">&nbsp;</span></li>
                    </ul>
                </div>
            </div>
            <div class="widget-body">
                    <table class="table" style="border:0px;">
                        <tbody>
                        <tr style="margin-bottom: 0px;padding:0px;">
                        	<td style="width:auto;">
                        		<div class="control-group">
                        		<label  style="vertical-align:top;margin-top:3%;display:inline-block;">用户ID:</label>
                                <input  style="font-family:Arial; width:120px;" id="id" name="id" value="${id}" type="text" class="input-medium search-query" />
                                 </div>
                             </td>
                             <td style="width:auto;">
                        		<div class="control-group">
                        		<label  style="vertical-align:top;margin-top:3%;display:inline-block;">真实姓名:</label>
                                <input  style="font-family:Arial; width:120px;" id="realName" name="reaName" value="${realName}" type="text" class="input-medium search-query"/>
                                 </div>
                             </td>
                              <td width="auto">
                               	<div class="control-group">
                        		<label  style="vertical-align:top;margin-top:3%;display:inline-block;">所在部门</label>
                                <select class="chosen"  id="depart"  style="width:auto;" >
                                  	 <option value="">所有部门</option>
                                  	 <c:forEach items="${selectedList}" var="user" varStatus="vs">
                                      <option value="${user.depart}" <c:if test="${depart eq user.depart}">selected="selected"</c:if>>${user.depart}</option>
                                     </c:forEach>
                                  </select>
                                  </div>
                              </td>
                          <td>
							<a href="javascript:searchTrain()"><button style="width:auto;margin-left:23%;" type="submit" class="btn btn-primary"  title="Search" >搜索数据&nbsp;<i class="icon  icon-search"></i></button></a>
                          </td>
                        </tr>
                     	
                        </tbody>
                  </table>
               <table class="table table-bordered table-cell table-hover" style="margin-top:1%;">
                    <thead>
                    <tr>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">用户账号</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">密码</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">真实姓名</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">部门</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">职位</th>
                        <th style="text-align: center;vertical-align: middle;padding:0px;">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach items="${pageBean.recordList}" var="user" varStatus="vs">
                        <tr>
                        	<td>
                        	${user.id}
                        	</td>
                        	<td>
                        	${user.password}
                        	</td>
                        	<td>
                        	${user.realName}
                        	</td>
                        	<td>
                        	${user.depart}
                        	</td>
                        	<td>
                        	${user.posi}
                        	</td>
                            <td style="text-align: center;vertical-align: middle;" width="23%">
											<button class="btn btn-info" type="button"  onclick=" return modifyUse(${user.id},'${user.realName}','${user.depart}','${user.posi}')">修改</button>&nbsp;
											<button class="btn btn-danger" type="button"  onclick="userDelete('${user.id}')">删除</button>
							</td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
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

<div id="dlg" class="modal hide fade"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true" onclick="return resetValue()">×</button>
				<h3 id="myModalLabel" style="font-family:Arial;font-size:14px;font-weight: bold;">修改用户信息</h3>
			</div>
			<form id="fm" method="post"  action="User_modifyUser.action" onsubmit="return checkUser()">
			<div class="modal-body">
				
					<table>
						<tr>
							<td>
								<label style="font-family:Arial;font-size:14px;font-weight: bold;" class="control-label" for="userName">id：</label>
							</td>
							<td>
								<input style="font-family:Arial;font-size:14px;font-weight: bold;" id="idshow" disabled="disabled"  type="text" name="userId">
							</td>
						</tr>
						<tr>
							<td>
								<label style="font-family:Arial;font-size:14px;font-weight: bold;" class="control-label" for="trueName">真实姓名：</label>
							</td>
							<td>
								<input style="font-family:Arial;font-size:14px;font-weight: bold;" id="realNameshow" type="text" name="user.realName">
							</td>
						</tr>
						
						<tr>
							<td>
								<label style="font-family:Arial;font-size:14px;font-weight: bold;" class="control-label" for="face">职位：</label>
							</td>
							<td>
								<input style="font-family:Arial;font-size:14px;font-weight: bold;" id="posishow" type="text" name="user.posi">
							
							</td>
						</tr>
						<tr>
							<td>
								<label style="font-family:Arial;font-size:14px;font-weight: bold;" class="control-label" for="password">部门：</label>
							</td>
							<td>
								<select class="chosen"  id="departshow" name="user.depart" style="width:220px;;" >
                                  	 <option value="">所有部门</option>
                                  	 <c:forEach items="${selectedList}" var="user" varStatus="vs">
                                      <option value="${user.depart}">${user.depart}</option>
                                     </c:forEach>
                                  </select>
							</td>
						</tr>
					</table>
					<input type="hidden" name="user.id" id="idhidd"/>
			</div>
			<div class="modal-footer">
				<font id="error_modify" style="color: red;"></font>
				<button style="font-family:Arial;font-size:14px;font-weight: bold;" class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
				<button style="font-family:Arial;font-size:14px;font-weight: bold;" class="btn btn-primary" type="submit">修改</button>
			</div>
		</form>
		</div>
	</div>
<div>
  <div class="modal fade" id="isDelete" tabindex="-1" role="dialog"
       style="margin-top: 10%" aria-labelledby="myModalLabel2"
       aria-hidden="true">
      <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel9">警告</h4>
                </div>
                <div style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-body">您确定要删除该用户?</div>
                <div class="modal-footer">
                 <button style="font-family:Arial;font-size:14px;font-weight: bold;" type="button" class="btn btn-primary" onclick="return sureDelete()">删除</button>
                    <button style="font-family:Arial;font-size:14px;font-weight: bold;" type="button" class="btn btn-primary" data-dismiss="modal">返回</button>
                </div>
            </div>
        </div>
  </div>
</div>

<div class="modal fade" id="success" tabindex="-1" role="dialog"   style="margin-top: 10%" aria-labelledby="myModalLabelr3"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">&times;</button>
          <h4 style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-title" id="myModalLabel3">success</h4>
        </div>
        <div style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-body">操作成功!</div>
      </div>
    </div>
  </div>

<div class="modal fade" id="error" tabindex="-1" role="dialog"   style="margin-top: 10%" aria-labelledby="myModalLabelr3"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">&times;</button>
          <h4 style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-title" id="myModalLabel3">sorry</h4>
        </div>
        <div style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-body">操作失败!</div>
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
