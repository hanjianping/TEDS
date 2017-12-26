<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<link rel="stylesheet" href="css/fonts.css" type="text/css" />
<link rel="stylesheet" href="css/login.css" type="text/css" />
<link rel='stylesheet' href='css/bootstrap.min.css'/>
<script type="text/javascript" src="js/jquery-1.11.1.js"></script>
<script type='text/javascript' src='js/bootstrap.min.js'> </script>
</head>
<body style="background-image: url(images/logo1.jpg );width: 100%; background-position:bottom; ">
<div class="login_page" style="margin-top:-4%;">
    <div class='login_page_wrapper'>
        <div class='md-card' id='login_card'>
            <div class="md-card-content large-padding" id="login_form">
                <div class="login_heading">
                    <img  id="touxiang" alt="" src="images/user.jpg" style="width:100px;height:100px;display: inline-block;text-align: center;border-radius: 60%;background-repeat: no-repeat;background-color: rgba(0, 0, 0, 0.085);background-position: 50% 1px;">
                </div>
                <form method="post" id="logForm" action="User_login.action" onsubmit="return check(this)">
                    <div class="uk-form-row">
                        <label for="id">ID:</label>
                        <input class="md-input" id="id" maxlength="254" name="user.id" type="text" />
                        <span class="uk-text-danger"></span>
                    </div>
                    <div class="uk-form-row">
                        <label for="password">密码:</label>
                        <input class="md-input" id="password" name="user.password" type="password" />
                        <span class="uk-text-danger"></span>
                    </div>
                    <div class="uk-form-row">
                        <label for="randImage">验证码:</label>
                        <input  class="md-input"
                                type=text value="${imageCode }" name="imageCode" id="imageCode" ><img
                            onclick="javascript:loadimage();" title="换一张试试" name="randImage"
                            id="randImage" src="image.jsp" border="1"
                            align="absmiddle">
                        <span class="uk-text-danger"></span>
                    </div>
                    <div class="uk-margin-medium-top">
                        <button class="md-btn md-btn-primary md-btn-block md-btn-large" type="submit" >Log In</button>
                        <input type="hidden" name="next" value="">
                    </div>
                    <div class="uk-margin-top">
                        <input type="hidden" id="error"  value="${error}">
                        <button id="modal_show" type="button"  data-toggle="modal" data-target="#myModal" style="display: none"></button>
                        <div id="modal"></div>
                    </div>
                    </form>
        </div>
     </div>
  </div>
</div>
</body>
<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript" src="js/imgUpload.js"></script>
<script type="text/javascript">
    function loadimage(){
        document.getElementById("randImage").src = "image.jsp?"+Math.random();
    }
    function errorReport(param) {
        var str = "<div class='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' " +
                "aria-hidden='true'>";
        str += "<div class='modal-dialog'>";
        str += "<div class='modal-content'>";
        str += "<div class='modal-header'>";
        str += "<button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span>" +
                "<span class='sr-only'>关闭</span></button>";
        str += "<div class='modal-body'>";
        str += "<h4 style='color: #b94a48'>";
        str += param;
        str += "</h4>";
        str += "</div>";
        str += "</div></div>";
        $("#modal").html(str);
        $("#modal_show").click();
    }

    function check() {
        var flag=false;
        var id=$("#id").val();
        var password=$("#password").val();
        var imageCode=$("#imageCode").val();
        if(id==""){
            $("#error").val("请输入ID");
            var param=$("#error").val();
            errorReport(param);
            $("#error").val("");
            return false;
        }
        if(password==""){
            $("#error").val("请输入密码");
            var param=$("#error").val();
            errorReport(param);
            $("#error").val("");
            return false;
        }
        if(imageCode==""){
            $("#error").val("请输入验证码");
            var param=$("#error").val();
            errorReport(param);
            $("#error").val("");
            return false;
        }
        var url='register/userReverify.action';
        var data={"user.id":id,"user.password":password};
        $.ajax({
            type:'post',
            async:false,
            cache:false,
            url:url,
            data:data,
            success:function(param){
                if(param.error1 =="用户名或者密码不正确"){
               	 	$("#id").val('');
               	 	$("#password").val('');
                    errorReport(param.error1);
                    flag=false;
                }else{
                    var imgcode = $("#imageCode").val();
                    if (imgcode.length >= 4) {
                        var url1 = 'register/verifyImgCode.action';
                        var data1 = {"imgCode1": imgcode};
                        $.ajax({
                            type:'post',
                            async:false,
                            cache:false,
                            url:url1,
                            data:data1,
                            success:function (param2) {
                                if (param2.error2 != "imgCodeMatch") {
                                    errorReport(param2.error2);
                                    $('#randImage').click();
                                    flag=false;
                                } else {
                                    flag=true;
                                }
                            }
                        })
                    }else{
                        errorReport("请输入验证码");
                        flag=false;
                    }
                }
            }
        })
        return flag;
    }
    function checkForm(){
        var id=$("#id").val();
        var password=$("#password").val();
        var imageCode=$("#imageCode").val();
        if(id==""){
            $("#error").val("please input userId");
            var param=$("#error").val();
            errorReport(param);
            $("#error").val("");
            return false;
        }
        if(password==""){
            $("#error").val("please input password");
            var param=$("#error").val();
            errorReport(param);
            $("#error").val("");
            return false;
        }
        if(imageCode==""){
            $("#error").val("please input Verifycode");
            var param=$("#error").val();
            errorReport(param);
            $("#error").val("");
            return false;
        }
        return false;
    }
</script>
</html>