<%@ page language="java" pageEncoding="utf-8" isELIgnored="false"
         contentType="text/html; charset=utf-8"%>
<div id="header" class="navbar navbar-inverse navbar-fixed-top">
    <!-- BEGIN TOP NAVIGATION BAR -->
    <div class="navbar-inner">
        <div class="container-fluid" id="printhead" style="background-image: url(images/logo6.jpg);background-repeat:no-repeat;background-position: 216px 0px;">
            <!-- BEGIN LOGO -->
            <a class="brand" href="" style="background-image:url(images/user.jpg );background-repeat:no-repeat;background-color:#32c2cd;">
               <!--   <img src="img/logo.png" alt="Admin Lab" />-->
                <span  style="font-size: 0px;color:white;" >动车组综合在线检测系统</span>
            </a>
            <div id="top_menu" class="nav notify-row">
            	<ul id="myTab" class="nav  nav-pills" style="margin-top:1px;">
				    <li style="font-size:22px;" id="shou"><a href="History_all.action" style="color:darkgreen;" >受电弓</a></li>
				    <li style="font-size:22px;" id="zou" ><a href="Zou_newData.action" style="color:darkgreen;">走行部</a></li>
                    <!--<li style="font-size:22px;" id="zha" ><a href="Zha_newData.action">闸 瓦</a></li> -->
				</ul>

            </div>
            <!-- END  NOTIFICATION -->
            <div class="top-nav " >
                <ul class="nav pull-right top-menu" >
                    <li class="dropdown" style="background-color: #000;">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <%--<img src="img/avatar1_small.jpg" alt="">--%>
						  <c:if test="${currentUser.posi =='管理员'}">
                            <span class="username">管理员</span>
                            </c:if>
                            <c:if test="${currentUser.posi !='管理员'}">
                            <span class="username">用户</span>
                            </c:if>
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                           <!--   <li><a href="User_list.action"><i class="icon-user"></i> 个人信息</a></li>-->
                              <c:if test="${currentUser.posi =='管理员'}">
                           	 	<li><a href="User_list.action"><i class="icon-cog"></i> 管理用户</a></li>
                           	 	<li><a href="User_add.action"><i class="icon-cog"></i> 添加用户</a></li>
                            </c:if>
                            <li class="divider"></li>
                            <li><a href="javascript:logout()"><i class="icon-off"></i> 退出</a></li>
                        </ul>
                    </li>
                    <!-- END USER LOGIN DROPDOWN -->
                </ul>
                <!-- END TOP NAVIGATION MENU -->
            </div>
        </div>
    </div>
    <!-- END TOP NAVIGATION BAR -->
</div>
<script>
function logout(){
		$("#islogout").modal();
}
function sure_logout(){
	window.location.href="User_logout.action";
}
</script>

<div class="modal fade" id=islogout tabindex="-1" role="dialog"
       style="margin-left:-20%" aria-labelledby="myModalLabel1"
       aria-hidden="true">
      <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel9">警告</h4>
                </div>
                <div style="font-family:Arial;font-weight: bold;"  class="modal-body">您确定退出系统? </div>
                <div class="modal-footer">
                    <a href="javascript:sure_logout()"><button style="font-family:Arial;font-weight: bold;" type="button" class="btn btn-primary" >确定</button></a>
                    <button style="font-family:Arial;font-weight: bold;" type="button" class="btn btn-primary" data-dismiss="modal" >返回</button>
                </div>
            </div>
        </div>
  </div>