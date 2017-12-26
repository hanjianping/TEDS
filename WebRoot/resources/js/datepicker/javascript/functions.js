$(document).ready(function() {
    $('#datepicker-example1').DatePicker();
    $('#datepicker-example2').DatePicker({
        format : 'Y-m-d H:i:s',
        element_width : '160px'
    });
    $('#datepicker-example3').DatePicker();
    $('#datepicker-example4').DatePicker({
        format : 'Y-m-d H:i:s',
        element_width : '160px'
    });
    $('#datepicker-example5').DatePicker({
        view : 'years'
    });
    $('#datepicker-example6').DatePicker({
        view : 'months'
    });
    $('#datepicker-example7').DatePicker({
        view : 'years_st'
    });
    $('#datepicker-example8').DatePicker({
        view : 'months_st'
    });
});