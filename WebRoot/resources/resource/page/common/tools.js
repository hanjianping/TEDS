/**
 * Created by dongliang on 2016/5/9.
 */
function cancel(url) {
    window.location.href = url;
}

function isEmpty(id,text) {
    var falg = false;
    var input = $('#' + id);
    var val = input.val();
    if(val == '') {
        if(id == 'deliveryDays') {
            input.attr('style','width: 40px;height: 15px;line-height: 15px;border-color: red;');
        } else {
            input.attr('style','border-color: red;');
        }
        $('#' +id + 'Msg').attr('class','input-error tooltips');
        $('#' +id + 'Msg').attr('data-original-title',text);
        $('#' +id + 'Icon').attr('class','icon-exclamation-sign');
        $('#' +id + 'Icon').attr('style','color: red;');
        return false;
    } else {
        if(id == 'deliveryDays') {
            input.attr('style','width: 40px;height: 15px;line-height: 15px;border-color: green;');
        } else {
            input.attr('style','border-color: green;');
        }
        $('#' +id + 'Msg').attr('class','input-success tooltips');
        $('#' +id + 'Msg').attr('data-original-title','通过验证');
        $('#' +id + 'Icon').attr('class','icon-ok');
        $('#' +id + 'Icon').attr('style','color: green;');
        falg = true;
    }
    return falg;
}
