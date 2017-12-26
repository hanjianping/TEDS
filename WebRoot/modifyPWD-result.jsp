<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <style>
  body {
    color: #000;
    font-family: 'Arial';
    font-size:13px;
}
.error-page {display: block; text-align: center;}

.error-page h1 {color: #adafb2; font-size: 30px; font-weight: bold; line-height: 50px; padding: 20px 0}

.error-page h1 strong {color: #adafb2; font-size: 60px; font-weight: bold}

.error-page p {color: #adafb2; font-size: 20px; font-weight: bold;}
  </style>
  </head>
  
  <body>
        <div class="error-page" style="min-height: 800px">
             <img src="images/success.jpg" alt="500 error">
                   <h1>正在跳转登陆页面....... </h1>          
			<script type="text/javascript">
					setTimeout("location.href='User_logout.action'", 3000);
				</script>
         </div>
  </body>
    
</html>
