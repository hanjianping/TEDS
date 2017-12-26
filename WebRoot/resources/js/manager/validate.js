/**
 * 限制textarea长度
 * 给textarea 加事件(1000是限制长度,自己改)
 * onpropertychange="checkLength(this,1000);"
 * oninput="checkLength(this,1000);"
 * @param obj textarea对象
 * @param maxlength 限制的长度
 * @return 无
 */
function checkLength(obj, maxlength) {
    // 取得限制长度的内容
    var content = obj.value;
    // 如果输入长度大于限制长度
    if (content.length > maxlength) {
        // 只显示限制长度大小的内容
        obj.value = obj.value.substring(0, maxlength);
    }
}
function isTel(controller) {
    var tel = controller.value;
    var validchars = "-()1234567890 ";
    for (i = 0; i < tel.length; i++) {
        telchar = tel.charAt(i);
        if (validchars.indexOf(telchar, 0) == - 1) {
            alert("请输入正确的电话号码格式！");
            controller.focus();
            return false;
        }
    }
    return true;
}
/**
 * 电话验证
 * @param strTell 电话
 * @return boolean 布尔值
 */
function checkTel(strTell) {
    var tellReg = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[0-9]{10}$)/;
    // var tellReg = /\d{3}-\d{8}|\d{4}-\d{7}/;
    if (! tellReg.test($(strTell).val())) {
        alert("请输入正确的电话！");
        strTell.focus();
        return false;
    }
    return true;
}
/**
 * 传真验证
 * @param strEmail 
 * @return {Boolean}
 */
function checkFax(strFax) {
    var faxReg = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)/;
    var email = $.trim($(strFax).val());
    // 传真不为空的时候做验证
    if (email.length != 0) {
        if (! faxReg.test($(strFax).val())) {
            alert("请输入正确的传真！");
            strFax.focus();
            return false;
        }
    }
    return true;
}
/**
 * 邮箱格式
 * @param strEmail 邮箱
 * @return boolean 布尔值
 */
function checkEmail(strEmail) {
    var emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    var email = $.trim($(strEmail).val());
    // 匹配验证邮箱的正则表达式
    if (! emailReg.test(email)) {
        alert("请输入正确的邮箱！");
        strEmail.focus();
        return false;
    }
    return true;
}
/**
 * 邮箱格式
 * @param strEmail 邮箱
 * @return boolean 布尔值
 */
function checkEmailList(strEmailList) {
    var emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    var emailList = $.trim($(strEmailList).val());
    // 取得邮箱列表
    var emailArrList = emailList.split(";");
    // 判断邮箱列表的大小，如果大于1 则循环验证每个邮箱的有效性
    if (emailArrList.length > 1) {
        for (var index = 0; index < emailArrList.length; index++) {
            // 循环取得单个邮箱进行验证
            var email = emailArrList[index];
            // 如果邮箱不为空的话
            if ($.trim(email) != "") {
                email = getEmail(email);
                // 匹配验证邮箱的正则表达式
                if (! emailReg.test(email)) {
                    alert("请输入正确的邮箱！");
                    strEmailList.focus();
                    return false;
                }
                if (getEmail(emailArrList[index]) == getEmail(emailArrList[index + 1])) {
                    alert("邮箱重复！");
                    strEmailList.focus();
                    return false;
                }
            }
        }
    }
    // 如果邮箱列表大小等于1 则直接验证
    else {
        if (emailList.indexOf("<") != - 1 && emailList.indexOf(">") != - 1) {
            // 截取"<"取">"之间的字符串 做为邮箱地址
            emailList = emailList.substring(emailList.indexOf("<") + 1, (emailList.length - 2));
        }
        if (! emailReg.test(emailList)) {
            // 如果未通过验证 则弹出提示信息 并返回false
            alert("请输入正确的邮箱！");
            strEmailList.focus();
            return false;
        }
    }
    return true;
}
/**
 * 取得邮箱
 * @param {} strPostcode
 * @return {Boolean}
 */
function getEmail(email) {
    if ($.trim(email) != "") {
        // 判断邮箱格式是否为 "名称"<address@test.com>
        if (email.indexOf("<") != - 1 && email.indexOf(">") != - 1) {
            // 截取"<"取">"之间的字符串 做为邮箱地址
            email = email.substring(email.indexOf("<") + 1, (email.length - 1));
        }
    }
    return email;
}
/**
 * 中国邮政编码(6位) 
 * @param strPostcode 邮政编码
 * @return boolean 布尔值
 */
function checkPostcode(strPostcode) {
    var flag = true;
    var postCodeReg = /^[0-9]{6}$/;
    var postCode = $.trim($(strPostcode).val());
    // 邮政编码不为空的时候做验证
    if (postCode.length != 0) {
        if (! postCodeReg.test(postCode)) {
            alert("请输入正确的邮政编码！");
            strPostcode.focus();
            return false;
        }
    }
    return flag;
}
var flag = true;
/**
 * 检查输入的是否为空
 * @param controller
 * @param message
 * @return boolean 布尔值
 */
