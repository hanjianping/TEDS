var isIe = (document.all) ? true : false;
/**
 * 设置select的可见状态
 * @param {} state
 */
function setSelectState(state) {
    var objl = document.getElementsByTagName('select');
    for (var i = 0; i < objl.length; i++) {
        objl[i].style.visibility = state;
    }
}
function mousePosition(ev) {
    if (ev.pageX || ev.pageY) {
        return {
            x : ev.pageX,
            y : ev.pageY
        };
    }
    return {
        x : ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y : ev.clientY + document.body.scrollTop - document.body.clientTop
    };
}
/**
 *  弹出方法前台
 * @param {} wTitle
 * @param {} content
 * @param {} wWidth
 */
function showMessageBox(wTitle, content, wWidth, top) {
    closeWindow();
    if (isIe) {
        setSelectState('hidden');
    }
    var back = document.createElement("div");
    back.id = "back";
    var height = $(document).height();
    var styleStr = "top:0px;left:0px;position:absolute;background:#666;width:100%;height:"+ height +"px;z-index:600;";
    styleStr += (isIe) ? "filter:alpha(opacity=0);" : "opacity:0;";
    back.style.cssText = styleStr;
    document.body.appendChild(back);
    showBackground(back, 50);
    var mesW = document.createElement("div");
    $(mesW).attr("id","mesWindow");
    $(mesW).attr("class", "mesWindow");
    
    
    var tempHtml = '';
    tempHtml += '<div class="mesWindowTop">';
    tempHtml += '<table cellpadding="0" cellspacing="0" id="dialogTable"><tr>';
    tempHtml += '<td width="16" height="54"><img src="resources/js/common/showDialog/img/tanTopL.png"></td>';
    tempHtml += '<td class="tanTopM">'+wTitle+'</td>';
    tempHtml += '<td width="44" height="54"><a href="javascript:closeWindow();" class="tanTopR"></a></td>';
    tempHtml += '</tr>';
    tempHtml += '<tr>';
    tempHtml += '<td width="16" class="tanCenterL">&nbsp;</td>';
    tempHtml += '<td class="tanCenterM" id="mesWindowContent"></td>';
    tempHtml += '<td width="44" class="tanCenterR">&nbsp;</td>';
    tempHtml += '</tr>';
    tempHtml += '<tr>';
    tempHtml += '<td width="16" height="21"><img src="resources/js/common/showDialog/img/tanBotL.png"></td>';
    tempHtml += '<td class="tanBotM">&nbsp;</td>';
    tempHtml += '<td width="44" height="21"><img src="resources/js/common/showDialog/img/tanBotR.png" border="0"></td>';
    tempHtml += '</tr>';
    tempHtml += '</table>';
    tempHtml += '</div>';
//    tempHtml += '<map name="Map" id="Map">';
//    tempHtml += '<area shape="circle" coords="24,22,18"  />';
//    tempHtml += '</map>';
    $(mesW).html(tempHtml);
    $("body").append(mesW);
    // 如果传过来的显示内容为对象,则将对象显示到层中
    if($(content).length == 0){
        $("#mesWindowContent").html(content);
    } else {
        $("#mesWindowContent").append($(content).show());
    }
    
    $(mesW).attr("style", "top:" + (!top?160:top) + "px;left:" + (document.body.clientWidth / 2 - wWidth / 2) + "px;position:absolute;width:"
            + wWidth + "px;z-index:9999;");
}
/**
 *  弹出方法后台
 * @param {} wTitle
 * @param {} content
 * @param {} wWidth
 */
function showMessageBoxForZZ(wTitle, content, wWidth, top) {
    closeWindow();
    if (isIe) {
        setSelectState('hidden');
    }
    var back = document.createElement("div");
    back.id = "back";
    var height = $(document).height();
    var styleStr = "top:0px;left:0px;position:absolute;background:#666;width:100%;height:"+ height +"px;z-index:600;";
    styleStr += (isIe) ? "filter:alpha(opacity=0);" : "opacity:0;";
    back.style.cssText = styleStr;
    document.body.appendChild(back);
    showBackground(back, 50);
    var mesW = document.createElement("div");
    $(mesW).attr("id","mesWindow");
    $(mesW).attr("class", "mesWindow");
    
    
    var tempHtml = '';
    tempHtml += '<div class="mesWindowTop">';
    tempHtml += '<table cellpadding="0" cellspacing="0"><tr>';
    tempHtml += '<td width="16" height="54"><img src="resources/js/common/showDialog/img/htanTopL.png"></td>';
    tempHtml += '<td class="htanTopM">'+wTitle+'</td>';
    tempHtml += '<td width="44" height="54"><a href="javascript:closeWindow();" class="htanTopR"></a></td>';
    tempHtml += '</tr>';
    tempHtml += '<tr>';
    tempHtml += '<td width="16" class="htanCenterL">&nbsp;</td>';
    tempHtml += '<td class="htanCenterM" id="mesWindowContent"></td>';
    tempHtml += '<td width="44" class="htanCenterR">&nbsp;</td>';
    tempHtml += '</tr>';
    tempHtml += '<tr>';
    tempHtml += '<td width="16" height="21"><img src="resources/js/common/showDialog/img/htanBotL.png"></td>';
    tempHtml += '<td class="htanBotM">&nbsp;</td>';
    tempHtml += '<td width="44" height="21"><img src="resources/js/common/showDialog/img/htanBotR.png" border="0"></td>';
    tempHtml += '</tr>';
    tempHtml += '</table>';
    tempHtml += '</div>';
//    tempHtml += '<map name="Map" id="Map1">';
//    tempHtml += '<area shape="circle" coords="24,22,18" href="javascript:closeWindow();" />';
//    tempHtml += '</map>';
    $(mesW).html(tempHtml);
    $("body").append(mesW);
    // 如果传过来的显示内容为对象,则将对象显示到层中
    if($(content).length == 0){
        $("#mesWindowContent").html(content);
    } else {
        $("#mesWindowContent").append($(content).show());
    }
    
    $(mesW).attr("style", "top:" + (!top?160:top) + "px;left:" + (document.body.clientWidth / 2 - wWidth / 2) + "px;position:absolute;width:"
            + wWidth + "px;z-index:9999;");
}
/**
 * 背景变淡
 * @param {} obj
 * @param {} endInt
 */
function showBackground(obj, endInt) {
    if (isIe) {
        obj.filters.alpha.opacity += 5;
        if (obj.filters.alpha.opacity < endInt) {
            setTimeout(function() {
                showBackground(obj, endInt)
            }, 5);
        }
    }
    else {
        var al = parseFloat(obj.style.opacity);
        al += 0.05;
        obj.style.opacity = al;
        if (al < (endInt / 100)) {
            setTimeout(function() {
                showBackground(obj, endInt)
            }, 5);
        }
    }
}
/**
 *  关闭窗口
 * @param {} content_id 内容ID
 */
function closeWindow(content_id) {
    
    if(content_id){
        $(content_id).clone().hide().appendTo("body");
    }
    
    if (document.getElementById('back') != null) {
        document.getElementById('back').parentNode.removeChild(document.getElementById('back'));
    }
    if (document.getElementById('mesWindow') != null) {
        document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));
    }
    if (isIe) {
        setSelectState('');
    }
}