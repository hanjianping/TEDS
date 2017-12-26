function gotoDemandPage(num){
	  var id=$("#id").val();
	  var depart=$("#depart").val();
      var realName=$('#realName').val().trim();
	if(num>0){
		window.location.href='User_list.action?pageCode='+num+'&id='+id+'&depart='+depart+'&realName='+realName;
	}
}
 function searchTrain(){
	 var id=$("#id").val();
	  var depart=$("#depart").val();
     var realName=$('#realName').val().trim();
      window.location.href='User_list.action?id='+id+'&depart='+depart+'&realName='+realName;
}
 
 function checkUser(){
	 if ($("#departshow").val()==null||$("#departshow").val()=='') {
		 $("#error_modify").html("请选择部门!");
		 return false;
	}
	  if ($("#idshow").val()==null||$("#idshow").val()=='') {
		 $("#error_modify").html("输入用户ID!");
		 return false;
	}
	if($("#posishow").val()==null||$("#posishow").val()=='') {
		 $("#error_modify").html("请输入职位");
		 return false;
	}
	if ($("#realNameshow").val()==null||$("#realNameshow").val()=='') {
		 $("#error_modify").html("请输入真实姓名");
		 return false;
	}
	
 }
 
 
 
 function sureDelete(){
	 var id=$('#idhidd').val();
	 $.ajax({
	        type : 'post',
	        url : 'User_delete.action',
	        data : {
	        	id :id 
	        },
	        success : function(data) {
	                $('#isDelete').modal('hide');
	                $('#success').modal();
	                setTimeout(function(){
	                    $('#success').modal('hide');
	                    window.location = "User_list.action";
	                },1500);
	        },
	        error: function(data){
	         $('#isDelete').modal('hide');
	                $('#error').modal();
	                setTimeout(function(){
	                    $('#success').modal('hide');
	                    window.location = "User_list.action";
	                },2000);
	        }
	    })
	}