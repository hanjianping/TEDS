var DateUtil = new Date();
/**
 * 检查时间,一位补零
 * 
 * @param num 时间值
 * @return String 修改后时间值
 */
function chkTime(num) {
    return num < 10 ? "0" + num : num;
}
/**
 * 判断是否为日期 key可以传null 默认为“-”区分
 * @param {} date 日期
 * @param {} key 日期分隔符
 * @return boolean 检查结果
 */
Date.prototype.isDate = function(date, key) {
    // 判断传入的日期分隔符是否为空 如果为空设置默认分隔符“-”
    if (key == null || key == 'undefined') {
        key = "-";
    }
    // 分割日期字符串
    var arrDate = date.split("-");
    // 判断是否为三位 完整的日期被分割后 有 年 月 日 三个
    if (arrDate.length != 3) {
        return false;
    }
    var year = arrDate[0];
    var month = arrDate[1];
    var day = arrDate[2];
    // 判断年、月、日 的长度是否正确
    if (year.length != 4 || month.length != 2 || day.length != 2) {
        return false;
    }
    // 判断年的有效性
    else if (isNaN(year) || parseInt(year) < 1900 || parseInt(year) > 2099) {
        return false;
    }
    // 判断月的有效性
    else if (isNaN(month) || parseInt(month, 10) < 1 || parseInt(month) > 12) {
        return false;
    }
    // 判断日的有效性
    else if (isNaN(day) || parseInt(day, 10) < 1 || parseInt(day) > 31) {
        return false;
    }
    return true;
}
/**
 * 格式化时间 Json数据
 * @param {} jsondate 时间
 * @param {} dformat 格式
 * @return {} 指定格式的date
 */
Date.prototype.formatJson = function(jsondate, dformat) {
    // 判断是否为空 为空设置默认格式
    if (dformat == null || dformat == 'undefined') {
        dformat = "Y-m-d H:i:s";
    }
    // Y:年 m:月 d:日 H:时 i:分 s:秒
    // 得到年
    var year = parseInt(jsondate['year']) + 1900;
    // 得到月 从零开始的这里需要加“1”
    var month = chkTime(parseInt(jsondate['month']) + 1);
    // 得到日
    var day = chkTime(jsondate['date']);
    // 得到小时
    var hours = chkTime(jsondate['hours']);
    // 得到分钟
    var minutes = chkTime(jsondate['minutes']);
    // 得到秒
    var seconds = chkTime(jsondate['seconds']);
    // 返回格式化之后的时间
    return dformat.replace("Y", year).replace("m", month).replace("d", day).replace("H", hours).replace("i", minutes)
            .replace("s", seconds);
}
/**
 * 比较两个时间的大小
 * @param {} startDate 起始时间
 * @param {} endDate 结束时间
 * @return {} boolean 结束时间大于开始时间 返回 true 结束时间小于开始时间 返回 false
 */
Date.prototype.checkLegalDate = function(startDate, endDate) {
    // 起始日期，结束日期不为空的情况
    if (startDate != "" && endDate != "") {
        var startDate = startDate.replace(/-/g, "");
        var endDate = endDate.replace(/-/g, "");
        if (startDate > endDate) {
            return false;
        }
    }
    return true;
}
/**
 * 日期格式化 普通日期 默认格式 yyyy-MM-dd 如果需要其他格式日期可以自己设定
 * @param {} fmt 日期格式
 * @param {} date 自己需要格式化的日期
 * @return {} 格式化后的系统日期
 */
Date.prototype.formatDate = function(fmt, date) {
    // 判断是否为空 为空设置默认格式
    if (null == fmt || 'undefined' == fmt) {
        fmt = 'yyyy-MM-dd';
    }
    if (null == date || 'undefined' == date) {
        date = this;
    }
    else {
        date = new Date(date);
    }
    // 时间
    var o = {
        // 月份
        "M+" : date.getMonth() + 1,
        // 日
        "d+" : date.getDate(),
        // 小时 12小时制
        "h+" : date.getHours() % 12 == 0 ? 12 : date.getHours() % 12,
        // 小时
        "H+" : date.getHours(),
        // 分
        "m+" : date.getMinutes(),
        // 秒
        "s+" : date.getSeconds(),
        // 季度
        "q+" : Math.floor((date.getMonth() + 3) / 3),
        // 毫秒
        "S" : date.getMilliseconds()
    };
    // 星期
    var week = {
        "0" : "日",
        "1" : "一",
        "2" : "二",
        "3" : "三",
        "4" : "四",
        "5" : "五",
        "6" : "六"
    };
    // 判断年是否匹配当前格式
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    // 判断星期是否匹配当期格式
    if (/(E+)/.test(fmt)) {
        fmt =
                fmt.replace(
                    RegExp.$1,
                    ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[date.getDay() + ""]
                );
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}