
$(document).ready(function() {
	var areaUrl = 'CheckUserManagerAction_getAreaDic.action';
	$('#sel_area').combobox({
		url : areaUrl,
		valueField : 'id',
		textField : 'text',
		panelHeight : 120,
		onChange : function(newValue, oldValue) {
			  var queryParams = $('#table_datas').datagrid('options').queryParams;  
			  queryParams.areaCode = newValue;  
		      $("#table_datas").datagrid('reload');  
		      $('#txt_areacode').val(newValue);
		}
	});
	var datasUrl = 'CheckUserManagerAction_getDomainDataList.action';
	$('#table_datas').datagrid({
		url : datasUrl,
		loadMsg:'数据加载,请稍等...',
		singleSelect:true,
		width:700,
		height:405,
		idField:'id'+'parentCode',
		fitColumns:true,
		rowStyler:function(row){
			if (row.persons > 1){
				return 'background:#AAD684;color:#fff';
			}
		},
		columns : [ [
		{
			field : 'text',
			title : '问题类别',
			width : 130,
			align: 'center'
		},
		{
			field : 'parentName',
			title : '审核人',
			width : 80,
			formatter:function(value,rowData,rowIndex){
				if (value==''||value==null||value=='null') {
					return '<span style="color: red">无</span>';
				}else {
					return value;
				}
			},
			align: 'center'
		},
		{
			field : 'id',
			title : '操作',
			width : 50,
			formatter:function(value,rowData,rowIndex){
				return "<a href='javascript:showW("+value+");'>设置审核人</a>"+"  <a href='javascript:delCheckMan("+value+");'>删除</a>"; 
			},
			align: 'center'
		}
		] ],
		onSelect:function(rowIndex, rowData){
			$('#txt_domainid').val(rowData.ttypeId);
			$('#txt_domainname').val(rowData.typeName);
			$('#txt_manid').val(rowData.userId);
			var _username=rowData.userName;
			if (_username==''||_username==null||_username=='null') {
				_username='无';
			}
			$('#txt_manname').val(_username);
		}

	});
	
});
function delCheckMan(_domainId)
{
	if (confirm('您确认删除吗?')) {
		_domainId=_domainId+'';
		if (_domainId.length<2) {
			_domainId='0'+_domainId;
		}
		_areaCode=$('#txt_areacode').val();
		$.ajax({
			   type: "POST",
			   url: "CheckUserManagerAction_delCheckMan.action",
			   data : {
				   areaCode : _areaCode,
				   domainCode:_domainId
				},
				success : function(data) {
					var queryParams = $('#table_datas').datagrid('options').queryParams;  
					  queryParams.areaCode = _areaCode;  
				      $("#table_datas").datagrid('reload'); 
				      $("#table_datas").datagrid('clearSelections');
				      $('#txt_manid').val('');
				      $('#txt_domainid').val('');
				}
		}); 	
	}
}
function showW(_domainId)
{
	_domainId=_domainId+'';
	if (_domainId.length<2) {
		_domainId='0'+_domainId;
	}
	$('#txt_domainid').val(_domainId);
	var checkman=$('#d1').html();
	showMessageBox("用户列表",checkman , 800);
}
function closeW(){
	closeWindow();
}
function rdoSelected(emp_base_id) {
	_areaCode=$('#txt_areacode').val();
	_domainId=$('#txt_domainid').val();
	_manId=emp_base_id;
	$.ajax({
		   type: "POST",
		   url: "CheckUserManagerAction_updateCheckMan.action",
		   data : {
			   areaCode : _areaCode,
			   checkMan : _manId,
			   domainCode:_domainId
			},
			success : function(data) {
				var queryParams = $('#table_datas').datagrid('options').queryParams;  
				  queryParams.areaCode = _areaCode;  
			      $("#table_datas").datagrid('reload'); 
			      $("#table_datas").datagrid('clearSelections');
			      $('#txt_manid').val('');
			      $('#txt_domainid').val('');
			      closeW();
			}
	}); 	
	
}
function searchUserQuery()
{
	var inputs=$('#mesWindow input');
	userId=inputs.get(0).value;
	if (userId==''||userId==undefined||userId=='undefined') {
		alert('请您输入用户姓名');
	}else{
		$.ajax({
			type: "POST",
			url: "CheckUserManagerAction_searchUserList.action",
			data : {
				empCode : userId
				//empName : userName
			},
			success : function(data) {
				var html='';
				$("#mesWindowContent table tr:gt(1)").remove('tr'); 
				
				if(!data){
					html += '<tr><td colspan="5" align="center" style="font-size:12px">很抱歉，没有检索到数据！</td></tr>';
					$("#mesWindowContent table").append(html);
					return;
				}
				var jsonData = eval("(" + data + ")");
				for ( var i = 0; i < jsonData.length; ++i) {
					html += '<tr >';
					html += '<td width="250px">' + jsonData[i].empCode + '</td>';
					html += '<td width="200px"><a href="javascript:rdoSelected('+jsonData[i].dmsEmpBaseId+');">' + jsonData[i].empName + '</a></td>';
					html += '<td width="200px">' + jsonData[i].empOrgan + '</td>';
					html += '<td width="200px">' + jsonData[i].empMobile + '</td>';
					html += '</tr>';
				}
				$("#mesWindowContent table").append(html);
			}
			
		}); 
	}
}
function showCNA(){
	var newarea=$('#d2').html();
	showMessageBox("新增区域",newarea ,400);
}
function createNewArea(){
	var inputs=$('#mesWindow input');
	_areaName=inputs.get(0).value;
	if (_areaName==''||_areaName==undefined||_areaName=='undefined') {
		alert('请您输入区域名称');
	}
	$.ajax({
		   type: "POST",
		   url: "CheckUserManagerAction_createNewArea.action",
		   data : {
			   areaName : _areaName
			},
			success : function(data) {
				var areaUrl = 'CheckUserManagerAction_getAreaDic.action';
				$('#sel_area').combobox({
					url : areaUrl,
					valueField : 'id',
					textField : 'text',
					panelHeight : 120,
					onChange : function(newValue, oldValue) {
						  var queryParams = $('#table_datas').datagrid('options').queryParams;  
						  queryParams.areaCode = newValue;  
					      $("#table_datas").datagrid('reload');  
					      $('#txt_areacode').val(newValue);
					}
				});
				$('#sel_area').combobox('reload');
				_areaCode=$('#txt_areacode').val();
				var queryParams = $('#table_datas').datagrid('options').queryParams;  
				  queryParams.areaCode = _areaCode;  
			      $("#table_datas").datagrid('reload'); 
			      $("#table_datas").datagrid('clearSelections');
			      $('#txt_manid').val('');
			      $('#txt_domainid').val('');
			      $('#txt_newArea').val('');
			      closeW();
			}
	}); 	
}