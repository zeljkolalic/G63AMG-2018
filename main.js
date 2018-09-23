
var timer = document.getElementById('timer');
var loop;

function displayTime(){
	var sada = new Date();
	var h = sada.getHours();
	var m = sada.getMinutes();
	var s = sada.getSeconds();
	
	timer.innerHTML = h+'h:'+m+'m:'+s+'s'
	
	}
	
	loop = setInterval(displayTime,1000);
	
	function makeText(){
	var text = 'Mercedes-Benz';
    var text1 = 'presents the brand new';
    var text2 = 'G63 AMG';

    var stext = text.split('');
    var stext1 = text1.split('');
    var stext2 = text2.split('');
	var nasArray = [stext,stext1,stext2];
	return nasArray;
}

var ar = makeText();
var scroll = document.getElementById('scroll');
var loop;

var i = 0;


function start(){
	if(ar[i].length > 0){
		scroll.innerHTML += ar[i].shift();
		loop = setTimeout(start,280);
	}else{
		i++;
		if(i > 2){
		i =0; 
		ar = makeText(); //reset
		
		}
		scroll.innerHTML = "";
		start();
	}
}
start();











