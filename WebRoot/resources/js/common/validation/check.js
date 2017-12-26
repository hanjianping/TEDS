/**
 * check名称
 * @param value 传递的值
 * @param options 传递参数(默认值:required:false,min:2,max:20)
 * @return boolean
 */
function checkName(value, options) {
    // 去除首尾空格
    value = $.trim(value);
    options = jQuery.extend({
        required : false,
        min : 2,
        max : 20
    }, options);
    var reg = /[!"#$%&'()*+\:;<=>?[\]^`|~\t\n\x0B\f\r￥]+/;
    // 如果是必填项
    if (options.required) {
        if (value == null || value == "") {
            return false;
        }
    }
    else {
        // 如果不是必填项，并且为空，则返回true
        if (value == null || value == "") {
            return true;
        }
        // 如果不为空，则判断长度
        else {
            if (value.length < options.min || value.length > options.max) {
                return false;
            }
        }
    }
    // 校验字符串
    if (! reg.test(value)) {
        return true;
    }
    // 如果校验未成功,不显示提示信息
    else {
        return false;
    }
}
/**
 * 密码check
 * @param value 传递的值
 * @param options 传递参数(默认值:min:6,max:20)
 * @return boolean
 */
function checkPassWord(value, options) {
    options = jQuery.extend({
        min : 6,
        max : 20
    }, options);
    if (value.length < options.min || value.length > options.max) {
        return false;
    }
    return true;
}
/**
 * mailcheck
 * @param value 传递的值
 * @param options 传递参数(默认值:min:1,max:99)
 * @return boolean
 */
function checkMail(value, options) {
    // 去除首尾空格
    value = $.trim(value);
    options = jQuery.extend({
        min : 1,
        max : 99
    }, options);
    // 判断邮箱是否按规则填写
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    // 如果不是必填项，并且为空，则返回true
    if (value == null || value == "") {
        return true;
    }
    // 如果不为空，则判断长度
    else {
        if (value.length < options.min || value.length > options.max || ! reg.test(value)) {
            return false;
        }
        return true;
    }
}
/**
 * ValidateCodecheck
 * @param value 传递的值
 * @param options 传递参数(默认值:min:4,max:4)
 * @return boolean
 */
function checkValidateCode(value, options) {
    // 去除首尾空格
    value = $.trim(value);
    options = jQuery.extend({
        min : 4,
        max : 4
    }, options);
    // 判断邮箱是否按规则填写
    var reg = /^[a-zA-Z0-9]+$/;
    // 如果不是必填项，并且为空，则返回true
    if (value == null || value == "") {
        return true;
    }
    // 如果不为空，则判断长度
    else {
        if (value.length < options.min || value.length > options.max || ! reg.test(value)) {
            return false;
        }
        return true;
    }
}
/**
 * 电话check
 * @param value 传递的值
 * @param options 传递参数(默认值:min:1,max:20)
 * @return boolean
 */
function checkTel(value, options) {
    // 去除首尾空格
    value = $.trim(value);
    options = jQuery.extend({
        min : 1,
        max : 20
    }, options);
    // 判断邮箱是否按规则填写
    var reg = /(^[0-9\+\-]+$)/;
    // 如果不是必填项，并且为空，则返回true
    if (value == null || value == "") {
        return true;
    }
    // 如果不为空，则判断长度
    else {
        if (value.length < options.min || value.length > options.max || ! reg.test(value)) {
            return false;
        }
        return true;
    }
}
/**
 * 邮编check
 * @param value 传递的值
 * @param options 传递参数(默认值:min:6,max:6)
 * @return boolean
 */
function checkPostcode(value, options) {
    // 去除首尾空格
    value = $.trim(value);
    options = jQuery.extend({
        min : 6,
        max : 6
    }, options);
    // 判断邮箱是否按规则填写
    var reg = /^[0-9]*$/;
    // 如果不是必填项，并且为空，则返回true
    if (value == null || value == "") {
        return true;
    }
    // 如果不为空，则判断长度
    else {
        if (value.length < options.min || value.length > options.max || ! reg.test(value)) {
            return false;
        }
        return true;
    }
}
/**
 * check网址
 * @param value 传递的值
 * @param options 传递参数(默认值:min:2,max:8)
 * @return boolean
 */
function checkUrl(value, options) {
    // 去除首尾空格
    value = $.trim(value);
    options = jQuery.extend({
        min : 2,
        max : 8
    }, options);
    var reg = /[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
    // 如果不是必填项，并且为空，则返回true
    if (value == null || value == "") {
        return true;
    }
    // 如果不为空，则判断长度
    else {
        if (value.length < options.min || value.length > options.max || ! reg.test(value)) {
            return false;
        }
        return true;
    }
}
/**
 * 上传的文件类型check
 */
function filecheck() {
	//上传文件名称的取得
	var fileTyprName = document.getElementById("fileTypeCheck").value;
	//根据文件名称分割出文件后缀
	var fileType = fileTyprName.split(".");
	//确定上传的文件类型
	var fileRealType = fileType[1];
	//判断上传文件类型是不是标准文件
	switch(fileRealType) {
	case "txt":
		break;
	case "doc":
		break;
	case "xls":
		break;
	case "jpg":
		break;
	case "gif":
		break;
	case "jpeg":
		break;
	case "png":
		break;
	default:
		//errorMessage抛出
		alert("请选择正确的文件格式！");
	}
}