  function saveFile() {
	  if (filecheck()) {
		  $("#hidFileName").val($("#fileName").val());
		  $("#myform").attr("action","ManagerRuntimeAction_saveFile.action");
		  $("#myform").submit();
	  }
  }
  
  function filecheck() {
		var fileTyprName = document.getElementById("fileName").value;
		var fileType = fileTyprName.split(".");
		var fileRealType = fileType[1];
		if (fileTyprName == "") {
			alert("附件不能为空，请选择！");
			
			return false;
		} 
		
			switch(fileRealType) {
			case "txt":
				return true;
				break;
			case "doc":
				return true;
				break;
			case "xls":
				return true;
				break;
			case "jpg":
				return true;
				break;
			case "gif":
				return true;
				break;
			case "jpeg":
				return true;
				break;
			case "png":
				return true;
				break;
			case "xlsx":
				return true;
			case "csv":
				return true;
			case "pdf":
				return true;
			default:
				alert(fileRealType + "不支持此文件类型，请重新选择！");
			return false;
			}
	}