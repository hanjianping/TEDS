//页面加载时的操作
$(document).ready(function() {
	var username = $("#username").val();
	 // 默认选中主页li
	$("li[id='ag_00']").addClass("first_c");
	$("li[id='ag_00']").addClass("currentLi");
	var $li = $("li[id^='li']");
	
	$li.each(function(){
		if($(this).hasClass("current")){
			$("li").removeClass("currentLi");
			$("li").removeClass("first_c");
			$("li").removeClass("second_c");
			$("li").removeClass("third_c");
			$("li").removeClass("forth_c");
			$("li").removeClass("fifth_c");
			$("li").removeClass("sixth_c");
			// 找到对应的菜单
			$(this).parent("ul").parent("li").addClass($(this).parent("ul").parent("li").attr("class")+"_c");
			$(this).parent("ul").parent("li").addClass("currentLi");
			$("ul[id^='ul']").css("display","none");
			// 对应的ul显示
			$(this).parent("ul").css("display","");
		}
	
	});
	
	$("a[id^='my']").mouseover(function(){
		
		// 移除所有li样式
		$("li").removeClass("currentLi");
		$("li").removeClass("first_c");
		$("li").removeClass("second_c");
		$("li").removeClass("third_c");
		$("li").removeClass("forth_c");
		$("li").removeClass("fifth_c");
		$("li").removeClass("sixth_c");
		// 鼠标移动上的菜单加上样式
		
		$(this).closest("li").addClass($(this).closest("li").attr("class")+"_c");
		$(this).closest("li").addClass("currentLi");
		// 隐藏对应的ul
		$("ul[name!='mainTab']").css("display","none");
		// 显示鼠标移上的菜单下面的ul
		$(this).next("ul").css("display","block");
		
		
	});
	$("div[class='wrapContent']").mouseleave(function(){
		// 找到ul下的li
		var $li = $("li[id^='li']");
		
		$li.each(function(){
			if($(this).hasClass("current")){
				$("li").removeClass("currentLi");
				$("li").removeClass("first_c");
				$("li").removeClass("second_c");
				$("li").removeClass("third_c");
				$("li").removeClass("forth_c");
				$("li").removeClass("fifth_c");
				$("li").removeClass("sixth_c");
				// 找到对应的菜单
				$(this).parent("ul").parent("li").addClass($(this).parent("ul").parent("li").attr("class")+"_c");
				$(this).parent("ul").parent("li").addClass("currentLi");
				$("ul[id^='ul']").css("display","none");
				// 对应的ul显示
				$(this).parent("ul").css("display","");
			}
		
		});
	});
	// 退出系统
	$("#logout_btn").click(function(){
		if(confirm('确认要退出系统吗？')){
			window.location.href = 'LoginAction_logout.action';
		}else{
			return;
		}
	});
	
	// 修改密码
	$("#modifyPw").click(function(){
			var html = "";
			html += '<div class="inputItem" style="width:490px"><label>&nbsp;&nbsp;&nbsp;&nbsp;姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：'+username+'</label>';
	        html += '</div>';
	        html += '<div id="passwordDiv">';
	        html += '<div class="inputItem" style="width:490px">';
	        html += '<em>*</em> <label>&nbsp;&nbsp;新&nbsp;&nbsp;密&nbsp;&nbsp;码：</label>';
	        html += '<input class="text w150px" type="password" notNull="not" maxlength="20" id="onePassword" name="onePassword"/>';
	        html += '</div>';
	        html += '<div class="inputItem" style="width:480px">';
	        html += '<em>*</em> <label>&nbsp;&nbsp;确认密码：</label>';
	        html += '<input class="text w150px" notNull="not" type="password" maxlength="20" id="password" name="password"/>';
	        html += '</div>';
	        html += '</div>';
	        html += '<div  style="width:490px">';
	        html += '<a href="javascript:void(0);" onclick="return false;"  id="submitBtn" class="botBtn left_btn"  style="margin-top:20px;margin-bottom: 20px; display:inline-block;text-align:center">保存</a>';
	        html += '<a href="javascript:void(0);" onclick="return false;"  id="cancelBtn" class="botBtn right_btn"  style="margin-top:20px;margin-bottom: 20px;margin-right: 20px;;display:inline-block;text-align:center">取消</a>';
	        html += '</div>'
	        html += '</div>'
				
			showMessageBox("修改密码", html, 400);
	        return;
	});
	 // 点击取消时，关闭层
	$('#cancelBtn').live("click", function() {
	    // 关闭层
	    closeWindow();
	});
	// 关闭弹出层
	$(".tanTopR").click(function(){
		// 关闭层
	    closeWindow();
	});
	// 保存
	$('#submitBtn').live("click", function() {
			// 新密码
			var newPassWord = $("#onePassword").val();
			// 确认密码
			var password = $("#password").val();
			
			if(newPassWord == ""){
				$("#onePassword").addClass("warnningRed");
				alert("新密码不能为空！");
				$("#onePassword").focus();
				return ;
			}else{
				$("#onePassword").removeClass("warnningRed");
			}
			if(password == ""){
				$("#password").addClass("warnningRed");
				alert("确认密码不能为空!");
				$("#password").focus();
				return ;
			}else{
				$("#password").removeClass("warnningRed");
			}
			// 两次密码不同
			if(newPassWord != password){
				alert("两次密码不相同!");
				// 清空密码框
				 $("#onePassword").val("");
				 $("#password").val("");
				 $("#onePassword").focus();
				return;
			}
			$.ajax({
				   type: "POST",
				   url: "LoginAction_updateLoginInfo.action",
				   async :false,
				   data : {
					   onePassword : $("#onePassword").val(),
					   flag : true
				   },
				   tpye : 'json',
				   success : function(data) {
					   if(data == "success"){
						   startLoading();
					        setTimeout(function(){
					            // 弹出成功提示
					            $(this).successDialog({
					            	 callBack : function() {
					            		  // 关闭层
										  closeWindow();
						            }
					            });
					        }, 3000);
						 
					   }
				   }
				   
			 });		
		});
});

/**
 * 置为正在检索状态
 */
function startLoading() {
    // 创建检索状态的控件
    mask = document.createElement('div');
    // 为控制填加样式
    $(mask).addClass("loaddata_mask");
    // 设置高度
    $(mask).css("height", $("#dialogTable").height());
    $(mask).css("width", $("#dialogTable").width());
    // 显示检索状态效果
    $("#dialogTable").append(mask);
}
