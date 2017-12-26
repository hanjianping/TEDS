function gotoDemandPage(num){
	if(document.getElementById("checkflag").checked){
		 var checkflag =$("#checkflag").val();
	 }
	 var devId=$("#devId").val();
      var firstDate=$("#firstDate").val();
	  var lastDate =$("#lastDate").val();
	if(num>0){
		window.location.href='Status_historyStatus.action?pageCode='+num+'&checkflag='+checkflag+'&devId='+devId+'&firstDate='+firstDate+'&lastDate='+lastDate;
	}
}
 function searchTrain(){
		if(document.getElementById("checkflag").checked){
			 var checkflag =$("#checkflag").val();
		 }
	 var devId=$("#devId").val();
	  var firstDate=$("#firstDate").val();
	  var lastDate =$("#lastDate").val();
  	window.location.href='Status_historyStatus.action?devId='+devId+'&checkflag='+checkflag+'&firstDate='+firstDate+'&lastDate='+lastDate;
}
 function checkEndDate(){
	 var firstDate=$("#firstDate").val();
	 	var lastDate =$("#lastDate").val();
	 	var beginDate=new Date(firstDate.replace(/^(\d{4})(\d{2})(\d{2})$/,"$1/$2/$3"));
	 	var endDate=new Date(lastDate.replace(/^(\d{4})(\d{2})(\d{2})$/,"$1/$2/$3"));
	 	if(beginDate>endDate){
	 		$("#firstDate").val('');
	 		alert("结束时间必须大于起始时间");
	 	}
}
function checkBeforeDate(){
	 var firstDate=$("#firstDate").val();
	 	var lastDate =$("#lastDate").val();
	 	var beginDate=new Date(firstDate.replace(/^(\d{4})(\d{2})(\d{2})$/,"$1/$2/$3"));
	 	var endDate=new Date(lastDate.replace(/^(\d{4})(\d{2})(\d{2})$/,"$1/$2/$3"));
	 	if(beginDate>endDate){
	 		$("#lastDate").val('');
	 		alert("起始时间必须小于结束时间");
	 	}
}
function show(){
	 if(document.getElementById("checkflag").checked){
		 $(".exception").css("background-color","#F08080");
		 $(".exception").css("font-weight","bold");
		}else{
			$(".exception").css("background-color","");
			 $("#flagException").val("");
		}
}
window.onload=function(){
	 if(document.getElementById("checkflag").checked){
		 $(".exception").css("background-color","#F08080");
		 $(".exception").css("font-weight","bold");
		}
}
 
