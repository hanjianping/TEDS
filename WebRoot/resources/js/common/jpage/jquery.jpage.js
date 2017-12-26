jQuery.fn.jpage = function(config) {
    init("#" + this.attr("id"), config);
    /**
       * 初始化，主程序
       * @param t 容器的ID，带#号
       * @param config 插件配置
       */
    function init(t, config) {
        // 公有变量
        if (! t)
            return;
        var paramMap = "";
        // 回调函数
        var callBackParam = (config.callBackParam == null ? function() {
        } : config.callBackParam);
        // 数据
        var dataStore = config.dataStore;
        // 是否打开cookies
        // var openCookies = (config.openCookies != null ? config.openCookies : false);
        // 每页显示条数，默认值20
        var configPage = (config.perPage > 0 ? config.perPage : 20);
        // 表标题
        var configTableTitle = (config.title == null || config.title == "" ? "" : config.title);
        // 如果cookie中保存了每页显示条数，则使用cookie中的值，否则使用configPage的值
        var perPage =
                ($.cookie(config.proxyUrl + "_perPage") == null ? configPage : parseInt($.cookie(config.proxyUrl
                        + "_perPage")));
        // 总记录数
        var totalRecord = config.totalRecord;
        // 如果总记录数未定义，则默认为0
        if (totalRecord == undefined)
            totalRecord = 0;
        else {
            // 取得总记录数
            totalRecord = (config.totalRecord > 0 ? config.totalRecord : 0);
            // 总记录数为0时，显示"很抱歉,没有检索到相关数据！"
            if (totalRecord == 0) {
                // 文本居中显示
                $(t).css("text-align", "center");
                // 文本高度 50 px
                $(t).css("line-height", "50px");
                // 边框
                $(t).css("border", "1px solid #d2d2d2");
                // 上边框无
                $(t).css("border-top", "0");
                // 显示内容
                $(t).html("很抱歉,没有检索到相关数据！");
                return;
            }
        }
        // 数据代理地址
        var proxyUrl = config.proxyUrl != null ? config.proxyUrl : 'dataproxy.jsp';
        // 组大小
        var groupSize = config.groupSize != null ? config.groupSize : 1;
        // 工具条位置
        var barPosition = config.barPosition == null || config.barPosition == "" ? 'bottom' : config.barPosition;
        // ajax的请求参数
        var ajaxParam = config.ajaxParam;
        // 显示模式
        var showMode = config.showMode == null || config.showMode == '' ? 'full' : config.showMode;
        // 是否允许切换每页显示数
        var allowChangePerPage = config.allowChangePerPage == null || config.allowChangePerPage ? true : false;
        // 主题名称
        var themeName = config.themeName == null || config.themeName == '' ? 'default' : config.themeName;
        var dataBefore = config.dataBefore == null ? '' : config.dataBefore;
        var dataAfter = config.dataAfter == null ? '' : config.dataAfter;
        var callBack = config.callBack == null ? function() {
        } : config.callBack;
        // 私有变量
        // 总页数
        var totalPage = Math.ceil(totalRecord / perPage);
        // 当前页码
        var currentPage = config.currentPage == null || config.currentPage == "" ? 1 : parseInt(config.currentPage);
        // 如果cookie中保存了每页显示条数，则使用cookie中的值，否则使用configPage的值
        // currentPage = ($.cookie(config.proxyUrl + "_currentPage") == null ? currentPage :
        // parseInt($.cookie(config.proxyUrl + "_currentPage")));
        // 每页起始记录，相对于当前组
        var startRecord;
        // 每页结束记录，相对于当前组
        var endRecord;
        // 组开始页
        var gpStartPage;
        // 组结束页
        var gpEndPage;
        // 组开始记录
        var gpStartRecord = 1;
        var gpEndRecord = perPage * groupSize;
        // 数据容器
        var container = '<div class="' + themeName + '_pgContainer"></div>';
        // 添加工具条
        var toolbar =
                '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="' + themeName
                        + '_pgToolbar"><tr><td>';
        toolbar += '<table border="0" cellspadding="0" cellspacing="0" class="' + themeName + '_pgPanel"><tr>';
        // 显示模式为full 并且 允许改变每页的显示条数
        if (showMode == 'full' && allowChangePerPage) {
            // 显示条数变更select框
            toolbar += '<td valign="middle">';
            var select = '<select>';
            select += '<option value="10">10</option>';
            select += '<option value="20">20</option>';
            select += '<option value="40">40</option>';
            select += '</select>';
            // 做成一个空的select框selectObj，里面没有任何option
            var selectObj = $(select).html("");
            // 找到配置的每页显示条数对应的option
            var optionArray = $(select).find("option[value='" + configPage + "']");
            // 循环对select对象中的option做处理
            $(select).find("option").each(function() {
                // 如果当前处理option的value值和配置显示的条数相等，则将当前option追加到selectObj，并设为选中状态
                if ($(this).val() == configPage) {
                    selectObj.append('<option value="' + $(this).val() + '" selected>' + $(this).val() + '</option>');
                }
                // 将当前option追加到selectObj
                else {
                    selectObj.append('<option value="' + $(this).val() + '">' + $(this).val() + '</option>');
                }
            });
            // 如果配置显示条数对应的option在默认的option中不存在，在selectObj的最前面追加一个option
            if (optionArray.length == 0) {
                selectObj =
                        $(select).prepend('<option value="' + configPage + '" selected>' + configPage + '</option>');
            }
            // 将做好的selectObj追加到toolbar中
            toolbar += '<select class="' + themeName + '_pgPerPage" title="每页显示条数">' + selectObj.html() + '</select>';
            toolbar += '&nbsp;</td>';
            // 追加分割线
            toolbar += '<td valign="middle"><div class="' + themeName + '_separator"></div></td>';
        }
        // 追加首页按钮
        toolbar +=
                '<td valign="middle"><div class="' + themeName + '_pgBtn ' + themeName
                        + '_pgFirst" title="首页"></div></td>';
        // 追加上一页按钮
        toolbar +=
                '<td valign="middle"><div class="' + themeName + '_pgBtn ' + themeName
                        + '_pgPrev" title="上页"></div></td>';
        // 如果显示模式为full，显示为“第X页/共X页”
        if (showMode == 'full') {
            toolbar +=
                    '<td valign="middle" width="10" align="left"><div class="' + themeName + '_separator"></div></td>';
            toolbar +=
                    '<td valign="middle">第 <input class="' + themeName + '_pgCurrentPage" type="text" value="'
                            + currentPage + '" title="页码" /> 页 / 共 <span class="' + themeName + '_pgTotalPage">'
                            + totalPage + '</span> 页</td>';
            toolbar +=
                    '<td valign="middle" width="10" align="right"><div class="' + themeName + '_separator"></div></td>';
        }
        // 如果显示模式为full，显示为“X/X页”
        else if (showMode == 'normal') {
            toolbar += '<td valign="middle"><div class="' + themeName + '_separator"></div></td>';
            toolbar +=
                    '<td valign="middle"> <input class="' + themeName + '_pgCurrentPage" type="text" value="'
                            + currentPage + '" title="页码" /> /  <span class="' + themeName + '_pgTotalPage">'
                            + totalPage + '</span> 页</td>';
            toolbar += '<td valign="middle"><div class="' + themeName + '_separator"></div></td>';
        }
        // 追加下一页按钮
        toolbar +=
                '<td valign="middle"><div class="' + themeName + '_pgBtn ' + themeName
                        + '_pgNext" title="下页"></div></td>';
        // 追击最后一页按钮
        toolbar +=
                '<td valign="middle"><div class="' + themeName + '_pgBtn ' + themeName
                        + '_pgLast" title="尾页"></div></td>';
        // 如果存在，追加刷新按钮
        if (groupSize) {
            toolbar += '<td valign="middle"><div class="' + themeName + '_separator"></div></td>';
            toolbar +=
                    '<td valign="middle"><div class="' + themeName + '_pgBtn ' + themeName
                            + '_pgRefresh" title="刷新"></div></td>';
        }
        // 如果显示模式为full,显示“检索到XX条记录，显示第X条-第X条记录”
        if (showMode == 'full') {
            toolbar +=
                    '<td valign="middle" width="10" align="left"><div class="' + themeName + '_separator"></div></td>';
            toolbar +=
                    '<td valign="middle" class="' + themeName + '_pgSearchInfo">检索到&nbsp;' + totalRecord
                            + '&nbsp;条记录，显示第&nbsp;<span class="' + themeName + '_pgStartRecord">' + startRecord
                            + '</span>&nbsp;条&nbsp;-&nbsp;第&nbsp;<span class="' + themeName + '_pgEndRecord">'
                            + endRecord + '</span>&nbsp;条记录</td>';
        }
        toolbar += '</td></tr></table>';
        toolbar += '</td></tr></table>';
        // 设定工具条toolbar的显示位置，默认为上下均显示
        switch (barPosition) {
            case 'top' :
                $(t).html(toolbar + container);
                break;
            case 'bottom' :
                $(t).html(container + toolbar);
                break;
            default :
                $(t).html(toolbar + container + toolbar);
        }
        // 刷新按钮
        var btnRefresh = $(t + " ." + themeName + "_pgRefresh");
        // 下一页按钮
        var btnNext = $(t + " ." + themeName + "_pgNext");
        // 上一页按钮
        var btnPrev = $(t + " ." + themeName + "_pgPrev");
        // 首页按钮
        var btnFirst = $(t + " ." + themeName + "_pgFirst");
        // 末页按钮
        var btnLast = $(t + " ." + themeName + "_pgLast");
        var btnGo = $(t + " ." + themeName + "_pgNext," + t + " ." + themeName + "_pgLast");
        var btnBack = $(t + " ." + themeName + "_pgPrev," + t + " ." + themeName + "_pgFirst");
        var btn =
                $(t + " ." + themeName + "_pgFirst," + t + " ." + themeName + "_pgPrev," + t + " ." + themeName
                        + "_pgNext," + t + " ." + themeName + "_pgLast");
        var mask;
        var valCurrentPage = $(t + " ." + themeName + "_pgCurrentPage");
        var valStartRecord = $(t + " ." + themeName + "_pgStartRecord");
        var valEndRecord = $(t + " ." + themeName + "_pgEndRecord");
        var valContainer = $(t + " ." + themeName + "_pgContainer");
        valContainer.html(configTableTitle);
        var valPerPage = $(t + " ." + themeName + "_pgPerPage");
        var valTotalPage = $(t + " ." + themeName + "_pgTotalPage");
        $(t + " ." + themeName + "_pgPerPage").attr("value", perPage);
        getGroupStartEnd();
        getStartEnd();
        if (dataStore == null || perPage != configPage)
            getRemoteData();
        else {
            getStartEnd();
            loadData();
            refresh();
        }
        // 刷新按钮监听
        btnRefresh.bind("mousedown", pressHandler).bind("mouseup", unpressHandler).bind("mouseout", unpressHandler);
        // 刷新工具栏
        refresh();
        // 按钮监听
        // 下一页按钮
        btnNext.click(function() {
            if (currentPage < totalPage) {
                currentPage += 1;
                getGroupStartEnd();
                getStartEnd();
                getRemoteData();
            }
        });
        // 上一页按钮
        btnPrev.click(function() {
            if (currentPage > 1) {
                currentPage -= 1;
                getGroupStartEnd();
                getStartEnd();
                getRemoteData();
            }
        });
        // 第一页按钮
        btnFirst.click(function() {
            if (! dataStore || currentPage > 1) {
                currentPage = 1;
                getGroupStartEnd();
                getStartEnd();
                getRemoteData();
            }
        });
        // 最后一页按钮
        btnLast.click(function() {
            if (! dataStore || currentPage < totalPage) {
                currentPage = totalPage;
                getGroupStartEnd();
                getStartEnd();
                getRemoteData();
            }
        });
        // 刷新按钮
        btnRefresh.click(function() {
            getGroupStartEnd();
            getStartEnd();
            getRemoteData();
        });
        // 页码输入框监听
        valCurrentPage.keydown(function(event) {
            var targetPage = parseInt($(this).val());
            if (event.keyCode == 13 && targetPage >= 1 && targetPage <= totalPage && currentPage != targetPage) {
                currentPage = targetPage;
                getGroupStartEnd();
                getStartEnd();
                getRemoteData();
            }
        });
        // 更换每页显示条数
        valPerPage.change(function() {
            valPerPage.val($(this).val());
            perPage = parseInt($(this).val());
            currentPage = 1;
            totalPage = Math.ceil(totalRecord / perPage);
            if (groupSize) {
                getGroupStartEnd();
                getStartEnd();
                getRemoteData();
            }
            else {
                getStartEnd();
                loadData();
                refresh();
            }
        });
        /*********************************init私有函数***************************************************/
        /**
           * 置为正在检索状态
           */
        function startLoad() {
            $(t).addClass(themeName + "_container");
            mask = document.createElement('div');
            $(mask).addClass(themeName + "_mask");
            $(mask).css("height", $(t).height());
            $(t).append(mask);
            $(t + " ." + themeName + "_pgRefresh").addClass(themeName + "_pgLoad");
            $(t + " ." + themeName + "_pgSearchInfo").html("正在检索中，请稍后...");
        }
        /**
           * 置为结束检索状态
           */
        function overLoad() {
            $(t + " ." + themeName + "_pgRefresh").removeClass(themeName + "_pgLoad");
            $(t + " ." + themeName + "_pgSearchInfo").html('检索到&nbsp;' + totalRecord
                    + '&nbsp;条记录，显示第&nbsp;<span class="' + themeName + '_pgStartRecord">'
                    + (startRecord + gpStartRecord - 1) + '</span>&nbsp;条&nbsp;-&nbsp;第&nbsp;<span class="' + themeName
                    + '_pgEndRecord">' + (endRecord + gpStartRecord - 1) + '</span>&nbsp;条记录');
            $(mask).remove();
            $(t).removeClass(themeName + "_container");
            valStartRecord = $(t + " ." + themeName + "_pgStartRecord");
            valEndRecord = $(t + " ." + themeName + "_pgEndRecord");
        }
        var reloadDataFlag = false;
        /**
           * 获得远程数据
           */
        function getRemoteData() {
            if (! reloadDataFlag) {
                startLoad();
            }
            $.ajax({
                type : "POST",
                url : proxyUrl + "?currentPage=" + (currentPage) + "&perpage=" + perPage,
                cache : false,
                data : ajaxParam,
                dataType : "json",
                timeout : 30000,
                success : function(msg) {
                    // 总条数
                    totalRecord = msg["totalRecord"];
                    // 总页数
                    totalPage = msg["totalPage"];
                    // 结果集
                    dataStore = msg["dataStore"];
                    if (totalRecord <= (perPage * (currentPage - 1)) && currentPage > 1 && totalRecord > 0) {
                        currentPage -= 1;
                        reloadDataFlag = true;
                        getRemoteData();
                    }
                    else {
                        reloadDataFlag = false;
                        if (totalRecord == 0)
                            $('.' + themeName + '_pgToolbar').remove();
                        getStartEnd();
                        loadData();
                        refresh();
                        overLoad();
                    }
                },
                error : function() {
                    alert("请求失败或超时，请稍后再试！");
                    overLoad();
                    return;
                }
            });
        }
        /**
           * 获得当前页开始结束记录
           */
        function getStartEnd() {
            if (groupSize) {
                startRecord = (currentPage - 1) * perPage + 1 - gpStartRecord + 1;
                endRecord = Math.min(currentPage * perPage, totalRecord) - gpStartRecord + 1;
            }
            else {
                startRecord = (currentPage - 1) * perPage + 1;
                endRecord = Math.min(currentPage * perPage, totalRecord);
            }
        }
        /**
           * 获得当前组开始结束页码
           */
        function getGroupStartEnd() {
            if (groupSize == null)
                return;
            var groupId = groupSize > 0 ? Math.ceil(currentPage / groupSize) : 0;
            gpStartPage = (groupId - 1) * groupSize + 1;
            gpEndPage = Math.min(groupId * groupSize, totalPage);
            gpStartRecord = (gpStartPage - 1) * perPage + 1;
            if (totalRecord > 0)
                gpEndRecord = Math.min(gpEndPage * perPage, totalRecord);
        }
        /**
           * 刷新数据容器
           */
        function loadData() {
            // 清空已有数据
            valContainer.find("tr:gt(0)").remove();
            valContainer.find("p[id='no_data_info']").remove();
            if (dataStore == null || dataStore.length == 0) {
                valContainer.css("text-align", "center");
                // valContainer.css("line-height","50px");
                valContainer.css({
                    border : "1px solid #d2d2d2",
                    borderTop : "0"
                });
                valContainer.append("<p id='no_data_info' style='line-height:50px'>很抱歉,没有检索到相关数据！</p>");
            }
            // 翻页回调函数
            callBack(dataStore, currentPage, perPage);
            callBackParam(paramMap);
        }
        /**
           * 刷新工具栏状态
           */
        function refresh() {
            // 当前页码写入cookie
            $.cookie(config.proxyUrl + '_currentPage', currentPage);
            $.cookie(config.proxyUrl + '_perPage', perPage);
            valCurrentPage.val(currentPage);
            valStartRecord.html(startRecord + gpStartRecord - 1);
            valEndRecord.html(endRecord + gpStartRecord - 1);
            valTotalPage.html(totalPage);
            btn.unbind("mousedown", pressHandler);
            btn.bind("mouseup", unpressHandler);
            btn.bind("mouseout", unpressHandler);
            if (currentPage == 1 && currentPage != totalPage) {
                enabled();
                btnGo.bind("mousedown", pressHandler);
                btnPrev.addClass(themeName + "_pgPrevDisabled");
                btnFirst.addClass(themeName + "_pgFirstDisabled");
            }
            else if (currentPage != 1 && currentPage == totalPage) {
                enabled();
                btnBack.bind("mousedown", pressHandler);
                btnNext.addClass(themeName + "_pgNextDisabled");
                btnLast.addClass(themeName + "_pgLastDisabled");
            }
            else if (currentPage == 1 && currentPage == totalPage) {
                disabled();
            }
            else {
                enabled();
                btnBack.bind("mousedown", pressHandler);
                btnGo.bind("mousedown", pressHandler);
                btnNext.addClass(themeName + "_pgNext");
                btnPrev.addClass(themeName + "_pgPrev");
                btnFirst.addClass(themeName + "_pgFirst");
                btnLast.addClass(themeName + "_pgLast");
            }
        }
        /**
           * 移除按钮disabled状态样式
           */
        function enabled() {
            btnNext.removeClass(themeName + "_pgNextDisabled");
            btnPrev.removeClass(themeName + "_pgPrevDisabled");
            btnFirst.removeClass(themeName + "_pgFirstDisabled");
            btnLast.removeClass(themeName + "_pgLastDisabled");
        }
        /**
           * 添加按钮disabled状态样式
           */
        function disabled() {
            btnNext.addClass(themeName + "_pgNextDisabled");
            btnPrev.addClass(themeName + "_pgPrevDisabled");
            btnFirst.addClass(themeName + "_pgFirstDisabled");
            btnLast.addClass(themeName + "_pgLastDisabled");
        }
        /**
           * 添加按钮按下状态样式
           */
        function pressHandler() {
            $(this).addClass(themeName + "_pgPress");
        }
        /**
           * 移除按钮按下状态样式
           */
        function unpressHandler() {
            $(this).removeClass(themeName + "_pgPress");
        }
    }
};