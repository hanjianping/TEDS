function gotoDemandPage(num){
	 var trainId=$("#trainId").val();
	if(num>0){
		window.location.href='Video_current.action?pageCode='+num+'&trainId='+trainId;
	}
}
 function searchTrain(){
	 var trainId=$("#trainId").val();
  	window.location.href='Video_current.action?trainId='+trainId;
}
 
 function video(src){
		$('#video').modal();
		$("#my_video").attr("src",src);
	}