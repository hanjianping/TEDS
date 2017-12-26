// 当前编辑的员工ID（作废）
var editEmpBaseId = null;
// 组织机构信息数据
var organTreeNodes = null;
//当前行PKID
var sePkId = null;
//员工ID
var empCode = null;
$(document).ready(function() {
    
//    organTreeNodes = eval('('+ $("#organTreeNodes").val() +')');
//    $("#organTreeNodes").remove();
    
    // 默认显示所有数据
    getUserInfoList();
    // 为查询按钮事件
    $("#btn_search").live("click", function() {
        // 设置页数
        $("#currentPage").val(1);
        getUserInfoList();
    });
    // 新增
    $("#toAdd").click(function(){
        $("#user_list_form").attr("action", "UserManagerAction_toAdd.action");
        $("#user_list_form").submit();
    });
    // 修改
    $("a[id='toUpdate']").live("click", function(){
    	$("#sePkId").val($(this).parent().children().eq(0).val());
        $("#user_list_form").attr("action", "UserManagerAction_toUpdate.action");
        $("#user_list_form").submit();
    });
    
    $("#reset_pass_btn").live("click", function(){
         
        // 取得当前编辑的员工ID
    	sePkId = $(this).parent().children().eq(0).val();
        if(confirm("确认要将该用户的密码恢复为初始化状态吗？")){
            
            $.ajax({
                url:"UserManagerAction_resetUserPass.action",
                data:{
                	sePkId : sePkId
                },
                cache : false,
                success:function(msg){
                    if(msg == "success"){
                        alert("操作成功！");
                    }
                }
            });
        }
        
    });
    
    //删除用户信息
    $("#delete_user_btn").live("click", function(){
        
        // 取得当前编辑的员工ID
    	sePkId = $(this).parent().children().eq(0).val();
        
        if(confirm("确认要删除该用户吗？")){
            
            $("#sePkId").val($(this).parent().children().eq(0).val());
            $("#user_list_form").attr("action", "UserManagerAction_deleteUser.action");
            $("#user_list_form").submit();
        }
        
    });
    
    // 关联用户角色
    $("#user_role_btn").live("click",function(){
        
        // 取得当前编辑的员工ID
        empCode = $(this).parent().children().eq(2).val();
        // 取得该员工关联的角色ID集合
        $.ajax({
            url:"UserManagerAction_findUserRoles.action",
            data:{
            	empCode : empCode
            },
            cache : false,
            dataType:"json",
            success:function(msg){
                 
                 var roleIdArray = msg
                 
                 var html = '<div id="" style="height:50px; width:320px;">';
                 html += '<div id="treeTempContent" class="zTreeDemoBackground left">';
                 html += '<ul id="roleTree" class="ztree"></ul>';
                 html += '<ul class="report_ul" style="line-height: 20px;">';
                 html += '<li style="margin-top:15px;">';
                 html += '<a href="javascript:void(0)" onclick="return false;" id="confirm_role" class="botBtn">确定</a></li>';
                 html += '<li></li>';
                 html += '</ul>';
                 html += ' </div>';
                 html += ' </div>';
                 
                 // 弹出选择窗口
                 showMessageBox('选择角色', html, 320, 90);
                 
                 var zTreeOjb = $.fn.zTree.init($("#roleTree"), {
                     check: {
                         enable: true
                     },
                     data: {
                         simpleData: {
                             enable: true,
                             idKey:"id",
                             pIdKey:"parentId"
                         }
                     }
                 }, eval('('+ $("#roleTreeNodes").val() +')'));
                 
//                 alert("test" + roleIdArray);
                 if(roleIdArray == null || roleIdArray == ""){
                    return;
                 }
                 
                 // 将已经关联的角色选中
                 for ( var index = 0; index < roleIdArray.length; index++) {
                     
                     // 组织机构编码
                     var roleId = roleIdArray[index];
                     var roleNode = zTreeOjb.getNodeByParam("id", roleId);
                     
                     zTreeOjb.checkNode(roleNode, true, false);
                     
                 }
            }
        });
    });
    
    // 关联用户组织机构
    $("#user_organ_btn").live("click",function(){
        
        // 取得当前编辑的员工ID
        editEmpBaseId = $(this).parent().children().eq(0).val();
        
        // 取得当前编辑员工的默认部门
        var empOrgan = $(this).parent().children().eq(1).val();
        
//        $.ajax({
//            url:"UserManagerAction_findEmpOrgans.action",
//            data:{
//                empBaseId : editEmpBaseId
//            },
//            cache : false,
//            dataType:"json",
//            success:function(msg){
                
//                // 用户关联的组织机构编码集合
//                var organArray = msg;
                
                var html = '<div id="" style="height:50px; width:320px;">';
                html += '<div id="treeTempContent" class="zTreeDemoBackground left">';
                html += '<ul id="organTree" class="ztree"></ul>';
                html += '<ul class="report_ul" style="line-height: 20px;">';
                html += '<li style="margin-top:15px;">';
                html += '<a href="javascript:void(0)" onclick="return false;" id="confirm_organ" class="botBtn">确定</a></li>';
                html += '<li></li>';
                html += '</ul>';
                html += '</div>';
                html += ' </div>';
                
                // 弹出选择窗口
                showMessageBox('组织机构', html, 320, 90);
                
                var zTreeOjb = $.fn.zTree.init($("#organTree"), {
                    check: {
//                        enable: true,
//                        chkboxType : { "Y" : "", "N" : "" }
                        enable: true,
                        chkStyle: "radio",
                        radioType: "all"
                    },
                    data: {
                        simpleData: {
                            enable: true,
                            idKey:"id",
                            pIdKey:"parentId"
                        }
                    }
                }, organTreeNodes);
                
                var empOrganNode = zTreeOjb.getNodeByParam("id", empOrgan);
                
                zTreeOjb.checkNode(empOrganNode, true, false);
                
//                if(organArray == null || organArray.length == 0){
//                    return ;
//                }
//                
//                for ( var index = 0; index < organArray.length; index++) {
//                    
//                    // 组织机构编码
//                    var organcode = organArray[index];
//                    
//                    var empOrganNodeTemp = zTreeOjb.getNodeByParam("id", organcode);
//                    
//                    zTreeOjb.checkNode(empOrganNodeTemp, true, false);
//                }
//            }
//        });
    });
    
    // 确认选择
    $("#confirm_organ").live("click",function(){
        
        // 取得选中节点对象
        var treeObj = $.fn.zTree.getZTreeObj("organTree").getCheckedNodes(true)[0];
        
        // 如果没有选中的组织机构则直接返回
        if(treeObj == null){
            alert("请选择一个直属部门！");
            return;
        }
        
        var userOrgan = treeObj.id;
        
//        for ( var index = 0; index < treeObj.length; index++) {
//            // 组织机构名称
//            var organName = treeObj[index].name;
//            // 组织机构ID
//            var organId = treeObj[index].id;
//            // 组织机构编码集合字符串
//            userOrgans = userOrgans + organId + ",";
//        }
        
        // 关闭弹出小窗口
        closeWindow();
        
        $.ajax({
            url:"UserManagerAction_savnUserOrgans.action",
            data:{
                userOrgan:userOrgan,
                empBaseId:editEmpBaseId
            },
            cache : false,
            success:function(msg){
                
                if(msg == "success"){
                    alert("保存关联组织机构信息成功");
                }
            }
        });
    });
    
    // 确认选择角色
    $("#confirm_role").live("click",function(){
        
        // 取得选中节点对象
        var treeObj = $.fn.zTree.getZTreeObj("roleTree").getCheckedNodes(true);
        
        var userRoles = "";
        
        // 如果没有选中的组织机构则直接返回
        if(treeObj == null){
            return;
        }
        
        for ( var index = 0; index < treeObj.length; index++) {
            
            // 角色ID
            var roleId = treeObj[index].id;
            // 组织机构编码集合字符串
            userRoles = userRoles + roleId + ",";
        }
        
        // 关闭弹出小窗口
        closeWindow();
        
        $.ajax({
            url:"UserManagerAction_savnUserRoles.action",
            data:{
                userRoles:userRoles,
                userId:empCode
            },
            success:function(msg){
                
                if(msg == "success"){
                    alert("保存关联角色信息成功");
                }
            }
        });
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
function getUserInfoList() {
    $('#table_content').show();
    // 执行ajax查询
    $('#tabcontent1').jpage({
        callBack : ajaxCallBack,
        perPage : 20,
        proxyUrl : 'UserManagerAction_findEmployeeInfoList.action',
        currentPage : $("#currentPage").val(),
        ajaxParam:{
            empName : $("#empName").val(),
            empCode : $("#empCode").val()
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
    strHtml += '<table class="tableData t20px">';
    strHtml += '<thead>';
    strHtml += '<tr>';
    strHtml += '<th class="first" width="60"><h4>序号</h4></th>';
    strHtml += '<th class="other"><h4>用户编码</h4></th>';
    strHtml += '<th class="other" ><h4>用户名称</h4></th>';
    strHtml += '<th class="other" width="60"><h4>使用状态</h4></th>';
    strHtml += '<th class="other" width="100"><h4>创建时间</h4></th>';
    strHtml += '<th class="last" width="250"><h4>操作</h4></th>';
    strHtml += '</tr>';
    strHtml += '</thead>';
    strHtml += '<tbody>';
    // 遍历明细数据
    for (var i = 0; i < jsonData.length; i++) {
        // 取得每条明细信息
        var employeeInfo = jsonData[i];
        strHtml += '<tr>';
        strHtml += '<td>'+ (i+1) +'</td>';
        strHtml += '<td>'+ (employeeInfo['empCode']) +'</td>';
        strHtml += '<td>'+ (employeeInfo['empName']) +'</td>';
        strHtml += '<td>'+ (employeeInfo['flagUse'] == '0' ? '正常使用' : '停止使用') +'</td>';
        strHtml += '<td>'+ (DateUtil.formatJson(employeeInfo['makeDate'], "Y-m-d")) +'</td>';
        strHtml += '<td>';
        strHtml += '<input type="hidden" value="'+ employeeInfo['sePkId'] +'" name="sePkId" id="sePkId" />';
        strHtml += '<input type="hidden" value="'+ employeeInfo['empOrgan'] +'" name="empOrgan" />';
        strHtml += '<input type="hidden" value="'+ employeeInfo['empCode'] +'" name="empCode" />';
        strHtml += '<a href="javascript:void(0);" id="toUpdate" onclick="return false;">修改</a>&nbsp;&nbsp;';
        strHtml += '<a href="javascript:void(0);" id="user_role_btn">关联角色</a>&nbsp;&nbsp;';
//        strHtml += '<a href="javascript:void(0);" id="user_menu_btn">授权</a>&nbsp;';
//        strHtml += '<a href="javascript:void(0);" id="user_organ_btn">关联组织机构</a>&nbsp;&nbsp;';
        strHtml += '<a href="javascript:void(0);" id="reset_pass_btn">恢复初始化密码</a>&nbsp;&nbsp;';
        strHtml += '<a href="javascript:void(0);" id="delete_user_btn"><img src="resources/images/manager/del.jpg" width="20" height="20" /></a>&nbsp;&nbsp;';
        strHtml += '</td></tr>';
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
