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
