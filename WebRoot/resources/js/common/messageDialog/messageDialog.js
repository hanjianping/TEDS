$(function() {
    ;
(function($) {
        $.fn.extend({
            "successDialog" : function(options) {
                var defaults = {callBack : function(){}};
                var obj = $.extend(defaults, options);
                if (! ($("#confirmDiv").is(":visible"))) {
                    $("body").append("<div id='confirmDiv' style='z-index: 9999;'>"
                            + "<div class='savebg'>提示信息</div><div class='saveimgok'></div></div>");
                    $("#confirmDiv").css("top", ($(window).height() - $("#confirmDiv").height()) / 2).css(
                        "left",
                        ($(window).width() - $("#confirmDiv").width()) / 2
                    );
                    $("#confirmDiv").fadeIn(500, function() {
                        $("#confirmDiv").delay(1000).fadeOut(500, function() {
                            $("#confirmDiv").remove();
                            obj.callBack();
                        });
                    });
                }
            },
            "errorDialog" : function(msg) {
                if (! ($("#confirmDiv").is(":visible"))) {
                    $("body").append("<div id='confirmDiv' style='z-index:9999;'>"
                            + "<div class='savebg'>提示信息</div><div class='saveimgwrong'></div></div>");
                    $("#confirmDiv").css("top", ($(window).height() - $("#confirmDiv").height()) / 2).css(
                        "left",
                        ($(window).width() - $("#confirmDiv").width()) / 2
                    );
                    $("#confirmDiv").fadeIn(1000, function() {
                        $("#confirmDiv").delay(1000).fadeOut(1000, function() {
                            $("#confirmDiv").remove()
                        });
                    });
                }
            },
            "syserrorDialog" : function(msg) {
                if (! ($("#confirmDiv").is(":visible"))) {
                    $("body").append("<div id='confirmDiv'>"
                            + "<div class='savebg'>提示信息</div><div class='saveimgfail'></div></div>");
                    $("#confirmDiv").css("top", ($(window).height() - $("#confirmDiv").height()) / 2).css(
                        "left",
                        ($(window).width() - $("#confirmDiv").width()) / 2
                    );
                    $("#confirmDiv").fadeIn(1000, function() {
                        $("#confirmDiv").delay(1000).fadeOut(1000, function() {
                            $("#confirmDiv").remove()
                        });
                    });
                }
            }
        });
    })(jQuery);
});
function showMessage(msg, id, top, left, width) {
    if (! ($("#" + id).is(":visible"))) {
        $("body").append("<div id='" + id + "' class='formError' style='top: " + top + "px; left: " + left
                + "px; margin-top: 0px; opacity: 0.87;'><div class='formErrorContent'  style='width:" + width
                + "px;'>*" + msg + "<br></div><div class='formErrorArrow'>"
                + "<div class='line10'></div><div class='line9'></div>"
                + "<div class='line8'></div><div class='line7'></div>"
                + "<div class='line6'></div><div class='line5'></div>"
                + "<div class='line4'></div><div class='line3'></div>"
                + "<div class='line2'></div><div class='line1'></div></div></div>");
    }
}
function deleteMessage(id) {
    $("#" + id).remove();
}
//定义检索状态的div对象
var mask;
/**
 * 置为结束检索状态
 */
function overLoad() {
    // 移除检索状态效果
    $(mask).remove();
}
/**
 * 置为正在检索状态
 */
function startLoad() {
    // 创建检索状态的控件
    mask = document.createElement('div');
    // 为控制填加样式
    $(mask).addClass("loaddata_mask");
    // 设置高度
    $(mask).css("height", $(document).height());
    // 显示检索状态效果
    $("body").append(mask);
}