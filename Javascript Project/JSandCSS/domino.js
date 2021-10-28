var sourceone;
var sourcetwo;
var identifier1;
var identifier2;
var indicator=0;
var timerd;
var checker1=1;
window.setInterval(function(){
	if(checker1===0&&document.getElementById("D1").src.match("D1.jpg")&&document.getElementById("D2").src.match("D2.jpg")&&document.getElementById("D3").src.match("D3.jpg")&&document.getElementById("D4").src.match("D4.jpg")&&document.getElementById("D5").src.match("D5.jpg")&&document.getElementById("D6").src.match("D6.jpg")&&document.getElementById("D7").src.match("D7.jpg")&&document.getElementById("D8").src.match("D8.jpg")&&document.getElementById("D9").src.match("D9.jpg")&&document.getElementById("D10").src.match("D10.jpg")&&document.getElementById("D11").src.match("D11.jpg")&&document.getElementById("D12").src.match("D12.jpg")&&document.getElementById("D13").src.match("D13.jpg")&&document.getElementById("D14").src.match("D14.jpg")&&document.getElementById("D15").src.match("D15.jpg")&&document.getElementById("D15").src.match("D15.jpg")){
		alert("You solved the puzzle. "+"Your time is "+dmin+" minutes and "+dsec+" seconds.  "+"Please reload the page if you want to play again.");
		checker1++;
		clearInterval(timerd);
	}
}, 500);
var dsec=0, dmin=0, dtime="";
function domino(){
	alert("Press enter to start.");
	dtime="", dsec=0, dmin=0;
	clearInterval(timerd);
	timerd=window.setInterval(function(){
		dsec++;
		if(dsec>59){
			dsec=0;
			dmin++;
		}
		if(dmin<10&&dsec<10){
			dtime="0"+dmin+":0"+dsec;
		}
		else if(dsec<10&&dmin>=10){
			dtime=dmin+":0"+dsec;
		}
		else if(dsec>=10&&dmin<10){
			dtime="0"+dmin+":"+dsec;
		}
		else{
			dtime=dmin+":"+dsec;
		}
		document.getElementById("dtimer").innerHTML=dtime;
	}, 1000);
	var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;
	a=Math.ceil(Math.random()*16);
	do{
		b=Math.ceil(Math.random()*16);
	}while (b===a);
	do{
		c=Math.ceil(Math.random()*16);
	}while (c===a||c===b);
	do{
		d=Math.ceil(Math.random()*16);
	}while (d===a||d===b||d===c);
	do{
		e=Math.ceil(Math.random()*16);
	}
	while(e===a||e===b||e===c||e===d);
	do{
		f=Math.ceil(Math.random()*16);
	}
	while(f===a||f===b||f===c||f===d||f===e);
	do{
		g=Math.ceil(Math.random()*16);
	}
	while(g===a||g===b||g===c||g===d||g===e||g===f);
	do{
		h=Math.ceil(Math.random()*16);
	}
	while(h===a||h===b||h===c||h===d||h===e||h===f||h===g);
	do{
		i=Math.ceil(Math.random()*16);
	}
	while(i===a||i===b||i===c||i===d||i===e||i===f||i===g||i===h);
	do{
		j=Math.ceil(Math.random()*16);
	}
	while(j===a||j===b||j===c||j===d||j===e||j===f||j===g||j===h||j===i);
	do{
		k=Math.ceil(Math.random()*16);
	}
	while(k===a||k===b||k===c||k===d||k===e||k===f||k===g||k===h||k===i||k===j);
	do{
		l=Math.ceil(Math.random()*16);
	}
	while(l===a||l===b||l===c||l===d||l===e||l===f||l===g||l===h||l===i||l===j||l===k);
	do{
		m=Math.ceil(Math.random()*16);
	}
	while(m===a||m===b||m===c||m===d||m===e||m===f||m===g||m===h||m===i||m===j||m===k||m===l);
	do{
		n=Math.ceil(Math.random()*16);
	}
	while(n===a||n===b||n===c||n===d||n===e||n===f||n===g||n===h||n===i||n===j||n===k||n===l||n===m);
	do{
		o=Math.ceil(Math.random()*16);
	}
	while(o===a||o===b||o===c||o===d||o===e||o===f||o===g||o===h||o===i||o===j||o===k||o===l||o===m||o===n);
	do{
		p=Math.ceil(Math.random()*16);
	}
	while(p===a||p===b||p===c||p===d||p===e||p===f||p===g||p===h||p===i||p===j||p===k||p===l||p===m||p===n||p===o);
	document.getElementById("D1").src="D"+a+".jpg";
	document.getElementById("D2").src="D"+b+".jpg";
	document.getElementById("D3").src="D"+c+".jpg";
	document.getElementById("D4").src="D"+d+".jpg";
	document.getElementById("D5").src="D"+e+".jpg";
	document.getElementById("D6").src="D"+f+".jpg";
	document.getElementById("D7").src="D"+g+".jpg";
	document.getElementById("D8").src="D"+h+".jpg";
	document.getElementById("D9").src="D"+i+".jpg";
	document.getElementById("D10").src="D"+j+".jpg";
	document.getElementById("D11").src="D"+k+".jpg";
	document.getElementById("D12").src="D"+l+".jpg";
	document.getElementById("D13").src="D"+m+".jpg";
	document.getElementById("D14").src="D"+n+".jpg";
	document.getElementById("D15").src="D"+o+".jpg";
	document.getElementById("D16").src="D"+p+".jpg";
}
function swap(y,z){
	if (indicator===0){
			sourceone=y;
			identifier1=z;
			indicator=1;
	}
	else if (indicator===1){
			sourcetwo=y;
			identifier2=z;
			indicator=0;
	}
	if(indicator===0){
		document.getElementById(identifier1).src=sourcetwo;
		document.getElementById(identifier2).src=sourceone;
		checker1=0;
	}
}