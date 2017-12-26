// 树形数据加载标识 true:加载中
var treeNodesLoding = true;
$(document).ready(function() {
    
    // 保存
    $("#save_btn").click(function(){
        // 验让数据有效性
        if(checkInput()){
            $("#organ_info_form").attr("action", "OrganManagerAction_saveOrgan.action");
            $("#organ_info_form").ajaxSubmit(function(msg){
                
                if(msg == "success"){
                    alert("保存成功！");
                    window.location.href = "OrganManagerAction_init.action";
                }
            });
        }
    });
    // 返回
    $("#back_btn").click(function(){
        window.location.href="OrganManagerAction_init.action";
    });
    
    // 验证用户输入的数据的合法性
    function checkInput(){
        // 验证处理....
        return true;
    }
    
    $.fn.zTree.init($("#treeDemo"), {
        view: {
            addHoverDom: addHoverDom,
            removeHoverDom: removeHoverDom,
            selectedMulti: false
        },
        edit: {
            enable: true,
//            editNameSelectAll: true,
            showRenameBtn : false,
            removeTitle: "删除该组织机构"
        },
        data: {
            simpleData: {
                enable: true,
                idKey:"id",
                pIdKey:"parentId"
            }
        },
        callback: {
            beforeDrag: beforeDrag,
            beforeRemove: beforeRemove,
            
            onClick: zTreeOnClick,
            onNodeCreated: zTreeOnNodeCreated
        }
    }, eval('('+ $("#organTreeNodes").val() +')'));
    
    $("#organTreeNodes").remove();
    
    // 标识树加载完成
    treeNodesLoding = false;
});

/**
 * 点击一个组织机构
 * @param event
 * @param treeId
 * @param treeNode
 */
function zTreeOnClick (event, treeId, treeNode){
    setOrganInfo(treeNode);
}

/**
 * 将节点数据显示到表单中
 * @param treeNode
 */
function setOrganInfo(treeNode) {
    
    if(treeNode == null){
        
        $("#pkId").val("");
        $("#organName").val("");
        $("#organDescribe").val("");
        $("#flagSort").val("");
        $("#parentCode").val("");
    } else {
        
        $("#pkId").val(treeNode.pkId);
        $("#organName").val(treeNode.name);
        $("#organDescribe").val(treeNode.organDescribe);
        $("#flagSort").val(treeNode.flagSort);
        $("#parentCode").val(treeNode.parentId);
        $("#parentName").val($.fn.zTree.getZTreeObj("treeDemo").getNodeByParam("id", treeNode.parentId, null).name);
        // 修改机构时
        if(treeNode.pkId != null && treeNode.pkId != ""){
            $("#organCode").attr("readonly", "readonly");
        } else {
            $("#organCode").removeAttr("readonly");
        }
    }
    
}


/**
 * 新增一个组织机构
 * @param event
 * @param treeId
 * @param treeNode
 */
function zTreeOnNodeCreated(event, treeId, treeNode){
    
    // 树加载完成后
    if(!treeNodesLoding){
        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        zTree.selectNode(treeNode);
        setOrganInfo(treeNode);
    }
}

/**
 * 删除组织机构
 * @param treeId
 * @param treeNode
 * @returns {Boolean}
 */
function beforeRemove(treeId, treeNode) {
    
    // 删除数据标识
    var del_flag = false;
    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
    zTree.selectNode(treeNode);
    setOrganInfo(treeNode);
     if(confirm("确认删除【" + treeNode.name + "】吗？")){
          
         $.ajax({
             url : "OrganManagerAction_deleteOrgan.action",
             data: {
                 organPkId : treeNode.pkId
             },
             async : false,
             success : function(msg){
                 
                 // -1：有关联用户,不允许删除;0：该数据已被删除;1：已成功删除组织机构
                 if(msg == -1){
                     alert("该组织机构下还有关联的人员,不允许删除！");
                 } else if (msg == 0){
                     alert("该组织机构不存在！");
                     del_flag = true;
                 } else {
                     alert("删除成功！");
                     del_flag = true;
                 }
             }
         });
     }
     setOrganInfo(null);
     return del_flag;
}


function beforeDrag(treeId, treeNodes) {
    return false;
}

var newCount = 1;
function addHoverDom(treeId, treeNode) {
    var sObj = $("#" + treeNode.tId + "_span");
    if (treeNode.editNameFlag || $("#addBtn_"+treeNode.id).length>0) return;
    var addStr = "<span class='button add' id='addBtn_" + treeNode.id
        + "' title='增加组织机构' onfocus='this.blur();'></span>";
    sObj.after(addStr);
    var btn = $("#addBtn_"+treeNode.id);
    if (btn) btn.bind("click", function(){
        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"新机构_temp" + (newCount++)});
        return false;
    });
};
function removeHoverDom(treeId, treeNode) {
    $("#addBtn_"+treeNode.id).unbind().remove();
};
