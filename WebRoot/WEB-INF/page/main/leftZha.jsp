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
        <li class="has-sub" id="zx">
            <a href="javascript:;" class="">
                <span class="icon-box"> <i class="icon-edit"></i></span> 最新数据
                <span class="arrow"></span>
            </a>
            <ul class="sub">
                <li id="zx1"><a class="" href="Zha_newData.action" >综合数据</a></li>
            </ul>
        </li>
        <li class="has-sub" id="hd">
            <a href="javascript:;" class="">
                <span class="icon-box"> <i class="icon-calendar"></i></span> 历史数据
                <span class="arrow"></span>
            </a>
            <ul class="sub">
                <li id="hd1"><a class=""href="Zha_historyData.action" >综合数据</a></li>
            </ul>
        </li>
        <li class="has-sub" id="ad">
            <a href="javascript:;" class="">
                <span class="icon-box"> <i class="icon-signal"></i></span> 数据分析
                <span class="arrow"></span>
            </a>
            <ul class="sub">
                <li id="ad1"><a class="" href="Zha_analyseTime.action">按时间统计</a></li>
                <li id="ad2"><a class="" href="Zha_analyseMiles.action">按公里数统计</a></li>
            </ul>
        </li>
        <li class="has-sub" id="st">
            <a href="javascript:;" class="">
                <span class="icon-box"> <i class="icon-retweet"></i></span> 系统状态
                <span class="arrow"></span>
            </a>
            <ul class="sub">
                <li id="st1"><a class="" href="Zha_currentStatus.action">系统当日状态</a></li>
                <li id="st2"><a class=""  href="Zha_historyStatus.action">系统历史状态</a></li>
                <li id="st3"><a class=""  href="Zha_countStatus.action">系统状态统计</a></li>
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
                <li id="ss2"><a class=""  href="">修改密码</a></li>
                <c:if test="${currentUser.posi =='管理员'}">
                    <li id="ss3"><a class=""  href="">修改阈值</a></li>
                </c:if>
            </ul>
        </li>
    </ul>
</div>
