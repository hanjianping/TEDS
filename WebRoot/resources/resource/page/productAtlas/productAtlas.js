/**
 * 查询产品系列图册
 */
function searchProdSeries(){
    var prodSeriesName = $('#prodSeriesName').val().trim();
    prodSeriesName = encodeURI(encodeURI(prodSeriesName));
    window.location.href = 'ProductAtlasAction_productAtlasList.action?prodSeriesName='+prodSeriesName;
}

/**
 * 重置产品系列图册
 */
function reloadProdSeries(){
    window.location.href = 'ProductAtlasAction_productAtlasList.action';
}

function cancelAtlas(){
    window.location.href = 'ProductAtlasAction_productAtlasList.action';
}

/**
 * 产品系列图册翻页
 * @param num
 */
function gotoAtlasPage(num){
    var prodSName = $('#prodSName').val().trim();
    prodSName = encodeURI(encodeURI(prodSName));
    if(num>0){
        window.location.href = 'ProductAtlasAction_productAtlasList.action?pageNum='+num+'&prodSeriesName='+prodSName;
    }
}

/**
 * 取消
 * @param id
 */
function cancel(){
    window.location.href = 'ProductAtlasAction_editProductAtlasList.action';
}

/**
 * 产品图册管理查询页面
 */
function searchEditSeries(){
    var prodSeriesName = $('#prodSeriesName').val().trim();
    prodSeriesName = encodeURI(encodeURI(prodSeriesName));
    window.location.href = 'ProductAtlasAction_editProductAtlasList.action?prodSeriesName='+prodSeriesName;
}

/**
 * 产品图册管理重置页面
 */
function reloadEditSeries(){
    window.location.href = 'ProductAtlasAction_editProductAtlasList.action';
}

/**
 * 产品图册添加页面
 */
 function addEditSeries(){
    window.location.href = 'ProductAtlasAction_addProductAtlas.action'
}

/**
 * 提交添加产品图册
 */
function subAddProductAtlas(){
    if( checkSeriesName() && isEmpty('pictureUrl','请选择产品图册地址')){
        $('#productAtlasForm').form('submit',{
            url :  'ProductAtlasAction_subAddProductAtlas.action',
            success : function(data) {
                if("1"== data){
                    $('#success').modal();
                    setTimeout(function(){
                        $('#success').modal('hide');
                        window.location = "ProductAtlasAction_editProductAtlasList.action";
                    },1000);
                } else {
                    $('#error').modal();
                    setTimeout(function(){
                        $('#error').modal('hide');
                        window.location = "ProductAtlasAction_editProductAtlasList.action";
                    },2000);
                }
            }
       });
    }
}

function checkSeriesName(){
    var flag = false;
    var series = $('#series').val().trim();
    if(series == '') {
        $('#prodSeriesNamediv').attr('style','color:red;');
        $('#prodSeriesNameMsg').text('*请选择一个产品系列');
        return false;
    } else {
        $('#prodSeriesNamediv').attr('style','color:green;');
        $('#prodSeriesNameMsg').text('*通过信息验证');
        flag = true;
    }
    return flag;
}

function checkUrl(){
    var flag = false;
    var pictureUrl = document.getElementById("pictureUrl").value;
    if(pictureUrl == ''){
        //$('#pictureUrldiv').removeClass("has-success").addClass("has-error");
        //$('#pictureUrlMsg').text('*请选择一张图片进行添加操作');
        $('#pictureUrlMsg').attr('style','color:red;');
        $('#pictureUrlMsg').text("请选择一张图片进行添加操作！")
        return false;
    }else {
        if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(pictureUrl)) {
            $('#pictureUrlMsg').attr('style','color:red;');
            $('#pictureUrlMsg').text("*图片类型必须是.gif,jpeg,jpg,png中的一种！")
            return false;
        } else {
            $('#pictureUrlMsg').attr('style','color:green;');
            $('#pictureUrlMsg').text("通过信息验证")
            flag = true;
        }
    }
    return flag;
}

/**
 * 重置
 */
function cancelProductAtlas(){
    window.location.href = 'ProductAtlasAction_editProductAtlasList.action';
}

/**
 * 删除产品图册
 * @param id
 */
function delProductAtlas(productAtlasId){
    var prodSeriesId = $('#prodSeriesId').val().trim();
    $.ajax({
       type : 'post' ,
        url : 'ProductAtlasAction_delProductAtlas.action',
        data : {
            productAtlasId : productAtlasId
        },
        success : function(data) {
            if(data == '1') {
                $('#success').modal();
                setTimeout(function(){
                    $('#success').modal('hide');
                    window.location.href = 'ProductAtlasAction_editAtlas.action?prodSeriesId='+prodSeriesId;
                },1000);
            } else {
                $('#error').modal();
                setTimeout(function(){
                    $('#error').modal('hide');
                    window.location.href = 'ProductAtlasAction_editAtlas.action?prodSeriesId='+prodSeriesId;
                },2000);
            }
        }
    });
}