<%@ page language="java" pageEncoding="utf-8" isELIgnored="false"
         contentType="text/html; charset=utf-8"%>
<div id="sidebar" class="nav-collapse collapse">
  <div class="sidebar-toggler hidden-phone"></div>
  <div class="navbar-inverse">
    <form class="navbar-search visible-phone">
      <input type="text" class="search-query" placeholder="Search" />
    </form>
  </div>
  <ul class="sidebar-menu">
    <li class="has-sub" id="cd">
      <a href="javascript:;" class="">
        <span class="icon-box"> <i class="icon-edit"></i></span> 当日数据
        <span class="arrow"></span>
      </a>
      <ul class="sub">
        <li id="cd1"><a class="" href="Current_all.action" >综合数据</a></li>
        <li id="cd2"><a class="" href="Current_board.action" >滑板磨耗</a></li>
        <li id="cd3"><a class="" href="Current_line.action">中心线偏移</a></li>
        <li id="cd4"><a class="" href="Current_lean.action">受电弓倾斜</a></li>
        <li id="cd5"><a class="" href="Current_press.action">弓网压力</a></li>
      </ul>
    </li>
    <li class="has-sub" id="hd">
      <a href="javascript:;" class="">
        <span class="icon-box"> <i class="icon-calendar"></i></span> 历史数据
        <span class="arrow"></span>
      </a>
      <ul class="sub">
        <li id="hd1"><a class="" href="History_all.action">综合数据</a></li>
        <li id="hd2"><a class="" href="History_board.action">滑板磨耗</a></li>
        <li id="hd3"><a class="" href="History_line.action">中心线偏移</a></li>
        <li id="hd4"><a class="" href="History_lean.action">受电弓倾斜</a></li>
        <li id="hd5"><a class="" href="History_press.action">弓网压力</a></li>
      </ul>
    </li>
    <li class="has-sub" id="ad">
      <a href="javascript:;" class="">
        <span class="icon-box"> <i class="icon-signal"></i></span> 数据分析
        <span class="arrow"></span>
      </a>
      <ul class="sub">
        <li id="ad1"><a class="" href="Analyse_abrasion.action">磨耗统计</a></li>
        <li id="ad2"><a class="" href="Analyse_offset.action">偏移统计</a></li>
        <li id="ad3"><a class="" href="Analyse_lean.action">倾斜统计</a></li>
        <li id="ad4"><a class="" href="Analyse_press.action">压力统计</a></li>
      </ul>
    </li>
    <li class="has-sub" id="vd">
      <a href="javascript:;" class="">
        <span class="icon-box"> <i class="icon-facetime-video"></i></span> 视频数据
        <span class="arrow"></span>
      </a>
      <ul class="sub">
        <li id="vd1" ><a class="" href="Video_current.action">当日视频</a></li>
        <li id="vd2"><a class="" href="Video_history.action">历史视频</a></li>
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
