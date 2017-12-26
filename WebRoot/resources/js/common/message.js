// 页面顶部滚动消息提示
//页面加载时的操作
$(document).ready(function() {
    
    // 画面加载时检索消息
    showMessages();
    
    // 每隔三分钟检索一次最新消息
    setTimeout(function(){
        showMessages();
    },3*60*1000);
    
    // 检索消息
    function showMessages(){
        
        // 检索消息数据
        $.ajax({
            url:"MessageAction_findMessages.action",
            cache : false,
            success:function(msg){
                
                // msg为消息列表
                // TODO 显示到画面指定位置
                // console.info(msg);
            }
        });
    }
});
