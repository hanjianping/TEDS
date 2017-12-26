// 组织机构信息
//var organTreeNodes = null;
$(document).ready(function() {
    //organTreeNodes = eval('('+ $("#organTreeNodes").val() +')');
    //$("#organTreeNodes").remove();
    
    // 保存
    $("#save_btn").click(function(){
        // 数据有效性
        if(checkInput()){
            // 修改前的用户编码
            var old_empCode = $("#old_empCode").val();
            // 修改后的用户编码
            var empCode = $("#empCode").val();
            // 修改前的登录帐号
            var old_loginName = $("#old_loginName").val();
            // 修改后的登录帐号
            var loginName = $("#loginName").val();
            // 如果old_empCode为空则为新增，否则为修改
            if(old_empCode != ""){
            	if(old_empCode != empCode){
            		$.ajax({
                		url:"UserManagerAction_checkEmpCode.action",
                        data:{empCode: empCode},
                        success:function(isExists){
                        	if(isExists == 'true'){
                        		alert("用户编码已经存在!");
                        		return false;
                        	}
                        }
                	});
            	}
            	else{
            		if(old_loginName != loginName){
                		$.ajax({
                    		url:"UserManagerAction_checkLoginName.action",
                            data:{loginName: loginName},
                            success:function(isExists){
                            	if(isExists == 'true'){
                            		alert("登录帐号已经存在!");
                            		return false;
                            	}else{
                                    $("#user_info_form").attr("action", "UserManagerAction_save.action");
                                    $("#user_info_form").submit();
                            	}
                            }
                    	});
                	}else{
                        $("#user_info_form").attr("action", "UserManagerAction_save.action");
                        $("#user_info_form").submit();
                	}
            	}
            } else {
                
                // 如果不相等,则验证修改后的用户编码在数据库中是否已经存在
                $.ajax({
                    url:"UserManagerAction_checkEmpCode.action",
                    data:{empCode: $("#empCode").val()},
                    success:function(isExists){
                        
                        if(isExists == 'false'){
                        	//校验登录帐号在系统中是否存在
                        	$.ajax({
                        		url:"UserManagerAction_checkLoginName.action",
                                data:{loginName: $("#loginName").val()},
                                success:function(isExists){
                                	if(isExists == 'false'){
                                        $("#user_info_form").attr("action", "UserManagerAction_save.action");
                                        $("#user_info_form").submit();
                                	}else{
                                		alert("登录帐号已经存在!");
                                	}
                                }
                        	});
                        } else {
                            alert("用户编码已经存在!");
                        }
                    }
                });
            }
        }
    });
    // 返回
    $("#back_btn").click(function(){
        $("#user_info_form").attr("action", "UserManagerAction_init.action");
        $("#user_info_form").submit();
    });
    
    // 验证用户输入的数据的合法性
    function checkInput(){

        // FIXME 验证处理....
    	if($("#empCode").val() == ""){
    		alert("请输入用户编号");
    		return false;
    	}
    	
    	if($("#empName").val() == ""){
    		alert("请输入姓名");
    		return false;
    	}
    	
    	if($("#loginName").val() == ""){
    		alert("请输入登录帐号");
    		return false;
    	}
        
        return true;
    }
    
    // 选择组织机构
    $("#organ_select_a, #empOrganName").click(function(){
        
        var html = '<div id="" style="height:50px; width:320px;">';
        html += '<div id="treeTempContent" class="zTreeDemoBackground left">';
        html += '<ul id="treeDemo" class="ztree">'+$("#treeContent").html()+'</ul>';
        html += '<ul class="report_ul" style="line-height: 20px;">';
        html += '<li style="margin-top:15px;">';
        html += '<a href="javascript:void(0)" onclick="return false;" id="confirm_organ" class="botBtn">确定</a></li>';
        html += '<li></li>';
        html += '</ul>';
        html += '</div>';
        html += ' </div>';
        
        // 弹出选择窗口
        showMessageBox('选择部门', html, 320, 90);
        
        var zTreeOjb = $.fn.zTree.init($("#treeDemo"), {
            check: {
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
        
        
        // 组织机构编码
        var empOrgan = $("#empOrgan").val();
        var empOrganNode = zTreeOjb.getNodeByParam("id", empOrgan);
        
        zTreeOjb.checkNode(empOrganNode, true, false);
    });
    
    $("#confirm_organ").live({click:function(){
        
        // 取得选中节点对象
        var treeObj = $.fn.zTree.getZTreeObj("treeDemo").getCheckedNodes(true);
        
        $("#empOrganName").val(treeObj[0].name);
        $("#empOrgan").val(treeObj[0].id);
        
        closeWindow();
        
    }});
});