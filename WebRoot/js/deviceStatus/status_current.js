function gotoDemandPage(num){
	 var devId=$("#devId").val();
      var firstDate=$("#firstDate").val();
	  var lastDate =$("#lastDate").val();
	if(num>0){
		window.location.href='Status_currentStatus.action?pageCode='+num+'&devId='+devId+'&firstDate='+firstDate+'&lastDate='+lastDate;
	}
}
 function searchTrain(){
	 var devId=$("#devId").val();
	  var firstDate=$("#firstDate").val();
	  var lastDate =$("#lastDate").val();
  	window.location.href='Status_currentStatus.action?devId='+devId+'&firstDate='+firstDate+'&lastDate='+lastDate;
}
 
