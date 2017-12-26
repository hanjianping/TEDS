/**
 * 扩展提交方式(ajax、ajaxSubmit、submit)
 * 封装令牌数据
 * @author 闫冬
 */
;
(function($) {
    /**
     * 带令牌提交表单
     */
    $.fn.submitExtA = function(options) {
        submitExt(options, true, this);
    }
    /**
     * 不带令牌提交表单
     */
    $.fn.submitExtB = function(options) {
        submitExt(options, false, this);
    }
    /**
     * 带令牌ajax提交表单
     */
    $.fn.ajaxSubmitExtA = function(options, loadingFlag) {
        ajaxSubmitExt(options, true, this, loadingFlag);
    }
    /**
     * 不带令牌ajax提交表单
     */
    $.fn.ajaxSubmitExtB = function(options, loadingFlag) {
        ajaxSubmitExt(options, false, this, loadingFlag);
    }
    /**
     * ajax请求重新封装
     */
    $.extend({
        // 带令牌请求
        ajaxExtA : function(options) {
            ajaxExt(options, true);
        },
        // 不带令牌请求
        ajaxExtB : function(options) {
            ajaxExt(options, false);
        }
    });
    function ajaxExt(options, isRefToken) {
        // 定义令牌
        var token = "";
        // 是否需要令牌验证
        if (isRefToken) {
            // 如果需要令牌验证,则将令牌数据追加到请求参数中
            token = $("#tokenName").val();
        }
        else {
            // 如果不需要令牌验证,则将代理令牌数据追加到请求参数中
            token = "N6UKYC6SH67QTPB0FMPN964WAZLY7HU8";
        }
        // 取得请求参数
        var dataExt = options.data == null || options.data.length == 0 ? {} : options.data;
        // 追加令牌参数
        dataExt = $.extend(dataExt, {
            tokenName : token,
            isAjax : true
        });
        // 重新设置参数对象
        options.data = dataExt;
        // 处理ajax请求带回的令牌
        // 取得ajax请求成功的回调函数
        var callBack = options.success == null ? function() {
        } : options.success;
        // 取得ajax请求的返回数据类型
        var dataType = options.dataType;
        // 设置请求类型为默认类型
        options.dataType = null;
        // 设置回调函数指向当前方法
        options.success = function(result) {
            if (isRefToken) {
                // 处理令牌数据后,将数据返回到调用处
                var newToken = result.substring(0, 32);
                // 将新令牌设置到画面
                $("#tokenName").val(newToken);
                // 取得数据
                result = result.substring(32, result.length);
            }
            // 如果画面超时过期,
            if (result.indexOf("invalidTokenFlag") != - 1) {
                // alert("该页面已经过期，不能提交！");
                $("#tokenName").val("");
                window.location.href = "invalidation.jsp";
            }
            // 抛出系统异常 给出提示信息
            else if (result.indexOf("AjaxExceptionFlag") != - 1) {
                $("#tokenName").val("");
                window.location.href = "exception.jsp";
            }
            // 如果没有权限时,返回到登陆页
            else if (result.indexOf("loginFlag") != - 1) {
                window.location.href = "login.jsp";
            }
            // 如果未指定返回数据类型则直接返回数据
            else if (dataType == null || dataType == 'undefined') {
                callBack(result);
            }
            // 如果指定了返回数据类型为json则转换数据为json类型后返回数据
            else if (dataType == "json") {
                callBack(parseJSON(result));
            }
            else {
                callBack(result);
            }
        }
        $.ajax(options);
    }
    var parseJSON = $.parseJSON || function(data) {
        return window['eval']('(' + data + ')');
    };
    /**
     * ajax提交表单重新封装
     */
    function ajaxSubmitExt(options, isRefToken, formObj, loadingFlag) {
        // 原token值
        var srcToken = $("#tokenName").val();
        if ($("input[name='isAjax']").length == 0) {
            // 设置请求方式为ajax
            $(formObj).append('<input type="hidden" name="isAjax" value="true" />');
        }
        // 是否需要令牌验证
        if (isRefToken) {
            if ($("input[name='tokenName']").length > 1) {
                $(formObj).find("#tokenName").remove();
            }
            // 如果需要令牌验证,则将令牌标签追加到该form中
            $(formObj).append($("#tokenName"));
        }
        else {
            if ($("input[name='tokenName']").length > 1) {
                $(formObj).find("#tokenName").remove();
            }
            // 如果不需要令牌验证,则将代理令牌标签追加到该form中
            $(formObj).append($("#tokenName").val("N6UKYC6SH67QTPB0FMPN964WAZLY7HU8"));
        }
        error = function() {
            alert("请求失败或超时，请稍后再试！");
            overLoad();
        }
        // 如果传入参数是方法,则直接赋值,如果不是方法,则取得options中的success属性
        var paramSeccess = null;
        if (typeof options == 'function') {
            paramSeccess = options;
            options = {
                success : beforeSeccess
            };
        }
        else {
            paramSeccess = options.success;
            options.success = beforeSeccess;
        }
        // 自定义回调函数 用来在每个回调之前判断是否出现异常
        function beforeSeccess(result) {
            if (isRefToken) {
                // 处理令牌数据后,将数据返回到调用处
                var newToken = result.substring(0, 32);
                // 将新令牌设置到画面
                $("#tokenName").val(newToken);
                // 取得数据
                result = result.substring(32, result.length);
            }
            else {
                $("#tokenName").val(srcToken);
            }
            // 抛出系统异常 给出提示信息
            if (result.indexOf("AjaxExceptionFlag") != - 1) {
                alert("系统出现异常！处理失败！");
                overLoad();
            }
            // 如果画面超时过期,
            else if (result.indexOf("invalidTokenFlag") != - 1) {
                // alert("该页面已经过期，不能提交！");
                $("#tokenName").val("");
                window.location.href = "invalidation.jsp";
            }
            // 如果没有权限时,返回到登陆页
            else if (result.indexOf("loginFlag") != - 1) {
                window.location.href = "login.jsp";
            }
            // 没有异常的情况下 调用真实回调函数 判断Ajax异常标识是否存在
            else {
                paramSeccess(result);
            }
        }
        // 追加ajax开始请求和结束请求函数
        options = $.extend(true, {}, {
            beforeSend : startLoad,
            error : error
        }, options);
        $(formObj).ajaxSubmit(options);
    }
    /**
     * 表单提交重新封装
     */
    function submitExt(options, isRefToken, formObj) {
        // 移除请求类型(ajax)
        $("input[name='isAjax']").remove();
        var srcToken = $("#tokenName").val();
        // 是否需要令牌验证
        if (isRefToken) {
            if ($("input[name='tokenName']").length > 1) {
                $(formObj).find("#tokenName").remove();
            }
            // 如果需要令牌验证,则将令牌标签追加到该form中
            $(formObj).append($("#tokenName"));
        }
        else {
            if ($("input[name='tokenName']").length > 1) {
                $(formObj).find("#tokenName").remove();
            }
            // 如果不需要令牌验证,则将代理令牌追加到该form中
            $(formObj).append($("#tokenName").val("N6UKYC6SH67QTPB0FMPN964WAZLY7HU8"));
        }
        if (typeof options == 'function') {
            $(formObj).submit(options);
        }
        else {
            $(formObj).submit();
        }
        $("#tokenName").val(srcToken);
    }
})(jQuery);
