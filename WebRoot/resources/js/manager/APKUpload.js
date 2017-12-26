  function saveFile() {
	  if (filecheck()) {
		  $("#hidFileName").val($("#fileName").val());
		  $("#myform").attr("action","APKUploadAction_saveFile.action");
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
			case "apk":
				return true;
				break;
			case "ipa":
				return true;
				break;
			default:
				alert(fileRealType + "不支持此文件类型，请重新选择！");
			return false;
			}
	}