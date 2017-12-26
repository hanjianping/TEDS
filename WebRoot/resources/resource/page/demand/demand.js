var a = 0;
var b = 0;

/**
 * 查询需求列表
 */
function searchDemand(){
    var orderNumber = $('#orderNumber').val().trim();
    var approvalStatus = $('#approvalStatus').val().trim();
    var customer = $('#customer').val().trim();
    var customerId = $('#customerId').val().trim();
    customerId = encodeURI(encodeURI(customerId));
    var firstDate = $('#firstDate').val().trim();
    var lastDate = $('#lastDate').val().trim();
    window.location.href = 'DemandAction_getDemandList.action?pageNum=1&orderNumber='+orderNumber+
    '&approvalStatus='+approvalStatus+'&customer='+customer+'&customerId='+customerId+'&firstDate='+firstDate+'&lastDate='+lastDate;
}

/**
 * 重置需求列表
 */
function reloadDemand(){
    window.location.href = 'DemandAction_getDemandList.action?pageNum=1';
}

/**
 * 翻页查询需求列表
 * @param num
 */
function gotoDemandPage(num){
    var orderN = $('#orderNumber').val().trim();
    var approvalS = $('#approvalStatus').val().trim();
    var custoM = $('#customer').val().trim();
    var customerI = $('#customerI').val().trim();
    customerI = encodeURI(encodeURI(customerI));
    var firstD = $('#firstD').val().trim();
    var lastD = $('#lastD').val().trim();
    if(num>0){

        window.location.href = 'DemandAction_getDemandList.action?pageNum='+num+'&orderNumber='+orderN+
        '&approvalStatus='+approvalS+'&customer='+custoM+'&customerId='+customerI+'&firstDate='+firstD+'&lastDate='+lastD;
    }
}

/**
 * 点击选择正式用户
 */
function chooseFormal(){
    $('#customerType').val('0');
    $('#formal').attr('class','btn btn-info');
    $('#temporary').attr('class','btn btn-default');
    $('#tempCustomer').attr('style','display: none');
}

/**
 * 点击选择临时用户
 */
function chooseTemporary(){
    $('#customerType').val('1');
    $('#formal').attr('class','btn btn-default');
    $('#temporary').attr('class','btn btn-info');
    $('#customerTypeAlert').modal();
    $('#tempCustomer').attr('style','');

}

function chooseShopYes() {
    $('#isShop').val('1');
    $('#shop_no').attr('class','btn btn-default');
    $('#shop_yes').attr('class','btn btn-info');
}

function chooseShopNo() {
    $('#isShop').val('0');
    $('#shop_yes').attr('class','btn btn-default');
    $('#shop_no').attr('class','btn btn-info');
}

var c = 0;

function addProduct(hrId) {
    a += 1;
    var productTable1 = $('#productTemp').clone();
    productTable1.attr('style','margin-left: 4%;margin-top: 2%;background-color: #00b3ee;');
    productTable1.attr("id", "productTable_" + a);
    var productHr = document.getElementById(hrId);
    productTable1.insertBefore(productHr);
    var seriesVal = $('#seriesVal');
    seriesVal.attr('id','seriesVal_' + a);
    var button = $('#productTable_' + a + ' a[name="delProduct"]');
    button[0].setAttribute('onclick',"delProduct('productTable_" + a + "')");
    var productModeMumberDiv = $('#productModeMumberDiv');
    productModeMumberDiv.attr('onclick',"setOptionProdNumber('prodSeriesId_" + c  + "','productTable_" + a + "')");
    productModeMumberDiv.attr("id","");
    var productModeMumber = $('#productModeMumber');
    productModeMumber.attr('onchange',"setProdInput('productTable_" + a +"','" + 1 + "')");
    productModeMumber.attr("id","");
    productModeMumber.chosen();
    var specialNumberDiv = $('#specialNumberDiv');
    specialNumberDiv.attr('onclick',"setOptionProdSpecial('prodSeriesId_" + c + "','productTable_" + a + "')");
    specialNumberDiv.attr("id","");
    var specialNumber = $('#specialNumber');
    specialNumber.attr('onchange',"setProdInput('productTable_" + a +"','" + 2 + "')");
    specialNumber.attr("id","");
    specialNumber.chosen();
    var side = $('#side');
    side.attr("id","");
    side.chosen();
}

