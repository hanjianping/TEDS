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

    <style type="text/css">
        .shou{
            width: 100%;
            height:400px;
            overflow: scroll;
        }
        .test {
            width: 10000px;
            height: 682px;
            background-image:url(images/link/1/1.jpg);
            background-repeat: no-repeat;
            background-size: auto 100%;
        }
      </style>
  <script type="text/javascript">
  function showpiture(no,id){
      btno=$("#tmp_button").val()
      $("#"+btno).css("background-color"," #1b6d85")
      $("#"+no).css("background-color","orange");
      id2=$("#tmp_no1").val();
      if (id2>=1) {
          id2 = id2;
      }else{
          id2=1;
      }
      $("#picture_show").css("background-image","url(images/link/"+id+"/"+id2+".jpg)")
      $("#tmp_button").val(no);
      $("#tmp_no").val(id);
  }
  function showpiture1(no,id){
      btno=$("#tmp_button1").val()
      $("#"+btno).css("background-color"," #445566")
      $("#"+no).css("background-color","orange");
      $("#tmp_button1").val(no);
      id2=$("#tmp_no").val();
      if (id2>=1) {
          id2 = id2;
      }else{
          id2=1;
      }
      $("#picture_show").css("background-image","url(images/link/"+id2+"/"+id+".jpg)")
      $("#tmp_no1").val(id);
  }
  function errorLocation(){
      $('#guzhangdian').modal();
      if (event.stopPropagation){
          event.stopPropagation();
      }
      else{
          event.cancelBubble=true;
      }

      if (event.preventDefault){
          event.preventDefault();
      }
      else{
          event.returnValue=false;
      }
  }

  function clearError(){
      color=$("#button1").css('background-color');
      $("#button1h").css("background-color","transparent");
      $("#button1h").text("");
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
                    <li id="zx2"><a class="" href="Zou_troubleData.action" >故障识别</a></li>
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
                    <li id="hd1"><a class="" href="Zha_historyData.action">闸瓦历史数据</a></li>
                </ul>
            </li>
            <li class="has-sub" id="ad">
                <a href="javascript:;" class="">
                    <span class="icon-box"> <i class="icon-signal"></i></span> 数据分析
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <li id="ad1"><a class="" href="Zou_trainAnalyse.action">车型统计</a></li>
                    <li id="ad2"><a class="" href="">故障类型统计</a></li>
                    <li id="ad3"><a class="" href="">列车不同位置统计</a></li>
                    <li id="ad4"><a class="" href="">列车运行故障数量统计</a></li>
					<li id="ad5"><a class="" href="">闸瓦按时间统计</a></li>
					<li id="ad6"><a class="" href="">闸瓦按公里数统计</a></li>
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
        <div class="container-fluid" >
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
                        <small> 检测系统 </small>
                    </h3>
                    <ul class="breadcrumb">
                        <li>
                            <a href="#"><i class="icon-home"></i></a><span class="divider">&nbsp;</span>
                        </li>
                        <li>
                            <a href="#">最新数据</a> <span class="divider">&nbsp;</span>
                        </li>
                        <li><a href="#">图片展示</a><span class="divider-last">&nbsp;</span></li>
                    </ul>
                </div>
            </div>
        <div class="widget-body">
            <table class="table" style="border:0px;"><tr style="margin-bottom: 0px;padding:0px;"><td style="width:auto;"></td></tr></table>
            <label  style="vertical-align:top; margin-left:1%;display:inline-block;color:#1b6d85">列车编号:ZE503605</label>
            <label  style="vertical-align:top;margin-left:8%;display:inline-block;color:#1b6d85">检测时间:2017-12-25 13:23:23</label>
            <label  style="vertical-align:top; margin-left:8%;display:inline-block;color:#1b6d85">车厢总数:8</label>
            <label  style="vertical-align:top;margin-left:8%;display:inline-block;color:#1b6d85">平均速度:35 km/h</label>
           <div  class="shou"  style="margin-left:1%;"><div class="test" id="picture_show" ></div></div>
            <div style="margin-left:2%;margin-top:1%;">
                <input type="hidden" id="tmp_button" value="btn1">
                <input type="hidden" id="tmp_button1" value="button1">
                <input type="hidden" id="tmp_no" value="1">
                <input type="hidden" id="tmp_no1" vallue="1">
                <button type="button"  class="btn btn-default" style="width:100px;color:white;background-color: #265a88;">监控部位</button>
                <button type="button" onclick="showpiture('btn1','1')" id="btn1" class="btn btn-info" style="width:100px;background-color: orange;">顶    部</button>
                <button type="button" onclick="showpiture('btn2','2')" id="btn2" class="btn btn-info" style="width:100px;background-color: #1b6d85;">底    中</button>
                <button type="button" onclick="showpiture('btn3','3')" id="btn3" class="btn btn-info" style="width:100px;background-color: #1b6d85;"> 左    侧</button>
                <button type="button" onclick="showpiture('btn4','4')" id="btn4" class="btn btn-info" style="width:100px;background-color: #1b6d85;">右    侧</button>
                <button type="button" onclick="showpiture('btn5','5')" id="btn5" class="btn btn-info" style="width:100px;background-color: #1b6d85;">轨外左侧</button>
                <button type="button" onclick="showpiture('btn6','6')" id="btn6" class="btn btn-info" style="width:100px;background-color: #1b6d85;">轨外右侧</button>
                <button type="button" onclick="showpiture('btn7','7')" id="btn7" class="btn btn-info" style="width:105px;background-color: #1b6d85;">轨内左侧</button>
                <button type="button" onclick="showpiture('btn8','8')" id="btn8" class="btn btn-info" style="width:105px;background-color: #1b6d85;">轨内右侧</button>
            </div>
            <div style="margin-top:2%;margin-left:2%;">
                <button type="button" style="width:100px;height:80px;color:white;background-color: #265a88;" class="btn btn-info">过车序号</button>
            </div>
            <div style="margin-left: 11%; margin-top: -7%;">
                <button type="button" onclick="showpiture1('button1','1')" id="button1" style="width:100px;margin-left:5px;background-color: orange;" class="btn btn-info">
                    01车厢
                    <span onclick="errorLocation()" id="button1h" style="height:20px;width:20px;margin-top:-20px;margin-left:10px;cursor:pointer;margin-right:-25px;background-color:#F00; border-radius:25px; display:inline-table; color:#FFF; ">1</span>
                </button>
                <button type="button" onclick="showpiture1('button2','2')" id="button2" style="width:100px;background-color: #445566;" class="btn btn-info">02号车厢</button>
                <button type="button"  onclick="showpiture1('button3','3')" id="button3" style="width:100px;background-color: #445566;" class="btn btn-info">03号车厢</button>
                <button type="button"  onclick="showpiture1('button4','4')" id="button4" style="width:100px;background-color: #445566;" class="btn btn-info">04号车厢</button>
                <button type="button"  onclick="showpiture1('button5','5')" id="button5" style="width:100px;background-color: #445566;" class="btn btn-info">05号车厢</button>
                <button type="button" id="button6"  onclick="showpiture1('button6','6')" style="width:100px;background-color: #445566;" class="btn btn-info">06号车厢</button>
                <button type="button"   onclick="showpiture1('button7','7')" id="button7" style="width:100px;background-color: #445566;" class="btn btn-info">07号车厢</button>
                <button type="button"  onclick="showpiture1('button8','8')" id="button8" style="width:100px;background-color: #445566;" class="btn btn-info">08号车厢</button>
            </div>
            <div style="margin-left: 11%; margin-top: 1%;">
                <button type="button" id="button9" onclick="showpiture1('button9','1')"  style="width:100px;margin-left:5px;background-color: #445566;" class="btn btn-info">09</button>
                <button type="button" id="button10" onclick="showpiture1('button10','2')" style="width:100px;background-color: #445566;" class="btn btn-info">10</button>
                <button type="button" id="button11" onclick="showpiture1('button11','3')" style="width:100px;background-color: #445566;" class="btn btn-info">11</button>
                <button type="button" id="button12" onclick="showpiture1('button12','4')" style="width:100px;background-color: #445566;" class="btn btn-info">12</button>
                <button type="button" id="button13" onclick="showpiture1('button13','5')" style="width:100px;background-color: #445566;" class="btn btn-info">13</button>
                <button type="button" id="button14" onclick="showpiture1('button14','6')" style="width:100px;background-color: #445566;" class="btn btn-info">14</button>
                <button type="button" id="button15" onclick="showpiture1('button15','7')" style="width:100px;background-color: #445566;" class="btn btn-info">15</button>
                <button type="button" id="button16" onclick="showpiture1('button16','8')" style="width:100px;background-color: #445566;" class="btn btn-info">16</button>
            </div>


        </div>
    </div>
</div>
</div>

<%-- 修改密码 --%>
<div id="guzhangdian" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"
                aria-hidden="true" onclick="return resetValue()">×</button>
        <h3 style="font-family:Arial;font-weight: bold;font-size:16px;"  id="myModalLabel9">故障</h3>
    </div>
    <div class="modal-body">
        <div style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-body">发现故障点,坐标在(626,818)</div>
    </div>
    <div class="modal-footer">
        <font id="Modifyerror" style="color: red;"></font>
        <button style="font-family:Arial;font-weight: bold;" type="submit" class="btn btn-success" data-dismiss="modal" aria-hidden="true"
                onclick="clearError()" >已经阅读</button>
        <button style="font-family:Arial;font-weight: bold;" class="btn btn-primary" onclick="return resetValue()">关闭本页面</button>
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

<script>
    jQuery(document).ready(function() {

        App.init();
        $("#zx").addClass("has-sub active");
        $("#zx1").addClass("active");
        $("#zou").addClass("active");
    });
</script>
</body>
</html>
