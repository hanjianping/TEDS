function gotoDemandPage(num){
	 if(document.getElementById("checkflag").checked){
		 var checkflag =$("#checkflag").val();
	 }
    var trainId=$('#trainId').val().trim();
    var trainState=$('#trainState').val().trim();
    if(trainState=='1'){
	   	 var press="1";
	   }
	    if(trainState=='0'){
	   	var press="0";
	   }
	if(num>0){
		window.location.href='Current_press.action?pageCode='+num+'&trainId='+trainId+'&checkflag='+checkflag+'&trainState='+trainState+'&press='+press;
	}
}
 function searchTrain(){
	 if(document.getElementById("checkflag").checked){
		 $("#flagException").val("1");
		 var checkflag =$("#checkflag").val();
	 }
	 var trainState=$('#trainState').val().trim();
      var trainId=$('#trainId').val().trim();
      if(trainState=='1'){
 	   	 var press="1";
 	   }
 	    if(trainState=='0'){
 	   	var press="0";
 	   }
	window.location.href='Current_press.action?trainId='+trainId+'&checkflag='+checkflag+'&trainState='+trainState+'&press='+press;
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

function pointCloud(pointValue,trianid,duanNo,planeNo,centerBiase,lRAangle,fBAangle,press,firstLeft,secondLeft){
	$('#1').html('列车编号：'+'<font color=red>'+trianid+'<font>');
	$('#2').html('弓编号：'+'<font color=red>'+planeNo+'<font>');
	$('#3').html('中心线偏移:'+'<font color=red>'+centerBiase+'<font>'+'mm');
	$('#4').html('左右倾斜:'+'<font color=red>'+lRAangle+'<font>'+'°');
	$('#5').html('前后倾斜:'+'<font color=red>'+fBAangle+'<font>'+'°');
	$('#6').html('弓网压力:'+'<font color=red>'+press+'<font>'+'N');
	$('#7').html('滑板一：'+'<font color=red>'+firstLeft+'<font>'+'mm');
	$('#8').html('滑板二：'+'<font color=red>'+secondLeft+'<font>'+'mm');
	$('#9').html('端口号：'+'<font color=red>'+duanNo+'<font>');
	var remove=document.getElementById('info');
	if(remove.hasChildNodes()){
		remove.removeChild(remove.childNodes[0]);
		
	}
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
	var container, stats;
	var camera, controls, scene, renderer;
	init();
	animate();
	function init() {
		var info=document.getElementById('info');
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.set(670,-200,-0);
		controls = new THREE.TrackballControls( camera );
		controls.rotateSpeed = 2.0;
		controls.zoomSpeed = 0.3;
		controls.panSpeed = 0.2;
		controls.noZoom = false;
		controls.noPan = false;
		controls.staticMoving = true;
		controls.dynamicDampingFactor = 0.3;
		controls.minDistance = 0.3;
		controls.maxDistance = 0.3 * 10000;
		scene.add( camera );
		var axisHelper = new THREE.AxisHelper( 0.1 );
		scene.add( axisHelper );
		renderer = new THREE.WebGLRenderer( { antialias: true } );
		
		renderer.setClearColor( 0x000000 );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth , window.innerHeight );
		info.appendChild( renderer.domElement );
		var loader = new THREE.PCDLoader();
		loader.load( pointValue, function ( mesh ) {
			scene.add( mesh );
			var center = mesh.geometry.boundingSphere.center;
			controls.target.set( center.x, center.y, center.z);
			controls.update();
		} );
		var info=document.getElementById('info');
		container = document.createElement( 'div' );
		info.appendChild( container );
		container.appendChild( renderer.domElement );
		stats = new Stats();
		container.appendChild( stats.dom );
		window.addEventListener( 'resize', onWindowResize, false );
		window.addEventListener('keydown', keyboard);
	}
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
		controls.handleResize();
	}
	function keyboard ( ev ) {
		
		
	}
	function animate() {
		requestAnimationFrame( animate );
		controls.update();
		renderer.render( scene, camera );
		stats.update();
	}
	$('#pointCloud').modal();
}