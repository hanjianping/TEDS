
<%@ page language="java" pageEncoding="utf-8" isELIgnored="false"
         contentType="text/html; charset=utf-8"%>
<div id="dlg" class="modal hide fade" tabindex="-1" style="left:30%;width:80%;height:80%;margin-top:-2%;" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">图片信息 &nbsp共<span id="imgNumber" style="color:red;"></span>张图片
                    <button id="pre" style="font-family:宋体;font-weight: bold; margin-left:60px;" onclick="pre()" class="btn btn-success">上一张</button>
                    <button id="next" style="font-family:宋体;font-weight: bold; margin-left:20px;" onclick="next()" class="btn btn-info">下一张</button>
                    <span id="pageinfo" style="font-size:15px;font-family:宋体;margin-left:40px;"></span>
                    </h4><input type="hidden" id="imgnohidden"/>
                </div>
	           <div class="modal-body" style="width:auto;max-height:600px;margin-top:0px;height:auto;padding:1px;"> 
                <div class="item">
                   <a class="fancybox-button" data-rel="fancybox-button" id="ahref" href="" title="点击放大" target="_blank">
                   <div class="zoom">
                   		<div id="showpicture">
                   			<img width="100%" height="70%"  id="imghref" src=""/>
                   		</div>
						<div class="zoom-icon" ></div>
					</div>
					</a>
					</div>
				</div>
          </div>
 </div>
  <%-- 修改密码 --%> 
<div id="modifyPwd" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true" onclick="return resetValue()">×</button>
				<h3 style="font-family:Arial;font-weight: bold;font-size:16px;"  id="myModalLabel9">修改密码</h3>
			</div>
			<div class="modal-body">
				  <table class="table" style="border:0px;">
                        <tbody>
                        <tr style="margin-bottom: 0px;padding:0px;">
                        	   <td style="border-top: 0;">
                					<span style="margin-left:5%;">原密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;
               						 <input type="text" id="invoiceReceiver" style="border-color: red;" onblur="isEmpty('invoiceReceiver','请输入原密码')"/>
                						<span class="input-error tooltips" data-original-title="请输入原密" id="invoiceReceiverMsg">
                   							<i class="icon-exclamation-sign" style="color: #B94A48" id="invoiceReceiverIcon"></i>
                             	</td>
                          </tr>
                             <tr style="margin-bottom: 0px;padding:0px;">
                        	 <td style="border-top: 0;">
                					<span style="margin-left:5%;">新密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;
               						 <input type="text" id="invoiceReceiver" style="border-color: red;" onblur="isEmpty('invoiceReceiver','请输入新密码')"/>
                						<span class="input-error tooltips" data-original-title="请输入新密码" id="invoiceReceiverMsg">
                   							<i class="icon-exclamation-sign" style="color: #B94A48" id="invoiceReceiverIcon"></i>
                             	</td>
                          </tr>
                             <tr style="margin-bottom: 0px;padding:0px;">
                        	 <td style="border-top: 0;">
                					<span style="margin-left:5%;">重新输入：&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;
               						 <input type="text" id="invoiceReceiver" style="border-color: red;" onblur="isEmpty('invoiceReceiver','请重新输入')"/>
                						<span class="input-error tooltips" data-original-title="请重新输入" id="invoiceReceiverMsg">
                   							<i class="icon-exclamation-sign" style="color: #B94A48" id="invoiceReceiverIcon"></i>
                             	</td>
                          </tr>
                        </tbody>
                    </table>
			</div>
			<div class="modal-footer">
				<font id="Modifyerror" style="color: red;"></font>
				<button style="font-family:Arial;font-weight: bold;" type="submit" class="btn btn-success" data-dismiss="modal" aria-hidden="true"
					onclick="return resetValue()" >关闭</button>
				<button style="font-family:Arial;font-weight: bold;" class="btn btn-primary" onclick="javascript:sureModify()">确认修改</button>
			</div>
</div>

<div class="modal fade" id="success" tabindex="-1" role="dialog"   style="margin-top: 10%" aria-labelledby="myModalLabelr3"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">&times;</button>
          <h4 style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-title" id="myModalLabel3">success</h4>
        </div>
        <div style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-body">操作成功!</div>
      </div>
    </div>
  </div>

<div class="modal fade" id="error" tabindex="-1" role="dialog"   style="margin-top: 10%" aria-labelledby="myModalLabelr3"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">&times;</button>
          <h4 style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-title" id="myModalLabel3">sorry</h4>
        </div>
        <div style="font-family:Arial;font-size:14px;font-weight: bold;" class="modal-body">操作失败!</div>
      </div>
    </div>
  </div>
