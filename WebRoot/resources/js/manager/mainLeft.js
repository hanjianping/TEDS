$(function() {
    $('#lnk_' + $('#this_page_id').val()).parent().attr("class", "show");
    $('#lnk_' + $('#this_page_id').val()).parent().prev("h2").children("a").attr("class", "open");
    $('#lnk_' + $('#this_page_id').val()).attr("class", "focus");
    var winHeight = document.body.offsetHeight;
    $("div.mainLeft").height();
    $(window).scroll(function() {
        // 得到滚动条到顶部的高度
        if ($(document).scrollTop() > 0) {
            $("div.mainLeft")
        }
        else {
        }
    });
    
    var menuArray = $(".nav ul");
    
    $('#lnk_' + $('#this_page_id').val()).parent().attr("id","showul");
    
    $(".nav ul[id!='showul']").remove();
    
    $(".nav span").click(function(){
        
      // 如果点击的是自己，并且自己是显示的，则隐藏自己
      if ($(this).next().is("ul:visible")) {
          
          $thisul = $(this).next();
          
          $thisul.slideUp(500, function(){
              $thisul.remove();
          });
          return false;
      }
        $tempUl = $(".nav ul");
        $(".nav ul").slideUp(500, function(){
            $tempUl.remove();
        });
        
        var index = $(this).attr("id");
        
        $(this).after(menuArray[index]);
        
        $(this).next().slideDown(500);
        
    });
    
});