function delProduct(prodId){
    $("#" + prodId).remove();
}

function delGroup(groupId,index) {
    var ids = $('#ids').val();
    ids = ids.replace(groupId,'');
    $('#ids').val(ids);
    $("#" + groupId).remove();
    b = b-1;
}

function subDemand() {
    var jsonText = '';
    var ids = $('#ids').val();
    var idArray = new Array();
    idArray  = ids.split(';');
    var jsonData = {htr : [], basic : {}};
    var orderNumber = $('#orderNumber').val();   //需求号
    var demandResource = $('#demandResource').val(); //需求来源
    var demandName = $('#demandName').val(); //需求名称
    var customer = $('#customer').val(); //客户性质
    var customerType = $('#customerType').val(); //客户类型
    var customerId = $('#customerId').val(); //客户名称
    var isShop = $('#isShop').val(); //是否为便利店
    var newCustomerId = $('#newCustomerId').val();//临时客户名称
    var newContactPerson = $('#newContactPerson').val();//临时联系人
    var newMobile = $('#newMobile').val();//手机
    var newEmail = $('#newEmail').val();//邮件
    var province = $('#select2-chosen-1').text();//省
    var city = $('#select2-chosen-2').text(); //城市
    var town = $('#select2-chosen-3').text(); //街道
    var newRemarks = $('#newRemarks').val(); //备注
    var crew = $('#crew').val();//机组
    var condenser = $('#condenser').val();//冷凝器
    var specialNeeds = $('#specialNeeds').val(); //特殊需求
    var basicInfo = {orderNumber : orderNumber, demandResource : demandResource, demandName: demandName, customer : customer,
        customerId : customerId, newCustomerId : newCustomerId, newContactPerson : newContactPerson, newMobile : newMobile,
        newEmail : newEmail, province : province,city : city, town : town, newRemarks : newRemarks, crew : crew,
        condenser : condenser, specialNeeds : specialNeeds,customerType : customerType, isShop : isShop};
    jsonData.basic = basicInfo;

    for(var i= 0,l=idArray.length -1;  i<l; i++) {
        if(idArray[i] != '') {
            //组名
            var groupName = $('#'+ idArray[i] + ' button[name="group_name"]')[0].innerText;
            //组排序方式
            var groupArrangementMode = $('#'+ idArray[i] + ' input[name="groupArrangementMode"]')[0].value;

            var groupInfo = {groupName : groupName, groupArrangementMode : groupArrangementMode, prodInfoArray : []};
            //var prodInfoArray = [];
           // jsonData.htr.push(groupInfo);
            //商品集合
            var tables = $('#' + idArray[i] + ' table[class="table"]');
            if(tables.length > 0) {
                for(var j=0; j<tables.length; j++) {
                    //系列ID
                    var prodSeriesId = $('#'+ tables[j].id + ' input[name="seriesVal"]')[0].value;
                    //产品型号
                    var productModeMumber = $('#'+ tables[j].id + ' select[name="productModeMumber"]')[0].value;
                    //产品专用号
                    var specialNumber = $('#'+ tables[j].id + ' select[name="specialNumber"]')[0].value;
                    //外形尺寸size
                    var size = $('#'+ tables[j].id + ' input[name="size"]')[0].value;
                    //整机/分体
                    var overallExtension = $('#'+ tables[j].id + ' input[name="overallExtension"]')[0].value;
                    //数量
                    var number = $('#'+ tables[j].id + ' input[name="number"]')[0].value;
                    //侧板
                    var side =  $('#'+ tables[j].id + ' select[name="side"]')[0].value;
                    var prodInfo = {productModeMumber : productModeMumber, specialNumber : specialNumber, size : size,
                        overallExtension : overallExtension, number : number, side : side, prodSeriesId : prodSeriesId };
                    groupInfo.prodInfoArray.push(prodInfo);

                }
                jsonData.htr.push(groupInfo);
            }
        }
    }
    jsonText = JSON.stringify(jsonData);
    $.ajax({
        type : 'post',
        url : 'DemandAction_subDemand.action',
        data : {
            jsonText : jsonText
        },
        success : function(data) {
            if(data == '1') {
                $('#success').modal();
                setTimeout(function(){
                    $('#success').modal('hide');
                    window.location.href = 'DemandAction_getDemandList.action';
                },1000);

            } else {
                $('#error').modal();
                setTimeout(function(){
                    $('#error').modal('hide');
                    window.location.href = 'DemandAction_getDemandList.action';
                },2000);
            }
        }
    });

}

