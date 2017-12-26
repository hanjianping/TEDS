
var arr = new Array();
var i=1;
var len;
function picture(src,title){
	i=1;
	var str=src;
	arr=str.split(";");
	len=arr.length;
	$("#imghref").attr('src',arr[0]);
	$("#ahref").attr('href',arr[0]);
	$('#imgNumber').html(len);
	if(len<=1){
		$('#pageinfo').html('');
		$('#next').css('visibility','hidden'); 
		$('#pre').css('visibility','hidden');
	}else{
		$('#next').css('visibility','visible'); 
		$('#pre').attr('disabled','disabled'); 
		$('#next').attr('disabled',false); 
		$('#pageinfo').html('当前是第1张');
   }
   
	var board = document.getElementById("showpicture");
	
$('#dlg').modal();
}


function next(){
	
	$("#imghref").attr('src',arr[i]);
	$("#ahref").attr('href',arr[i]);
	$('#pre').css('visibility','visible'); 
	$('#pre').attr('disabled',false);
	$('#pageinfo').html('当前是第'+(i+1)+'张');
	if(i>=len){
		$('#next').attr('disabled','disabled'); 
		$('#pageinfo').html('当前是第'+len+'张');
	}
	if(i<len){
		i++;
	}
}
function pre(){
	if(i>1){
		i--;
	}else{
		$('#pre').attr('disabled','disabled'); 
	}
	$('#pageinfo').html('当前是第'+i+'张');
	 $('#next').attr('disabled',false); 
	$("#imghref").attr('src',arr[i-1]);
	$("#ahref").attr('href',arr[i-1]);
	
}