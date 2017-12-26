function submodidyPWD(){
	var id=$('#currentUserID').val();
	var newpwd=$('#newpwd').val().trim();
	var repwd=$('#repwd').val().trim();
	var oldpwd=$('#oldpwd').val().trim();
	var flag=false;
	if(oldpwd==null ||oldpwd==''){
		$('#oldpwd').val('');
		$('#oldpwd').css("border-color","red");
		$('#oldinfo').html('请填写原密码');
		  return false;
	}
	if(newpwd==null ||newpwd==''){
		$('#newpwd').val('');
		$('#newpwd').css("border-color","red");
		$('#newinfo').html('请填写新密码');
		  return false;
	}
	if(newpwd!=repwd){
		$('#repwd').val('');
		$('#repwd').css("border-color","red");
		$('#repinfo').html('两次输入的密码不一致！');
		  return false;
	}
	   $.ajax({
			        type : 'post',
			        url : 'register/verifyPWD.action',
			        data : {
			        	id :id,
			        	newPWD:newpwd
			        },
			        success : function(param) {
			        	if(param.info =="success"){
			                $('#success').modal();
			                setTimeout(function(){
			                    $('#success').modal('hide');
			                    window.location = "modifyPWD-result.jsp";
			                },2000);
			        }else{
			        	$('#error').modal();
		                setTimeout(function(){
		                    $('#error').modal('hide');
		                    window.location = "Setting_updatePwd.action";
		                },2000);
			        	}
			        }
			    });
			}


function checkOldPWD(){
	$('#oldinfo').html('');
	$('#oldpwd').css("border-color","green");
	var currentUserPWD=$('#currentUserPWD').val();
	var oldpwd=$('#oldpwd').val().trim();
	if(currentUserPWD!=oldpwd){
		$('#oldpwd').val('');
		$('#oldpwd').css("border-color","red");
		$('#oldinfo').html('原密码不正确！');
		return null;
	}
}
function checkSame(){
	var newpwd=$('#newpwd').val().trim();
	var repwd=$('#repwd').val().trim();
	$('#repinfo').html('');
	$('#repwd').css("border-color","green");
	if(newpwd!=repwd){
		$('#repwd').val('');
		$('#repwd').css("border-color","red");
		$('#repinfo').html('两次输入的密码不一致！');
		  return false;
	}
}