$(document).ready(function() {
    
    // 默认显示所有数据
    getSystemLogList();
    // 为查询按钮事件
    $("#btn_search").live("click", function() {
        // 设置页数
        $("#currentPage").val(1);
        getSystemLogList();
    });
    
});
// 定义检索状态的div对象
var mask;
/**
 * 置为正在检索状态
 */
function startLoadingTemp() {
    // 创建检索状态的控件
    mask = document.createElement('div');
    // 为控制填加样式
    $("#empower_0302").addClass("default_container");
    $(mask).css("height", $("#empower_0302").height());
    $(mask).addClass("default_mask");
    // 设置高度
    // 显示检索状态效果
    $("#empower_0302").append(mask);
}
/**
 * 置为结束检索状态
 */
function overLoadingTemp() {
    // 移除检索状态效果
    $(".default_mask").remove();
}
/**
   * 通过param_name对变量定义表信息模糊查询
   * @param param_name
   * @return 无
   */
function getSystemLogList() {
    $('#table_content').show();
    // 执行ajax查询
    $('#tabcontent1').jpage({
        callBack : ajaxCallBack,
        perPage : 20,
        proxyUrl : 'SystemLogAction_findSystemLogList.action',
        currentPage : $("#currentPage").val(),
        ajaxParam:{
            empCode : $("#empCode").val(),
            cxId : $("#cxId").val(),
            dateStart : $("#dateStart").val(),
            dateEnd : $("#dateEnd").val()
        }
    });
}

/**
 * 分页显示的回调函数
 * @param dataStore 返回数据
 * @param currentPage 当前页
 * @param perPage 每页显示条数
 * @return 无
 */
function ajaxCallBack(dataStore, currentPage, perPage) {
    // 如果明细数据为空 直接返回
    if (! dataStore) {
        return;
    }
    $("#currentPage").val(currentPage);
    // 隐藏表头
    $('#table_content').hide();
    // 取得分页内容的显示位置
    var valContainer = $("#tabcontent1 .default_pgContainer");
    // 将返回数据转换为JSON格式
    var jsonData = eval("(" + dataStore + ")");
    // Html连接
    var strHtml = "";
    strHtml += '<table class="tableData t20px" id="table_content">';
    strHtml += '<thead>';
    strHtml += '<tr>';
    strHtml += '<th class="first" width="30"><h4>序号</h4></th>';
    strHtml += '<th class="other" width="60"><h4>程序ID</h4></th>';
    strHtml += '<th class="other" width="60"><h4>人员编码</h4></th>';
    strHtml += '<th class="other" width="60"><h4>菜单编号</h4></th>';
    strHtml += '<th class="other" width="60"><h4>函数名称</h4></th>';
    strHtml += '<th class="other"><h4>用户操作内容</h4></th>';
    strHtml += '<th class="other"><h4>备注</h4></th>';
    strHtml += '<th class="other" width="100"><h4>表名</h4></th>';
    strHtml += '<th class="other" width="100"><h4>sessionId</h4></th>';
    strHtml += '<th class="other" width="70"><h4>操作日期</h4></th>';
    strHtml += '</tr>';
    strHtml += '</thead>';
    strHtml += '<tbody>';
    
    // 遍历明细数据
    for (var i = 0; i < jsonData.length; i++) {
        // 取得每条明细信息
        var systemLogInfo = jsonData[i];
        strHtml += '<tr>';
        strHtml += '<td>'+ (i+1) +'</td>';
        strHtml += '<td>'+ (systemLogInfo['cxid']) +'</td>';
        strHtml += '<td>'+ (systemLogInfo['empCode']) +'</td>';
        strHtml += '<td>'+ (systemLogInfo['menuId']) +'</td>';
        strHtml += '<td>'+ (systemLogInfo['funcId']) +'</td>';
        strHtml += '<td>'+ (systemLogInfo['userData']) +'</td>';
        strHtml += '<td>'+ (systemLogInfo['remark']) +'</td>';
        strHtml += '<td>'+ (systemLogInfo['tableName']) +'</td>';
        strHtml += '<td>'+ (systemLogInfo['sessionId']) +'</td>';
        strHtml += '<td>'+ (DateUtil.formatJson(systemLogInfo['dateOp'], "Y-m-d")) +'</td>';
        strHtml += '</tr>';
    }
    strHtml += '</tbody>';
    strHtml += '</table>';
    valContainer.html(strHtml);
    // 鼠标滑过行变色
    $('#table_content tbody tr').hover(function() {
        $(this).addClass('bgColor1');
    }, function() {
        $(this).removeClass('bgColor1');
    });
}
