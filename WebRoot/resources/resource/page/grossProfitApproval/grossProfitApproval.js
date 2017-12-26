/**
 * 查询毛利表信息
 */
function searchGrossProfitApproval(){
    var orderNumber = $('#orderNumber').val().trim();
    var approvalStatus = $('#approvalStatus').val().trim();
    var customer = $('#customer').val().trim();
    var customerId = $('#customerId').val().trim();
    customerId = encodeURI(encodeURI(customerId));
    var firstDate = $('#firstDate').val().trim();
    var lastDate = $('#lastDate').val().trim();
    window.location.href = 'GrossProfitApprovalAction_grossProfitApproval.action?pageNum=1&orderNumber='+orderNumber+
    '&approvalStatus='+approvalStatus+'&customer='+customer+'&customerId='+customerId+'&firstDate='+firstDate+'&lastDate='+lastDate;
}

/**
 * 重置毛利表信息
 */
function reloadGrossProfitApproval(){
    window.location.href = 'GrossProfitApprovalAction_grossProfitApproval.action?pageNum=1';
}

/**
 * 毛利表信息列表翻页
 */
function gotoGrossProfitApprovalPage(num){
    var orderN = $('#orderN').val().trim();
    var approvalS = $('#approvalS').val().trim();
    var custoM = $('#custoM').val().trim();
    var customerI = $('#customerI').val().trim();
    customerI = encodeURI(encodeURI(customerI));
    var firstD = $('#firstD').val().trim();
    var lastD = $('#lastD').val().trim();
    if(num>0){
        window.location.href = 'GrossProfitApprovalAction_grossProfitApproval.action?pageNum='+num+'&orderNumber='+orderN+
        '&approvalStatus='+approvalS+'&customer='+custoM+'&customerId='+customerI+'&firstDate='+firstD+'&lastDate='+lastD;
    }
}

/**
 * 毛利表审批查询毛利表信息
 */
function searchApprovalGrossProfitApproval(){
    var orderNumber = $('#orderNumber').val().trim();
    var approvalStatus = $('#approvalStatus').val().trim();
    var customer = $('#customer').val().trim();
    var customerId = $('#customerId').val().trim();
    customerId = encodeURI(encodeURI(customerId));
    var firstDate = $('#firstDate').val().trim();
    var lastDate = $('#lastDate').val().trim();
    window.location.href = 'GrossProfitApprovalAction_approvalGrossProfitApproval.action?pageNum=1&orderNumber='+orderNumber+
    '&approvalStatus='+approvalStatus+'&customer='+customer+'&customerId='+customerId+'&firstDate='+firstDate+'&lastDate='+lastDate;
}


/**
 * 毛利表审批重置毛利表信息
 */
function reloadApprovalGrossProfitApproval(){
    window.location.href = 'GrossProfitApprovalAction_approvalGrossProfitApproval.action?pageNum=1';
}

/**
 * 毛利表审批信息列表翻页
 */
function gotoApprovalGrossProfitApprovalPage(num){
    var orderN = $('#orderN').val().trim();
    var approvalS = $('#approvalS').val().trim();
    var custoM = $('#custoM').val().trim();
    var customerI = $('#customerI').val().trim();
    customerI = encodeURI(encodeURI(customerI));
    var firstD = $('#firstD').val().trim();
    var lastD = $('#lastD').val().trim();
    if(num>0){
        window.location.href = 'GrossProfitApprovalAction_approvalGrossProfitApproval.action?pageNum='+num+'&orderNumber='+orderN+
        '&approvalStatus='+approvalS+'&customer='+custoM+'&customerId='+customerI+'&firstDate='+firstD+'&lastDate='+lastD;
    }
}


/**
 * 审核同意
 */
function agree(){
    var orderNumber = $('#orderNumber').val().trim();
    var subApprovalOpinion = $('#subApprovalOpinion').val().trim();
    var approvalState = '0';
    $.ajax({
        type : 'post',
        url : 'GrossProfitApprovalAction_agreeGrossProfitApproval.action',
        data : {
            orderNumber : orderNumber,
            subApprovalOpinion : subApprovalOpinion,
            approvalState : approvalState
        },
        success : function(data) {
            if("1"== data){
                $('#success').modal();
                setTimeout(function(){
                    $('#success').modal('hide');
                    window.location = "GrossProfitApprovalAction_approvalGrossProfitApproval.action";
                },1000);
            } else {
                $('#error').modal();
                setTimeout(function(){
                    $('#error').modal('hide');
                    window.location = "GrossProfitApprovalAction_approvalGrossProfitApproval.action";
                },2000);
            }
        }
    });
}

/**
 * 审核驳回
 */
function against(){
    var orderNumber = $('#orderNumber').val().trim();
    var subApprovalOpinion = $('#subApprovalOpinion').val().trim();
    var approvalState = '1';
    if(check()){
        $.ajax({
            type : 'post',
            url : 'GrossProfitApprovalAction_agreeGrossProfitApproval.action',
            data : {
                orderNumber : orderNumber,
                subApprovalOpinion : subApprovalOpinion,
                approvalState : approvalState
            },
            success : function(data) {
                if("1"== data){
                    $('#success').modal();
                    setTimeout(function(){
                        $('#success').modal('hide');
                        window.location = "GrossProfitApprovalAction_approvalGrossProfitApproval.action";
                    },1000);
                } else {
                    $('#error').modal();
                    setTimeout(function(){
                        $('#error').modal('hide');
                        window.location = "GrossProfitApprovalAction_approvalGrossProfitApproval.action";
                    },2000);
                }
            }
        });
    }
}

/**
 * 验证在驳回的时候是否填写审批意见
 * @returns {boolean}
 */
function check(){
    var flag = false;
    var subApprovalOpinion = $('#subApprovalOpinion').val().trim();
    if(subApprovalOpinion == '') {
        $('#subApprovalOpinionMsg').attr('style','color:red;');
        $('#subApprovalOpinionMsg').text("请输入审批意见")
        return false;
    } else{
        flag = true;
    }
    return flag;
}

/**
 * 查询毛利审批历史信息列表
 */
function searchGrossHistory(){
    var demandNumber = $('#demandNumber').val().trim();
    var customer = $('#customer').val().trim();
    var customerId = $('#customerId').val().trim();
    customerId = encodeURI(encodeURI(customerId));
    var firstDate = $('#firstDate').val().trim();
    var lastDate = $('#lastDate').val().trim();
    window.location.href = 'GrossProfitApprovalAction_approvalGrossHistoryList.action?pageNum=1&demandNumber='+demandNumber+
    '&customer='+customer+'&customerId='+customerId+'&firstDate='+firstDate+'&lastDate='+lastDate;
}

/**
 * 重置毛利审批历史信息列表
 */
function reloadGrossHistory(){
    window.location.href = 'GrossProfitApprovalAction_approvalGrossHistoryList.action?pageNum=1';
}

/**
 * 毛利审批历史信息列表翻页
 */
function gotoShowApprovalHistoryPage(num){
    var demandN = $('#demandN').val().trim();
    var custoM = $('#custoM').val().trim();
    var customerI = $('#customerI').val().trim();
    customerI = encodeURI(encodeURI(customerI));
    var firstD = $('#firstD').val().trim();
    var lastD = $('#lastD').val().trim();
    if(num>0){
        window.location.href = 'GrossProfitApprovalAction_approvalGrossHistoryList.action?pageNum='+num+'&demandNumber='+demandN+
        '&customer='+custoM+'&customerId='+customerI+'&firstDate='+firstD+'&lastDate='+lastD;
    }
}