function checkNull(controller, message) {
    var value = $.trim($(controller).val());
    $(controller).val(value);
    if (value.length == 0) {
        alert(message + "不能为空！");
        controller.select();
        return false;
    }
    return flag;
}
/**
 * 字符验证,只能输入字母,数字,下滑线,中划线
 * @param obj
 *            要验证的单行文本对象
 * @return 验证结果 true：通过 false 不通过
 */
function checkCharacter(obj) {
    if (obj.value.length < 0 || obj.value == "") {
        return;
    }
    var patrn = /^[A-Za-z0-9_-]+$/;
    if (! patrn.exec(obj.value)) {
        alert("序号只能由数字,字符,下划线,中划线组成");
        this.value = "";
    }
}
/**
 * 验证名称字符串是否合法 msgId为空则不会显示消息
 * @param {} str 需要验证字符串
 * @param {} msgId 消息显示位置ID
 * @param {} msgSuc 成功时显示消息
 * @param {} msgFru 失败显示消息
 * @return {Boolean}
 */
function checkRepairyardSalsTypeString(str, msgId, msgSuc, msgFru) {
    // 判断是否按规则填写
    var patrn = /^[^!"#$%&'()*+,-./:;<=>?@[\]^`{|}~\t\n\x0B\f\r￥！]+$/;
    // 校验字符串
    if (patrn.test(str) && str.length > 1 && str.length <= 20) {
        // 如果校验成功
        if (msgId != null) {
            $('#' + msgId).html(msgSuc);
        }
        return true;
    }
    else {
        // 如果校验失败
        if (msgId != null) {
            $('#' + msgId).html(msgFru);
        }
        return false;
    }
}
/**
 * 验证电话传真字符串是否合法 msgId为空则不会显示消息
 * @param {} str 需要验证字符串
 * @param {} msgId 消息显示位置ID
 * @param {} msgSuc 成功时显示消息
 * @param {} msgFru 失败显示消息
 * @return {Boolean}
 */
function checkRepairyardTelTypeString(strTel, msgId, msgSuc, msgFru) {
    // 判断是否按规则填写
    var tellReg = /(^[0-9\+\-]{1,20}$)/;
    // 校验字符串
    if (tellReg.test(strTel)) {
        if (msgId != null) {
            $('#' + msgId).html(msgSuc);
        }
        return true;
    }
    // 如果校验未成功,不显示提示信息
    else {
        if (msgId != null) {
            $('#' + msgId).html(msgFru);
        }
        return false;
    }
}
/**
 * 验证电子邮箱字符串是否合法 msgId为空则不会显示消息
 * @param {} str 需要验证字符串
 * @param {} msgId 消息显示位置ID
 * @param {} msgSuc 成功时显示消息
 * @param {} msgFru 失败显示消息
 * @return {Boolean}
 */
function checkRepairyardMailTypeString(StrMail, msgId, msgSuc, msgFru) {
    // 判断邮箱是否按规则填写
    var emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    // 校验字符串
    if (emailReg.test(StrMail)) {
        if (msgId != null) {
            $('#' + msgId).html(msgSuc);
        }
        return true;
    }
    // 如果校验未成功,显示提示信息
    else {
        if (msgId != null) {
            $('#' + msgId).html(msgFru);
        }
        return false;
    }
}
/**
 * 验证邮编字符串是否合法 msgId为空则不会显示消息
 * @param {} str 需要验证字符串
 * @param {} msgId 消息显示位置ID
 * @param {} msgSuc 成功时显示消息
 * @param {} msgFru 失败显示消息
 * @return {Boolean}
 */
function checkRepairyardPostcodeTypeString(strPostcode, msgId, msgSuc, msgFru) {
    var postCodeReg = /^[0-9]{6}$/;
    // 校验字符串
    if (postCodeReg.test(strPostcode) || strPostcode == "") {
        if (msgId != null) {
            $('#' + msgId).html(msgSuc);
        }
        return true;
    }
    else {
        if (msgId != null) {
            $('#' + msgId).html(msgFru);
        }
        return false;
    }
}
/**
* 验证消息字符串是否合法 msgId为空则不会显示消息
* @param {} str 需要验证字符串
* @param {} msgId 消息显示位置ID
* @param {} msgSuc 成功时显示消息
* @param {} msgFru 失败显示消息
* @return {Boolean}
*/
function checkMessageSalsTypeString(str, msgId, msgSuc, msgFru) {
    // 判断是否按规则填写
    var patrn = /^[^!"#$%&'()*+,-./:;<=>?@[\]^`~\t\n\x0B\f\r￥]+$/;
    // 校验字符串
    if (patrn.test(str) && str.length > 1 && str.length <= 20) {
        // 如果校验成功
        if (msgId != null) {
            $('#' + msgId).html(msgSuc);
        }
        return true;
    }
    else {
        // 如果校验失败
        if (msgId != null) {
            $('#' + msgId).html(msgFru);
        }
        return false;
    }
}