var sId = '';
function setOptionProdNumber(prodSeriesId,prodTableId) {
    var prodSeriesId = $('#' + prodSeriesId);
    var seriesId = prodSeriesId.val();
    if(seriesId == '') {
        $('#seriesError').modal();
    } else {
        sId = seriesId;
        $('#seriesVal_' + a).val('');
        $('#seriesVal_' + a).val(sId);
        var productModeMumber = $('#'+ prodTableId + ' select[name="productModeMumber"]');
        productModeMumber[0].setAttribute('id','productModeMumber_ID');
        var p = $('#productModeMumber_ID');
        var options = $('#productModeMumber_ID option')
        p.attr("id","");
        for(var i=0; i<options.length; i++) {
            if(options[i].value != '') {
                p[0].removeChild(options[i]);
            }
        }
        $.ajax({
            type : 'post',
            data : {seriesId : sId},
            url : 'DemandAction_setOptionProdNumber.action',
            async : false,
            success : function(data) {
                p.append('<option value=""></option>');
                for(var j=0; j<data.length;j++) {
                    p.append('<option value="' + data[j].fnumber +'">' + data[j].fnumber + '</option>');
                }
            }
        });
        p.trigger("liszt:updated")
        p.trigger("chosen:updated");
    }


}


function setProdInput(prodTableId,type) {
    var productModeMumberId = '';
    var specialNumberId = '';
    var productModeMumberSelect = $('#'+ prodTableId + ' select[name="productModeMumber"]');
    var specialNumberSelect = $('#'+ prodTableId + ' select[name="specialNumber"]');
    productModeMumberSelect[0].setAttribute('id','productModeMumber_select');
    specialNumberSelect[0].setAttribute('id','specialNumber_select');
    var p = $('#specialNumber_select');
    var options = $('#specialNumber_select option');
    var s = $('#productModeMumber_select');
    var soptions = $('#productModeMumber_select option');
    if(type == '1') {
        productModeMumberId = productModeMumberSelect[0].value;
    } else {
        specialNumberId = specialNumberSelect[0].value;
    }
    var sizeInput = $('#'+ prodTableId + ' input[name="size"]');
    var overallExtensionInput = $('#'+ prodTableId + ' input[name="overallExtension"]');
    $.ajax({
        type : 'post',
        data : {
            productModeMumberId : productModeMumberId,
            specialNumberId : specialNumberId
        },
        url : 'DemandAction_setProdInput.action',
        async : false,
        success : function(data) {

                for(var i=0; i<options.length; i++) {
                    p[0].removeChild(options[i]);
                }

                p.append('<option value="' + data.prodModel +'">' + data.prodModel + '</option>');
                for(var i=0; i<soptions.length; i++) {
                    s[0].removeChild(soptions[i]);
                }
                s.append('<option value="' + data.fnumber +'">' + data.fnumber + '</option>');
                s.disabled = 'disabled';
                p.disabled = 'disabled';
                p.trigger("liszt:updated")
                p.trigger("chosen:updated");
                s.trigger("liszt:updated")
                s.trigger("chosen:updated");
            sizeInput[0].value = data.flength + '*' + data.fwidth +  '*' + data.fheight;
            overallExtensionInput[0].value = data.overallExtension;
            productModeMumberSelect[0].setAttribute('id','');
            specialNumberSelect[0].setAttribute('id','');
        }
    });
}

