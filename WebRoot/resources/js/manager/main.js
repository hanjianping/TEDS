$(function() {
    // var leftHeight = $('div.mainLeft').outerHeight(),
    // rightHeight = $('div.mainRight').outerHeight();
    // $('div.mainLeft').height(Math.max(leftHeight,rightHeight));
    var $mainLeft = $('div.mainLeft');
    $('h2', $mainLeft).click(function() {
        var $h2 = $(this), $a = $('a', $h2), $ul = $h2.next('ul');
        $a.attr('class', ($a.attr('class') === 'close') ? 'open' : 'close');
        $ul.attr('class', ($ul.attr('class') === 'hide') ? 'show' : 'hide');
    });
    $('#lnk_' + $('#this_page_id').val()).parent().attr("class", "show");
    $('#lnk_' + $('#this_page_id').val()).attr("class", "focus");
    // 鼠标滑过行变色
    $('table.table tr').hover(function() {
        $(this).addClass('bgColor1');
    }, function() {
        $(this).removeClass('bgColor1');
    });
});