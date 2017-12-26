$(function() {
    $("input,textarea").attr("autocomplete", "off");
    // 弹出tip信息
    // 为鼠标移入对象添加事件
    $(".tip").live("mouseover", function() {
        $(this).find("span").show();
        $(this).addClass("tip_other");
    });
    // 为鼠标移除对象添加事件
    $(".tip").live("mouseout", function() {
        $(this).find("span").hide();
        $(this).removeClass("tip_other");
    });
});
/**
 * 给文本框增加提示信息
 * param id 文本框的id
 * param msg 提示信息
 * param style CSS样式
 * param borderFlag true 加红色边框 false 不加红色边框
 */
function addMessage(id, msg, style, borderFlag) {
    // 去掉灰色样式
    $('#' + id).removeClass("fH");
    $("#" + id).removeClass("msgredborder");
    $("#" + id).removeClass("borderBlue");
    var next = $("#" + id).next();
    if (next.attr("info") == "msgspan") {
        next.remove();
    }
    // 解决ie7下，验证通过不显示对号的bug
    if (msg == "") {
        msg = "&nbsp;";
    }
    $("#" + id).after("<span info='msgspan' class='" + style + "'>" + msg + "</span>");
    if (style == "msggreen") {
        $("#" + id).addClass("borderBlue");
    }
    if (borderFlag) {
        $("#" + id).removeClass("borderBlue");
        $("#" + id).addClass("msgredborder");
    }
}
/**
 * 清空提示信息
 * @param id 文本框的id
 */
function clearMessage(id) {
    $("#" + id).removeClass("borderBlue");
    $("#" + id).removeClass("msgredborder");
    var next = $("#" + id).next();
    if (next.attr("info") == "msgspan") {
        next.remove();
    }
}
/**
 * 验证密码长度
 */
function checkPasswordLength(password) {
    if (password.length < 6 || password.length > 20) {
        return false;
    }
    else {
        return true;
    }
}
/**
 * 验证密码和确认密码是否相等
 * param password 新密码
 * param repeatPassword 确认密码
 * param repeatPasswordId 确认密码框ID
 * param borderFlag 是否给前面的文本框加红色边框
 */
function checkPasswordEqual(password, repeatPassword, repeatPasswordId, borderFlag) {
    password = (password);
    repeatPassword = (repeatPassword)
    var returnFlag = false;
    if (password.length <= 0) {
        addMessage(repeatPasswordId, "请输入新密码", "msgred", borderFlag);
    }
    else if (repeatPassword.length <= 0) {
        addMessage(repeatPasswordId, "请输入确认密码", "msgred", borderFlag);
    }
    else if (password == repeatPassword) {
        addMessage(repeatPasswordId, "", "msggreen", false);
        returnFlag = true;
    }
    else if (password != repeatPassword) {
        addMessage(repeatPasswordId, "两次输入的密码不一致", "msgred", borderFlag);
    }
    return returnFlag;
}
function checkPasswordEqualB(password, repeatPassword, repeatPasswordId, borderFlag) {
    password = $.trim(password);
    repeatPassword = $.trim(repeatPassword)
    var returnFlag = false;
    if (password.length <= 0) {
        addMessage(repeatPasswordId, "请输入新密码", "msgred", borderFlag);
    }
    else if (repeatPassword.length <= 0) {
        addMessage(repeatPasswordId, "请输入确认密码", "msgred", borderFlag);
    }
    else if (password == repeatPassword) {
        returnFlag = true;
    }
    else if (password != repeatPassword) {
        addMessage(repeatPasswordId, "两次输入的密码不一致", "msgred", borderFlag);
    }
    return returnFlag;
}
/**
 * 转义百分号和下划线
 * @param {} value
 * @return 转义后的字符
 */
function changePercentAndUnderline(value) {
    var changeValue = value.replace(/%/g, "'%'");
    changeValue = changeValue.replace(/_/g, "'_'");
    return changeValue;
}
/**
 * 验证电子邮箱字符串是否合法 msgId为空则不会显示消息
 * @param {} str 需要验证字符串
 * @return {Boolean}
 */
function checkMail(StrMail) {
    // 判断邮箱是否按规则填写
    var emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    // 校验字符串
    if (emailReg.test(StrMail)) {
        return true;
    }
    // 如果校验未成功,显示提示信息
    else {
        return false;
    }
}
/**
 * 验证电话传真字符串是否合法 msgId为空则不会显示消息
 * @param {} str 需要验证字符串
 * @return {Boolean}
 */
function checkTell(strTel) {
    // 判断是否按规则填写
    var tellReg = /(^[0-9\+\-]{1,15}$)/;
    // 校验字符串
    if (tellReg.test(strTel)) {
        return true;
    }
    // 如果校验未成功,不显示提示信息
    else {
        return false;
    }
}
/**
   * 验证名称字符串是否合法 msgId为空则不会显示消息
   * @param {} str 需要验证字符串
   * @return {Boolean}
   */
function checkEnlishStr(str) {
    // 判断是否按规则填写
    var patrn = /^[\s()/,，A-Za-z0-9_-]+$/;
    // 校验字符串
    if (patrn.test(str) && str.length > 0 && str.length <= 50) {
        // 如果校验成功
        return true;
    }
    else {
        // 如果校验失败
        return false;
    }
}
function checkString(str) {
    // 判断是否按规则填写
    var patrn = /^[^!"#$%&'()*+,\-\/\:;<=>?[\]^`{|}~\t\n\x0B\f\r￥]+$/;
    // 校验字符串
    if (patrn.test(str) && str.length > 1 && str.length <= 20) {
        // 如果校验成功
        return true;
    }
    else {
        // 如果校验失败
        return false;
    }
}
function checkString50(str) {
    // 判断是否按规则填写
    var patrn = /^[^!"#$%&'()*+,\-\/\:;<=>?[\]^`{|}~\t\n\x0B\f\r￥]+$/;
    // 校验字符串
    if (patrn.test(str) && str.length > 1 && str.length <= 50) {
        // 如果校验成功
        return true;
    }
    else {
        // 如果校验失败
        return false;
    }
}
/**
 * 验证邮编字符串是否合法 msgId为空则不会显示消息
 * @param {} str 需要验证字符串
 * @return {Boolean}
 */
function checkPostcode(strPostcode) {
    var postCodeReg = /^[0-9]{6}$/;
    // 校验字符串
    if (postCodeReg.test(strPostcode) || strPostcode == "") {
        return true;
    }
    else {
        return false;
    }
}
/**
 * 内容显示，如果内容为空，则显示&nbsp;
 * @param content 要显示的内容
 * @return 夏成城 2012-1-12
 */
function showContent(content) {
    if (content == "") {
        return "&nbsp;"
    }
    else {
        return content;
    }
}
var zz_mask;
function zzLoadStart() {
    // 创建检索状态的控件
    zz_mask = document.createElement('div');
    // 为控制填加样式
    // 设置高度
    $(zz_mask).css("height", $(document).height());
    // 显示检索状态效果
    $(zz_mask).addClass("default_mask");
    $("body").append(zz_mask);
}
function zzLoadEnd() {
    $(zz_mask).remove();
}