var opId = '';
function setOptionProdSpecial(prodSeriesId,prodTableId) {
    var prodSeriesId = $('#'+ prodSeriesId);
    var specialNumber = $('#'+ prodTableId + ' select[name="specialNumber"]');
    var seriesId = prodSeriesId.val();
    if(seriesId == '') {
        $('#seriesError').modal();
    } else {
        opId = seriesId;
        $('#seriesVal_' + a).val('');
        $('#seriesVal_' + a).val(opId);
        specialNumber[0].setAttribute('id','specialNumber_ID');
        var p = $('#specialNumber_ID');
        var options = $('#specialNumber_ID option')
        p.attr("id","");
        for(var i=0; i<options.length; i++) {
            p[0].removeChild(options[i]);
        }
        $.ajax({
            type : 'post',
            data : {seriesId : opId},
            url : 'DemandAction_setOptionProdNumber.action',
            async : false,
            success : function(data) {
                p.append('<option value=""></option>');
                for(var j=0; j<data.length;j++) {
                    p.append('<option value="' + data[j].prodModel +'">' + data[j].prodModel + '</option>');
                }
            }
        });
        p.trigger("liszt:updated")
        p.trigger("chosen:updated");
    }


}

var gpid = '';
function setOptionGroupProdNumber(groupTableId,prodTableId) {
    var prodSeriesId = $('#'+ groupTableId);
    var seriesId = prodSeriesId.val();
    if(seriesId == '') {
        $('#seriesError').modal();
    } else {
        gpid = seriesId;
        $('#seriesVal_' + a).val('');
        $('#seriesVal_' + a).val(gpid);
        var productModeMumber = $('#'+ prodTableId + ' select[name="productModeMumber"]');
        productModeMumber[0].setAttribute('id','productModeMumber_ID');
        var p = $('#productModeMumber_ID');
        var options = $('#productModeMumber_ID option')
        p.attr("id","");
        var v = [];
        for(var i=0; i<options.length; i++) {
            v.push(options[i].value);
        }
        $.ajax({
            type : 'post',
            data : {seriesId : gpid},
            url : 'DemandAction_setOptionProdNumber.action',
            async : false,
            success : function(data) {
                for(var j=0; j<data.length;j++) {
                    if(v.indexOf(data[j].fnumber) == -1) {
                        p.append('<option value="' + data[j].fnumber +'">' + data[j].fnumber + '</option>');
                    }
                }
            }
        });
        p.trigger("liszt:updated")
        p.trigger("chosen:updated");
    }
}


var gsId = '';
function setGroupOptionProdSpecial(groupTableId,prodTableId) {
    var prodSeriesId = $('#'+ groupTableId);
    var specialNumber = $('#'+ prodTableId + ' select[name="specialNumber"]');
    var seriesId = prodSeriesId.val();
    if(seriesId == '') {
        $('#seriesError').modal();
    } else {
        gsId = seriesId;
        $('#seriesVal_' + a).val('');
        $('#seriesVal_' + a).val(gsId);
        specialNumber[0].setAttribute('id','specialNumber_ID');
        var p = $('#specialNumber_ID');
        var options = $('#specialNumber_ID option')
        p.attr("id","");
        var v = [];
        for(var i=0; i<options.length; i++) {
            v.push(options[i].value);
        }
        $.ajax({
            type : 'post',
            data : {seriesId : gsId},
            url : 'DemandAction_setOptionProdNumber.action',
            async : false,
            success : function(data) {
                for(var j=0; j<data.length;j++) {
                    if(v.indexOf(data[j].prodModel) == -1) {
                        p.append('<option value="' + data[j].prodModel +'">' + data[j].prodModel + '</option>');
                    }
                }
            }
        });
        p.trigger("liszt:updated");
        p.trigger("chosen:updated");
    }
}



