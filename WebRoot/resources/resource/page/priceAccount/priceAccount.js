function priceAccount() {
    var demandNumber = $('#demandNumber').val().trim();
    var specialProductFee = $('#specialProductFee').val().trim();
    var componentFee = $('#componentFee').val().trim();
    var addFreightFee = $('#addFreightFee').val().trim();
    var estimateRebate = $('#estimateRebate').val().trim();
    var otherFee = $('#otherFee').val().trim();
    var totalFee = $('#totalFee').val().trim();
    var costFee =$('#costFee').val().trim();
    var grossFee =$('#grossFee').val().trim();
    var grossProfitMargin =$('#grossProfitMargin').val().trim();
    var applyDiscountAccount=$('#applyDiscountAccount').val().trim();
    var applyReason=$('#applyReason').val().trim();
    debugger;
    $.ajax({
        type:'post',
        url:'PriceAccountAction_subPriceAccount.action',
        data:{
            demandNumber:demandNumber,
            specialProductFee:specialProductFee,
            componentFee:componentFee,
            addFreightFee:addFreightFee,
            estimateRebate:estimateRebate,
            otherFee:otherFee,
            totalFee:totalFee,
            grossProfitMargin:grossProfitMargin,
            costFee:costFee,
            grossFee:grossFee,
            applyDiscountAccount:applyDiscountAccount,
            applyReason:applyReason
        },
        success:function(data){
            debugger;
            if(data==0){
                $('#success').modal();
                setTimeout(function(){
                    $('#success').modal('hide');
                    window.location='PriceAccountAction_showPriceAccountList.action';
                },1000);

            }
            else{
                $('#error').modal();
                setTimeout(function(){
                    $('#error').modal('hide');
                    window.location='PriceAccountAction_showPriceAccountList.action';
                },2000);
            }
        }
    });
}

function checkInput(id) {
    var val = $('#' + id).val();
    if(!/^(\s*|0|\d|[1-9]+\.?\d*)$/.test(val)) {
        $('#' + id + 'Msg').attr('style','color:red;');
        $('#' + id + 'Msg').text("您输入的数据有误！")
    } else {
        $('#' + id + 'Msg').attr('style','color:green;');
        $('#' + id + 'Msg').text("通过验证");
        var costFee=document.getElementById('costFee');
        var grossFee=document.getElementById('grossFee');
        var grossProfitMargin=document.getElementById('grossProfitMargin');
        var totalFee=document.getElementById('totalFee');
        var specialProductFee=$('#specialProductFee').val()-$('#specialProductFeeOld').val();
        var componentFee=$('#componentFee').val()-$('#componentFeeOld').val();
        var addFreightFee=$('#addFreightFee').val()-$('#addFreightFeeOld').val();
        var estimateRebate=$('#estimateRebate').val()-$('#estimateRebateOld').val();
        var otherFee=$('#otherFee').val()-$('#otherFeeOld').val();
        costFee.value=parseFloat(specialProductFee)+parseFloat(componentFee)+parseFloat(addFreightFee)+parseFloat(estimateRebate)+
        parseFloat(otherFee) +parseFloat($('#costFeeOld').val());
        grossFee.value=totalFee.value- costFee.value
        grossProfitMargin.value =((grossFee.value/totalFee.value)*100).toFixed(2);
        }

}

function reloadDemand(){
    window.location.href = 'PriceAccountAction_showPriceAccountList.action';
}

function searchDemand(){
    var orderNumber = $('#orderNumber').val().trim();
    var approvalStatus = $('#approvalStatus').val().trim();
    var customer = $('#customer').val().trim();
    var customerId = $('#customerId').val().trim();
    customerId = encodeURI(encodeURI(customerId));
    var firstDate = $('#firstDate').val().trim();
    var lastDate = $('#lastDate').val().trim();
    window.location.href = 'PriceAccountAction_showPriceAccountList.action?pageNum=1&orderNumber='+orderNumber+
    '&approvalStatus='+approvalStatus+'&customer='+customer+'&customerId='+customerId+'&firstDate='+firstDate+'&lastDate='+lastDate;
}


function isEmpty(id,text) {
    var falg = false;
    var input = $('#' + id);
    var val = Number(input.val());
    if(!/^(\s*|0|\d|[1-9]+\.?\d*)$/.test(val)) {
        input.attr('style','width:130px;height: 20px;border-color: red;');
        $('#' +id + 'Msg').attr('class','input-error tooltips');
        $('#' +id + 'Msg').attr('data-original-title','您输入的不合法');
        $('#' +id + 'Icon').attr('class','icon-exclamation-sign');
        $('#' +id + 'Icon').attr('style','color: red;');
        return false;
    } else {
        input.attr('style','width:130px;height: 20px;border-color: green;');
        $('#' +id + 'Msg').attr('class','input-success tooltips');
        $('#' +id + 'Msg').attr('data-original-title','通过验证');
        $('#' +id + 'Icon').attr('class','icon-ok');
        $('#' +id + 'Icon').attr('style','color: green;');
        var costFee=document.getElementById('costFee');
        var grossFee=document.getElementById('grossFee');
        var grossProfitMargin=document.getElementById('grossProfitMargin');
        var totalFee=document.getElementById('totalFee');
        var specialProductFee=$('#specialProductFee').val()-$('#specialProductFeeOld').val();
        var componentFee=$('#componentFee').val()-$('#componentFeeOld').val();
        var addFreightFee=$('#addFreightFee').val()-$('#addFreightFeeOld').val();
        var estimateRebate=$('#estimateRebate').val()-$('#estimateRebateOld').val();
        var otherFee=$('#otherFee').val()-$('#otherFeeOld').val();
        costFee.value=parseFloat(specialProductFee)+parseFloat(componentFee)+parseFloat(addFreightFee)+parseFloat(estimateRebate)+
        parseFloat(otherFee) +parseFloat($('#costFeeOld').val());
        totalFee.value=parseFloat(specialProductFee)+parseFloat(componentFee)+parseFloat(addFreightFee)+parseFloat(estimateRebate)+
        parseFloat(otherFee) +parseFloat($('#totalFeeOld').val());
        grossFee.value=totalFee.value- costFee.value
        grossProfitMargin.value =((grossFee.value/totalFee.value)*100).toFixed(2);
        falg = true;
    }
    return falg;
}

function gotoDemandPage(num) {
    var orderN = $('#orderNumber').val().trim();
    var approvalS = $('#approvalStatus').val().trim();
    var custoM = $('#customer').val().trim();
    var customerI = $('#customerI').val().trim();
    customerI = encodeURI(encodeURI(customerI));
    var firstD = $('#firstD').val().trim();
    var lastD = $('#lastD').val().trim();
    if (num > 0) {
        window.location.href = 'PriceAccountAction_showPriceAccountList.action?pageNum=' + num + '&orderNumber=' + orderN +
        '&approvalStatus=' + approvalS + '&customer=' + custoM + '&customerId=' + customerI + '&firstDate=' + firstD + '&lastDate=' + lastD;
    }
}