/**备注单击获取焦点时变换高度和样式*/
$.fn.autoChangeRemark = function() {
    // 如果有值，那么自动变换高度和样式
    if ("" != $.trim($(this).val())) {
        $(this).css({
            height : '54px'
        });
    }
    // 如果无值，那么自动变换高度和样式
    else {
        $(this).css({
            height : '20px'
        });
    }
    // 点击或光标移入，变换高度和样式
    $(this).bind("click focus", function() {
        $(this).css({
            height : '54px'
        });
        $(this).addClass("remark_click");
    });
    // 光标移出，如果值为空变换回默认高度和样式
    $(this).bind("blur", function() {
        if ($.trim($(this).val()) == "") {
            $(this).css({
                height : '20px'
            });
        }
        $(this).removeClass("remark_click");
    });
}