function addgroup(){
    var ids = $('#ids').val();
    debugger;
    var idArray = ids.split(";")
    var idLength = idArray.length - 1;
    for(var n = idLength -1; n < idLength; n++) {
        var tables = $('#' + idArray[n] + ' table[class="table"]')
        for(var j=0; j < tables.length; j++) {
            var input = $('#' + tables[j].id + ' input[type="hidden"]');
            if(input.val() == '') {
                $('#groupError').modal();
                return false;
            }
        }
    }
    b += 1;
    c += 1;
    a += 1
    var groupTable1 = $('#groupTemp').clone();
    groupTable1.attr('style','');
    groupTable1.attr("id", "group_" + b);
    var groupHr = document.getElementById("groupHr");
    groupTable1.insertBefore(groupHr);
    var seriesVal = $('#seriesValGroup');
    seriesVal.attr('id','seriesVal_' + a);
    var groupTable = $('#group_' + b + ' table[name="groupTableTemp"]');
    groupTable[0].setAttribute('id','groupTable_' + b)
    var pgroupTable = $('#group_' + b + ' table[name="group_productTable_temp"]');
    pgroupTable[0].setAttribute('id','group_productTable_' + b)
    var button = $('#group_' + b + ' a[name="delProduct"]');
    var add = $('#group_' + b + ' button[name="group_name"]');
    var delGroup = $('#group_' + b + ' button[name="del_group"]');
    var addButton = $('#group_' + b + ' button[name="addGroupProd"]');
    var groupProductHr = document.getElementById('groupProductHr_');
    groupProductHr.setAttribute('id','groupProductHr_' + b)
    addButton[0].setAttribute('onclick',"addProduct('groupProductHr_" + b + "')");
    add[0].setAttribute('id','button_' + b);
    $('#button_' + b).text( b + 1 + '组');
    button[0].setAttribute('onclick',"delProduct('group_productTable_" + b + "')");
    delGroup[0].setAttribute('onclick',"delGroup('group_" + b + "'," + (b+1) + ")");
    var prodSeriesId = $('#groupProdSeriesId');
    prodSeriesId.attr("id","prodSeriesId_" + c);
    prodSeriesId.chosen();
    var productModeMumberDiv = $('#groupproductModeMumberDiv');
    productModeMumberDiv.attr('onclick',"setOptionGroupProdNumber('prodSeriesId_" + c + "','group_productTable_" + b + "')");
    productModeMumberDiv.attr("id","");
    var groupProductModeMumber = $('#groupProductModeMumber');
    groupProductModeMumber.attr('onchange',"setProdInput('group_productTable_" + b +"','" + 1 + "')");
    groupProductModeMumber.attr("id","");
    groupProductModeMumber.chosen();
    var specialNumberDiv = $('#groupspecialNumberDiv');
    specialNumberDiv.attr('onclick',"setGroupOptionProdSpecial('prodSeriesId_" + c  + "','group_productTable_" + b + "')");
    specialNumberDiv.attr("id","");
    var groupSpecialNumber = $('#groupSpecialNumber');
    groupSpecialNumber.attr('onchange',"setProdInput('group_productTable_" + b +"','" + 2 + "')");
    groupSpecialNumber.attr("id","");
    groupSpecialNumber.chosen();
    var groupSide = $('#groupSide');
    groupSide.attr("id","");
    groupSide.chosen();
    var ids = $('#ids').val();
    if(ids.indexOf("group_" + b) == -1) {
        ids += "group_" + b + ';';
    }
    $('#ids').val(ids);
}

function getProdSeries(value){
    alert(value);
}

var delId = '';
function delDemand(demandHdrId){
    delId = demandHdrId;
    $('#isDelete').modal();
}

/**
 * 删除新建需求
 */
function sure(){
    $.ajax({
        type : 'post',
        url : 'DemandAction_delDemand.action',
        data : {
          delId : delId
        },
        success : function(data) {
            if("1"== data){
                $('#isDelete').modal('hide');
                $('#success').modal();
                setTimeout(function(){
                    $('#success').modal('hide');
                    window.location = "DemandAction_getDemandList.action";
                },1000);
            } else {
                $('#isDelete').modal('hide');
                $('#error').modal();
                setTimeout(function(){
                    $('#error').modal('hide');
                    window.location = "DemandAction_getDemandList.action";
                },2000);
            }
        }
    })
}
/**
 * 确认更新已投标的需求是否中标
 * @type {string}
 */
var isBidId = '';
function isBid(demandHdrId){
    isBidId = demandHdrId;
    $('#isBid').modal();
}
/**
 * 确认更新已投标的需求中标
 * @type {string}
 */
function isBidSure(){
    $.ajax({
        type : 'post',
        url : 'DemandAction_isBidSure.action',
        data : {
            isBidId : isBidId
        },
        success : function(data) {
            if("1"== data){
                $('#isBid').modal('hide');
                $('#success').modal();
                setTimeout(function(){
                    $('#success').modal('hide');
                    window.location = "DemandAction_getDemandList.action";
                },1000);
            } else {
                $('#isBid').modal('hide');
                $('#error').modal();
                setTimeout(function(){
                    $('#error').modal('hide');
                    window.location = "DemandAction_getDemandList.action";
                },2000);
            }
        }
    })
}

