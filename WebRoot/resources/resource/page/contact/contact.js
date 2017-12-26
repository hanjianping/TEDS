function searchContact(){
    var orderNumber = $('#orderNumber').val().trim();
    var contactState = $('#contactState').val().trim();
    var customer = $('#customer').val().trim();
    var customerId = $('#customerId').val().trim();
    customerId = encodeURI(encodeURI(customerId));
    var firstDate = $('#firstDate').val().trim();
    var lastDate = $('#lastDate').val().trim();
    window.location.href = 'ContactAction_toContractList.action?pageNum=1&orderNumber='+orderNumber+
    '&contactState='+contactState+'&customer='+customer+'&customerId='+customerId+'&firstDate='+firstDate+'&lastDate='+lastDate;
}
function reloadContact(){
    window.location.href = 'ContactAction_toContractList.action?pageNum=1';
}

function setDeliveryMode(id) {
    if(id == 'seal') {
        if(document.getElementById('seal').checked) {
            $('#sign').attr('disabled','disabled');
            $('#deliveryMode').val('1');
        } else {
            $('#sign').removeAttr('disabled','disabled');
            $('#deliveryMode').val('');
        }
    } else {
        if(document.getElementById('sign').checked) {
            $('#seal').attr('disabled','disabled');
            $('#deliveryMode').val('2');
        } else {
            $('#seal').removeAttr('disabled','disabled');
            $('#deliveryMode').val('');
        }
    }
}

function subContact(pad) {
    if(isEmpty('deliveryDays','请填写发货时期') && isEmpty('terminalClientName','请填写终端客户名称')
    && isEmpty('actualInstallationSite','请填写实际安装地点') && isEmpty('qualityImplementationStandard','请填写标准')
    && isEmpty('payMode','请填写结算方式') && isEmpty('payMode','请填写结算方式')
    && isEmpty('zipCode','请填写邮编') && isEmpty('invoiceReceiver','请填写发票接收人')
    && isEmpty('contactMoblie','请填写联系电话')) {
        var orderNumber = $('#orderNumber').text();
        var deliveryDays = $('#deliveryDays').val();
        var deliveryMode = $('#deliveryMode').val();
        var nameOne = $('#nameOne').val();
        var identityCardOne = $('#identityCardOne').val();
        var nameTwo = $('#nameTwo').val();
        var identityCardTwo = $('#identityCardTwo').val();
        var nameThree = $('#nameThree').val();
        var identityCardThree = $('#identityCardThree').val();
        var terminalClientName = $('#terminalClientName').val();
        var actualInstallationSite = $('#actualInstallationSite').val();
        var qualityImplementationStandard = $('#qualityImplementationStandard').val();
        var acceptanceCriteriaOne = '';
        if(document.getElementById('acceptanceCriteriaOne').checked) {
            acceptanceCriteriaOne = '1';
        } else {
            acceptanceCriteriaOne = '-1';
        }
        var acceptanceCriteriaTwo = '';
        if(document.getElementById('acceptanceCriteriaTwo').checked) {
            acceptanceCriteriaTwo = '1';
        } else {
            acceptanceCriteriaTwo = '-1';
        }
        var installationDebuggingOne = '';
        if(document.getElementById('installationDebuggingOne').checked) {
            installationDebuggingOne = '1';
        } else {
            installationDebuggingOne = '-1';
        }
        var installationDebuggingTwo = '';
        if(document.getElementById('installationDebuggingTwo').checked) {
            installationDebuggingTwo = '1';
        } else {
            installationDebuggingTwo = '-1';
        }
        var acceptanceStandardMethodOne = '';
        if(document.getElementById('acceptanceStandardMethodOne').checked) {
            acceptanceStandardMethodOne = '1';
        } else {
            acceptanceStandardMethodOne = '-1';
        }
        var acceptanceStandardMethodTwo = '';
        if(document.getElementById('acceptanceStandardMethodTwo').checked) {
            acceptanceStandardMethodTwo = '1';
        } else {
            acceptanceStandardMethodTwo = '-1';
        }
        var payMode = $('#payMode').val();
        var invoiceMailingAddress = $('#invoiceMailingAddress').val();
        var zipCode = $('#zipCode').val();
        var invoiceReceiver = $('#invoiceReceiver').val();
        var contactMoblie = $('#contactMoblie').val();
        $.ajax({
            type : 'post',
            url : 'ContactAction_createContract.action',
            data : {
                orderNumber : orderNumber,
                deliveryDays : deliveryDays,
                deliveryMode : deliveryMode,
                nameOne : nameOne,
                identityCardOne : identityCardOne,
                nameTwo : nameTwo,
                identityCardTwo : identityCardTwo,
                nameThree : nameThree,
                identityCardThree : identityCardThree,
                terminalClientName : terminalClientName,
                actualInstallationSite : actualInstallationSite,
                qualityImplementationStandard : qualityImplementationStandard,
                acceptanceCriteriaOne : acceptanceCriteriaOne,
                acceptanceCriteriaTwo : acceptanceCriteriaTwo,
                installationDebuggingOne : installationDebuggingOne,
                installationDebuggingTwo : installationDebuggingTwo,
                acceptanceStandardMethodOne : acceptanceStandardMethodOne,
                acceptanceStandardMethodTwo : acceptanceStandardMethodTwo,
                payMode : payMode,
                invoiceMailingAddress : invoiceMailingAddress,
                zipCode : zipCode,
                invoiceReceiver : invoiceReceiver,
                contactMoblie : contactMoblie
            },
            success : function(data){
                if(data == '1') {
                    $('#success').modal();
                    setTimeout(function(){
                        $('#success').modal('hide');
                        if(pad == '1') {
                            window.location.href = 'ContactAction_toContactword.action?orderNumber=' + orderNumber
                        } else {
                            window.location.href = 'ContactAction_toContractList.action?pageNum=1';
                        }
                    },1000);
                } else {
                    $('#error').modal();
                    setTimeout(function(){
                        $('#error').modal('hide');
                        if(pad == '1') {
                            window.location.href = 'ContactAction_toContactword.action?orderNumber=' + orderNumber
                        } else {
                            window.location.href = 'ContactAction_toContractList.action?pageNum=1';
                        }
                    },2000);
                }
            }
        });
    }
}

