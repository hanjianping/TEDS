function admin_login(){

    var username = $('#username').val().trim();
    var password = $('#password').val().trim();
    debugger;
    $.ajax({
        type:'post',
        url:'User_loginAdmin.action',
        data:{
        	username:username,
            password:password
        },
            success:function(data){
                if(data==0){
                    $('#success').modal();
                    setTimeout(function(){
                        $('#success').modal('hide');
                        window.location='User_loginAdmin.action';
                    },1000);

                }
                else{
                    $('#error').modal();
                    setTimeout(function(){
                        $('#error').modal('hide');
                        window.location='User_loginAdmin.action';
                    },2000);
                }
            }
    });
}