/**
 * Created by dongliang on 2016/5/6.
 */

/**
 * 添加需求调研表页面
 */
function toAddResearch(orderNumber,groupNumber) {
    var productIds = $('#group_' + groupNumber).val();
    groupNumber = encodeURI(encodeURI(groupNumber));
    if(productIds == '') {
        $('#cannotSure').modal();
    } else {
        window.location.href = 'ResearchAction_toSubResearch.action?orderNumber=' + orderNumber + '&productIds=' + productIds + '&groupNumber=' + groupNumber;
    }

}

function getDemandDtlId(demandDtlId,groupNumber) {
    var val = '';
    var ids = $('#group_' + groupNumber).val();

        if($('#' + demandDtlId).attr('checked') == 'checked') {

            var isResearch = $('#isResearch_' + demandDtlId).val();
            if(isResearch == '已填写') {
                $('#isResearch').modal();
                $('#' + demandDtlId).attr('checked',false)
                return false;
            }
            val = $('#' + demandDtlId).val();
            if(ids.indexOf(val + '_') == -1) {
                ids += val + '_';
                $('#group_' + groupNumber).val(ids);
            }
        } else {
            val = $('#' + demandDtlId).val();
            if(ids.indexOf(val + '_') != -1) {
                ids = ids.replace(val + '_','');
                $('#group_' + groupNumber).val(ids);
            }
        }
}

function toEditResearch(productModeNumber,orderNumber,groupNumber,type) {
    groupNumber = encodeURI(encodeURI(groupNumber));
    window.location.href = 'ResearchAction_toEditSubResearch.action?orderNumber='
        + orderNumber + '&productModeNumber=' + productModeNumber + '&groupNumber=' + groupNumber
        + '&type=' + type;
}

/**
 * 保存必选项数据
 * @param searchId
 */
function setSearchVal(searchId) {
    var ids = $('#searchIds').val();
    var val = $('#' + searchId).val();
    if(val != '') {
        $('#search_input_' + searchId).val(searchId + '_' + val);
    } else {
        $('#search_input_' + searchId).val('');
    }

}

function subResearch(type) {
    var productModeNumber = $('#productModeNumber').text();
    var requireInputs = $("#require input[type='hidden']");
    var optionalInputs = $("#optional input[type='hidden']");
    var otherInputs = $("#other input[type='hidden']");
    var requireVal = '';
    var optionalVal = '';
    var otherVal = '';
    for(var i=0; i<requireInputs.length;i++) {
        if(requireInputs[i].value == '') {
            $('#research').modal();
            return false;
        } else {
            requireVal += requireInputs[i].value + ";";
        }
    }
    for(var i=0; i<optionalInputs.length;i++) {
        if(optionalInputs[i].value != '') {
            optionalVal += optionalInputs[i].value + ";";
        }
    }
    for(var i=0; i<otherInputs.length;i++) {
        if(otherInputs[i].value != '') {
            otherVal += otherInputs[i].value + ";";
        }
    }
    var demandHdrId = $('#demandHdrId').val();
    var demandNumber = $('#demandNumber').val();
    var contactId = $('#contactId').val();
    var groupNumber = $('#groupNumber').val();
    $.ajax({
        type : 'post',
        url : 'ResearchAction_subResearch.action',
        data : {
            requireVal : requireVal,
            optionalVal : optionalVal,
            otherVal : otherVal,
            demandNumber : demandNumber,
            contactId : contactId,
            productModeNumber : productModeNumber,
            groupNumber : groupNumber,
            type : type
        },
        success : function(data) {
            if(data == '1') {
                $('#success').modal();
                setTimeout(function(){
                    $('#success').modal('hide');
                    window.location.href = 'ResearchAction_toAddResearch.action?demandHdrId=' + demandHdrId;
                },1000);

            } else {
                $('#error').modal();
                setTimeout(function(){
                    $('#error').modal('hide');
                    window.location.href = 'ResearchAction_toAddResearch.action?demandHdrId=' + demandHdrId;
                },2000);
            }
        }
    });
}

function subDemand(orderNumber) {
    var specialNeeds = $('#specialNeeds').val();
    $.ajax({
        type : 'post',
        url : 'ResearchAction_checkDemandItem.action',
        data : {orderNumber : orderNumber},
        success : function(data) {
            if(data == '-1') {
                $('#isItemSub').modal();
            } else {
                $.ajax({
                    type : 'post',
                    url : 'ResearchAction_subDemand.action',
                    data : {
                        orderNumber : orderNumber,
                        specialNeeds : specialNeeds
                    },
                    success : function(data) {
                        if(data == '1') {
                            $('#success').modal();
                            setTimeout(function(){
                                $('#success').modal('hide');
                                window.location.href = 'ResearchAction_toResearchList.action';
                            },1000);
                        } else {
                            $('#error').modal();
                            setTimeout(function(){
                                $('#error').modal('hide');
                                window.location.href = 'ResearchAction_toResearchList.action';
                            },2000);
                        }
                    }
                });
            }
        }
    });
}




function searchDemand(){
    var orderNumber = $('#orderNumber').val().trim();
    var researchState = $('#researchState').val().trim();
    var customer = $('#customer').val().trim();
    var demandName = $('#customerId').val().trim();
    demandName = encodeURI(encodeURI(demandName));
    var firstDate = $('#firstDate').val().trim();
    var lastDate = $('#lastDate').val().trim();
    window.location.href = 'ResearchAction_toResearchList.action?pageNum=1&orderNumber='+orderNumber+
        '&researchState='+researchState+'&customer='+customer+'&demandName='+demandName+'&firstDate='+firstDate+'&lastDate='+lastDate;
}

function reloadDemand() {
    window.location.href = 'ResearchAction_toResearchList.action?pageNum=1';
}

function changeBtn(id) {
    if(id == 'industry') {
        $('#custom').attr('class','btn');
        $('#industry').attr('class','btn btn-primary');
    } else {
        $('#industry-').attr('class','btn');
        $('#custom').attr('class','btn btn-primary');
    }
}