/**
 * 确认更新已投标的需求未中标
 * @type {string}
 */
function noBidSure(){
    $.ajax({
        type : 'post',
        url : 'DemandAction_noBidSure.action',
        data : {
            isBidId : isBidId
        },
        success : function(data) {
            if("1"== data){
                $('#isBid').modal('hide');
                $('#success').modal();
                setTimeout(function(){
                    $('#success').modal('hide');
                    window.location = "DemandAction_getDemandList.action";
                },1000);
            } else {
                $('#isBid').modal('hide');
                $('#error').modal();
                setTimeout(function(){
                    $('#error').modal('hide');
                    window.location = "DemandAction_getDemandList.action";
                },2000);
            }
        }
    })
}

/**
 * 编辑客户类型点击选择正式用户
 */
function chooseEditFormal(){
    $('#customerType').val('0');
    $('#formal').attr('class','btn btn-info');
    $('#temporary').attr('class','btn btn-default');
    $('#tempCustomer').attr('style','display: none');
    $('#customerId').attr('style','display: none');
    $('#chooseCustomerIdDiv').attr('style','');
    //$('#chooseCustomerId').addClass("chosen");
    $('#showButton').attr('style','');
}

/**
 * 编辑客户类型点击选择临时用户
 */
function chooseEditTemporary(){
    $('#customerType').val('1');
    $('#formal').attr('class','btn btn-default');
    $('#temporary').attr('class','btn btn-info');
    $('#tempCustomer').attr('style','');
    $('#customerId').attr('style','');
    $('#chooseCustomerIdDiv').attr('style','display: none');
    //$('#chooseCustomerId').deleteClass("chosen");
    $('#showButton').attr('style','');
}

function subEditCustomer(){
    var temporaryCustomerName = $('#chooseCustomerId').val().trim();
    var orderNumber = $('#orderNumber').val().trim();
    var customerType = $('#customerType').val().trim();
    $.ajax({
        type : 'post',
        url : 'DemandAction_subEditCustomer.action',
        data : {
            orderNumber : orderNumber,
            temporaryCustomerName : temporaryCustomerName,
            customerType : customerType
        },
        success : function(data){
            if("1"== data){          //操作成功
                $('#success').modal();
                setTimeout(function(){
                    $('#success').modal('hide');
                    window.location = "DemandAction_getDemandList.action";
                },1000);
            } if("2"== data){       //操作失败
                $('#error').modal();
                setTimeout(function(){
                    $('#error').modal('hide');
                    window.location = "DemandAction_getDemandList.action";
                },2000);
            }if("3"== data){        //客户名称没有填写提醒
                $('#noCustomer').modal();
                setTimeout(function(){
                    $('#noCustomer').modal('hide');
                },1000);
            }if("4"== data){       //选择的客户名称与需求表的客户名称不符
                $('#errorCustomer').modal();
                setTimeout(function(){
                    $('#errorCustomer').modal('hide');
                },1000);
            }
        }
    })
}

function addSeries(id) {
    c += 1;
    var series = $('#prodSeriesTemp').clone();
    series.attr('style','margin-left: 4%;margin-top:2%;');
    series.attr("id", "prodSeriesTemp_" + c);
    var groupHr = document.getElementById(id);
    series.insertBefore(groupHr);
    var s = $('#prodSeriesTemp_' + c + ' select[name="prodSeriesId"]');
    s[0].setAttribute('id','prodSeriesId_' + c);
    $('#prodSeriesId_' + c).chosen()

}

function addGroupSeries(id) {
    c += 1;
    var series = $('#prodSeriesTemp').clone();
    series.attr('style','margin-left: 4%;margin-top:2%;');
    series.attr("id", "prodSeriesTemp_" + c);
    var groupHr = document.getElementById(id + b);
    series.insertBefore(groupHr);
    var s = $('#prodSeriesTemp_' + c + ' select[name="prodSeriesId"]');
    s[0].setAttribute('id','prodSeriesId_' + c);
    $('#prodSeriesId_' + c).chosen()
}