function subEditContact() {
    if(isEmpty('deliveryDays','请填写发货时期') && isEmpty('terminalClientName','请填写终端客户名称')
        && isEmpty('actualInstallationSite','请填写实际安装地点') && isEmpty('qualityImplementationStandard','请填写标准')
        && isEmpty('payMode','请填写结算方式') && isEmpty('payMode','请填写结算方式')
        && isEmpty('zipCode','请填写邮编') && isEmpty('invoiceReceiver','请填写发票接收人')
        && isEmpty('contactMoblie','请填写联系电话')) {
        var contactId = $('#contactId').val();
        var orderNumber = $('#orderNumber').text();
        var deliveryDays = $('#deliveryDays').val();
        var deliveryMode = $('#deliveryMode').val();
        var nameOne = $('#nameOne').val();
        var identityCardOne = $('#identityCardOne').val();
        var nameTwo = $('#nameTwo').val();
        var identityCardTwo = $('#identityCardTwo').val();
        var nameThree = $('#nameThree').val();
        var identityCardThree = $('#identityCardThree').val();
        var terminalClientName = $('#terminalClientName').val();
        var actualInstallationSite = $('#actualInstallationSite').val();
        var qualityImplementationStandard = $('#qualityImplementationStandard').val();
        var acceptanceCriteriaOne = '';
        if(document.getElementById('acceptanceCriteriaOne').checked) {
            acceptanceCriteriaOne = '1';
        } else {
            acceptanceCriteriaOne = '-1';
        }
        var acceptanceCriteriaTwo = '';
        if(document.getElementById('acceptanceCriteriaTwo').checked) {
            acceptanceCriteriaTwo = '1';
        } else {
            acceptanceCriteriaTwo = '-1';
        }
        var installationDebuggingOne = '';
        if(document.getElementById('installationDebuggingOne').checked) {
            installationDebuggingOne = '1';
        } else {
            installationDebuggingOne = '-1';
        }
        var installationDebuggingTwo = '';
        if(document.getElementById('installationDebuggingTwo').checked) {
            installationDebuggingTwo = '1';
        } else {
            installationDebuggingTwo = '-1';
        }
        var acceptanceStandardMethodOne = '';
        if(document.getElementById('acceptanceStandardMethodOne').checked) {
            acceptanceStandardMethodOne = '1';
        } else {
            acceptanceStandardMethodOne = '-1';
        }
        var acceptanceStandardMethodTwo = '';
        if(document.getElementById('acceptanceStandardMethodTwo').checked) {
            acceptanceStandardMethodTwo = '1';
        } else {
            acceptanceStandardMethodTwo = '-1';
        }
        var payMode = $('#payMode').val();
        var invoiceMailingAddress = $('#invoiceMailingAddress').val();
        var zipCode = $('#zipCode').val();
        var invoiceReceiver = $('#invoiceReceiver').val();
        var contactMoblie = $('#contactMoblie').val();
        $.ajax({
            type : 'post',
            url : 'ContactAction_editContract.action',
            data : {
                contactId : contactId,
                orderNumber : orderNumber,
                deliveryDays : deliveryDays,
                deliveryMode : deliveryMode,
                nameOne : nameOne,
                identityCardOne : identityCardOne,
                nameTwo : nameTwo,
                identityCardTwo : identityCardTwo,
                nameThree : nameThree,
                identityCardThree : identityCardThree,
                terminalClientName : terminalClientName,
                actualInstallationSite : actualInstallationSite,
                qualityImplementationStandard : qualityImplementationStandard,
                acceptanceCriteriaOne : acceptanceCriteriaOne,
                acceptanceCriteriaTwo : acceptanceCriteriaTwo,
                installationDebuggingOne : installationDebuggingOne,
                installationDebuggingTwo : installationDebuggingTwo,
                acceptanceStandardMethodOne : acceptanceStandardMethodOne,
                acceptanceStandardMethodTwo : acceptanceStandardMethodTwo,
                payMode : payMode,
                invoiceMailingAddress : invoiceMailingAddress,
                zipCode : zipCode,
                invoiceReceiver : invoiceReceiver,
                contactMoblie : contactMoblie
            },
            success : function(data){
                if(data == '1') {
                    $('#success').modal();
                    setTimeout(function(){
                        $('#success').modal('hide');
                        window.location.href = 'ContactAction_toContractList.action?pageNum=1';
                    },1000);
                } else {
                    $('#error').modal();
                    setTimeout(function(){
                        $('#error').modal('hide');
                        window.location.href = 'ContactAction_toContractList.action?pageNum=1';
                    },2000);
                }
            }
        });
    }
}