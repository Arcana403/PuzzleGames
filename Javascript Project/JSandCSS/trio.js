var check1=1, check2, check3, check4, check5, check6, check7, check8, check9, check10;
var checker2=1;
var timert;
window.setInterval(function(){
	if(checker2===0&&check10===check1&&check10===check2&&check10===check3&&check10===check4&&check10===check5&&check10===check6&&check10===check7&&check10===check8&&check10===check9){
		alert("You solved the puzzle. "+"Your time is "+tmin+" minutes and "+tsec+" seconds.  "+"Please reload the page if you want to play again.");	
		checker2++;
		clearInterval(timert);
	}
}, 500);
var tsec=0, tmin=0, ttime="";
function trio(){
	alert("Press enter to start.");
	ttime="", tsec=0, tmin=0;
	clearInterval(timert);
	timert=window.setInterval(function(){
		tsec++;
		if(tsec>59){
			tsec=0;
			tmin++;
		}
		if(tmin<10&&tsec<10){
			ttime="0"+tmin+":0"+tsec;
		}
		else if(tsec<10&&tmin>=10){
			ttime=tmin+":0"+tsec;
		}
		else if(tsec>=10&&tmin<10){
			ttime="0"+tmin+":"+tsec;
		}
		else{
			ttime=tmin+":"+tsec;
		}
		document.getElementById("ttimer").innerHTML=ttime;
	}, 1000);
	var a=Math.random();
	if(a>0&&a<=0.33){
		document.getElementById("TP1").src="T1.jpg";
	}
	else if(a>0.33&&a<=0.67){
		document.getElementById("TP1").src="K1.jpg";
	}
	else if(a>0.67&&a<=0.99){
		document.getElementById("TP1").src="L1.jpg";
	}
	var b=Math.random();
	if(b>0&&b<=0.33){
		document.getElementById("TP2").src="T2.jpg";
	}
	else if(b>0.33&&b<=0.67){
		document.getElementById("TP2").src="K2.jpg";
	}
	else if(b>0.67&&b<=0.99){
		document.getElementById("TP2").src="L2.jpg";
	}
	var c=Math.random();
	if(c>0&&c<=0.33){
		document.getElementById("TP3").src="T3.jpg";
	}
	else if(c>0.33&&c<=0.67){
		document.getElementById("TP3").src="K3.jpg";
	}
	else if(c>0.67&&c<=0.99){
		document.getElementById("TP3").src="L3.jpg";
	}
	var d=Math.random();
	if(d>0&&d<=0.33){
		document.getElementById("TP4").src="T4.jpg";
	}
	else if(d>0.33&&d<=0.67){
		document.getElementById("TP4").src="K4.jpg";
	}
	else if(d>0.67&&d<=0.99){
		document.getElementById("TP4").src="L4.jpg";
	}
	var e=Math.random();
	if(e>0&&e<=0.33){
		document.getElementById("TP5").src="T5.jpg";
	}
	else if(e>0.33&&e<=0.67){
		document.getElementById("TP5").src="K5.jpg";
	}
	else if(e>0.67&&e<=0.99){
		document.getElementById("TP5").src="L5.jpg";
	}
	var f=Math.random();
	if(f>0&&f<=0.33){
		document.getElementById("TP6").src="T6.jpg";
	}
	else if(f>0.33&&f<=0.67){
		document.getElementById("TP6").src="K6.jpg";
	}
	else if(f>0.67&&f<=0.99){
		document.getElementById("TP6").src="L6.jpg";
	}
	var g=Math.random();
	if(g>0&&g<=0.33){
		document.getElementById("TP7").src="T7.jpg";
	}
	else if(g>0.33&&g<=0.67){
		document.getElementById("TP7").src="K7.jpg";
	}
	else if(g>0.67&&g<=0.99){
		document.getElementById("TP7").src="L7.jpg";
	}
	var h=Math.random();
	if(h>0&&h<=0.33){
		document.getElementById("TP8").src="T8.jpg";
	}
	else if(h>0.33&&h<=0.67){
		document.getElementById("TP8").src="K8.jpg";
	}
	else if(h>0.67&&h<=0.99){
		document.getElementById("TP8").src="L8.jpg";
	}
	var i=Math.random();
	if(i>0&&i<=0.33){
		document.getElementById("TP9").src="T9.jpg";
	}
	else if(i>0.33&&i<=0.67){
		document.getElementById("TP9").src="K9.jpg";
	}
	else if(i>0.67&&i<=0.99){
		document.getElementById("TP9").src="L9.jpg";
	}
	var j=Math.random();
	if(j>0&&j<=0.33){
		document.getElementById("thumbnail").src="Thumbnail_Koala.jpg";
		check10=1;
	}
	else if(j>0.33&&j<=0.67){
		document.getElementById("thumbnail").src="Thumbnail_Tulips.jpg";
		check10=3;
	}
	else if(j>0.67&&j<=0.99){
		document.getElementById("thumbnail").src="Thumbnail_Lighthouse.jpg";
		check10=2;
	}
}
function Tchange1(){
	var a=document.getElementById("TP1");
	var b=document.getElementById("TP2");
	var c=document.getElementById("TP4");
	checker2=0;
	if(a.src.match("T1")){
		a.src="K1.jpg";
		check1=1;
	}
	else if(a.src.match("K1")){
		a.src="L1.jpg";
		check1=2;
	}
	else if(a.src.match("L1")){
		a.src="T1.jpg";
		check1=3;
	}
	if(b.src.match("T2")){
		b.src="K2.jpg";
		check2=1;
	}
	else if(b.src.match("K2")){
		b.src="L2.jpg";
		check2=2;
	}
	else if(b.src.match("L2")){
		b.src="T2.jpg";
		check2=3;
	}
	if(c.src.match("T4")){
		c.src="K4.jpg";
		check4=1;
	}
	else if(c.src.match("K4")){
		c.src="L4.jpg";
		check4=2;
	}
	else if(c.src.match("L4")){
		c.src="T4.jpg";
		check4=3;
	}
}
function Tchange2(){
	var a=document.getElementById("TP1");
	var b=document.getElementById("TP2");
	var c=document.getElementById("TP3");
	var d=document.getElementById("TP5");
	checker2=0;
	if(a.src.match("T1")){
		a.src="K1.jpg";
		check1=1;
	}
	else if(a.src.match("K1")){
		a.src="L1.jpg";
		check1=2;
	}
	else if(a.src.match("L1")){
		a.src="T1.jpg";
		check1=3;
	}
	if(b.src.match("T2")){
		b.src="K2.jpg";
		check2=1;
	}
	else if(b.src.match("K2")){
		b.src="L2.jpg";
		check2=2;
	}
	else if(b.src.match("L2")){
		b.src="T2.jpg";
		check2=3;
	}
	if(c.src.match("T3")){
		c.src="K3.jpg";
		check3=1;
	}
	else if(c.src.match("K3")){
		c.src="L3.jpg";
		check3=2;
	}
	else if(c.src.match("L3")){
		c.src="T3.jpg";
		check3=3;
	}
	if(d.src.match("T5")){
		d.src="K5.jpg";
		check5=1;
	}
	else if(d.src.match("K5")){
		d.src="L5.jpg";
		check5=2;
	}
	else if(d.src.match("L5")){
		d.src="T5.jpg";
		check5=3;
	}
}
function Tchange3(){
	var a=document.getElementById("TP2");
	var b=document.getElementById("TP3");
	var c=document.getElementById("TP6");
	checker2=0;
	if(a.src.match("T2")){
		a.src="K2.jpg";
		check2=1;
	}
	else if(a.src.match("K2")){
		a.src="L2.jpg";
		check2=2;
	}
	else if(a.src.match("L2")){
		a.src="T2.jpg";
		check2=3;
	}
	if(b.src.match("T3")){
		b.src="K3.jpg";
		check3=1;
	}
	else if(b.src.match("K3")){
		b.src="L3.jpg";
		check3=2;
	}
	else if(b.src.match("L3")){
		b.src="T3.jpg";
		check3=3;
	}
	if(c.src.match("T6")){
		c.src="K6.jpg";
		check6=1;
	}
	else if(c.src.match("K6")){
		c.src="L6.jpg";
		check6=2;
	}
	else if(c.src.match("L6")){
		c.src="T6.jpg";
		check6=3;
	}
}
function Tchange4(){
	var a=document.getElementById("TP1");
	var b=document.getElementById("TP4");
	var c=document.getElementById("TP5");
	var d=document.getElementById("TP7");
	checker2=0;
	if(a.src.match("T1")){
		a.src="K1.jpg";
		check1=1;
	}
	else if(a.src.match("K1")){
		a.src="L1.jpg";
		check1=2;
	}
	else if(a.src.match("L1")){
		a.src="T1.jpg";
		check1=3;
	}
	if(b.src.match("T4")){
		b.src="K4.jpg";
		check4=1;
	}
	else if(b.src.match("K4")){
		b.src="L4.jpg";
		check4=2;
	}
	else if(b.src.match("L4")){
		b.src="T4.jpg";
		check4=3;
	}
	if(c.src.match("T5")){
		c.src="K5.jpg";
		check5=1;
	}
	else if(c.src.match("K5")){
		c.src="L5.jpg";
		check5=2;
	}
	else if(c.src.match("L5")){
		c.src="T5.jpg";
		check5=3;
	}
	if(d.src.match("T7")){
		d.src="K7.jpg";
		check7=1;
	}
	else if(d.src.match("K7")){
		d.src="L7.jpg";
		check7=2;
	}
	else if(d.src.match("L7")){
		d.src="T7.jpg";
		check7=3;
	}
}
function Tchange5(){
	var a=document.getElementById("TP2");
	var b=document.getElementById("TP4");
	var c=document.getElementById("TP5");
	var d=document.getElementById("TP6");
	var e=document.getElementById("TP8");
	checker2=0;
	if(a.src.match("T2")){
		a.src="K2.jpg";
		check2=1;
	}
	else if(a.src.match("K2")){
		a.src="L2.jpg";
		check2=2;
	}
	else if(a.src.match("L2")){
		a.src="T2.jpg";
		check2=3;
	}
	if(b.src.match("T4")){
		b.src="K4.jpg";
		check4=1;
	}
	else if(b.src.match("K4")){
		b.src="L4.jpg";
		check4=2;
	}
	else if(b.src.match("L4")){
		b.src="T4.jpg";
		check4=3;
	}
	if(c.src.match("T5")){
		c.src="K5.jpg";
		check5=1;
	}
	else if(c.src.match("K5")){
		c.src="L5.jpg";
		check5=2;
	}
	else if(c.src.match("L5")){
		c.src="T5.jpg";
		check5=3;
	}
	if(d.src.match("T6")){
		d.src="K6.jpg";
		check6=1;
	}
	else if(d.src.match("K6")){
		d.src="L6.jpg";
		check6=2;
	}
	else if(d.src.match("L6")){
		d.src="T6.jpg";
		check6=3;
	}
	if(e.src.match("T8")){
		e.src="K8.jpg";
		check8=1;
	}
	else if(e.src.match("K8")){
		e.src="L8.jpg";
		check8=2;
	}
	else if(e.src.match("L8")){
		e.src="T8.jpg";
		check8=3;
	}
}
function Tchange6(){
	var a=document.getElementById("TP3");
	var b=document.getElementById("TP5");
	var c=document.getElementById("TP6");
	var d=document.getElementById("TP9");
	checker2=0;
	if(a.src.match("T3")){
		a.src="K3.jpg";
		check3=1;
	}
	else if(a.src.match("K3")){
		a.src="L3.jpg";
		check3=2;
	}
	else if(a.src.match("L3")){
		a.src="T3.jpg";
		check3=3;
	}
	if(b.src.match("T5")){
		b.src="K5.jpg";
		check5=1;
	}
	else if(b.src.match("K5")){
		b.src="L5.jpg";
		check5=2;
	}
	else if(b.src.match("L5")){
		b.src="T5.jpg";
		check5=3;
	}
	if(c.src.match("T6")){
		c.src="K6.jpg";
		check6=1;
	}
	else if(c.src.match("K6")){
		c.src="L6.jpg";
		check6=2;
	}
	else if(c.src.match("L6")){
		c.src="T6.jpg";
		check6=3;
	}
	if(d.src.match("T9")){
		d.src="K9.jpg";
		check9=1;
	}
	else if(d.src.match("K9")){
		d.src="L9.jpg";
		check9=2;
	}
	else if(d.src.match("L9")){
		d.src="T9.jpg";
		check9=3;
	}
}
function Tchange7(){
	var a=document.getElementById("TP4");
	var b=document.getElementById("TP7");
	var c=document.getElementById("TP8");
	checker2=0;
	if(a.src.match("T4")){
		a.src="K4.jpg";
		check4=1;
	}
	else if(a.src.match("K4")){
		a.src="L4.jpg";
		check4=2;
	}
	else if(a.src.match("L4")){
		a.src="T4.jpg";
		check4=3;
	}
	if(b.src.match("T7")){
		b.src="K7.jpg";
		check7=1;
	}
	else if(b.src.match("K7")){
		b.src="L7.jpg";
		check7=2;
	}
	else if(b.src.match("L7")){
		b.src="T7.jpg";
		check7=3;
	}
	if(c.src.match("T8")){
		c.src="K8.jpg";
		check8=1;
	}
	else if(c.src.match("K8")){
		c.src="L8.jpg";
		check8=2;
	}
	else if(c.src.match("L8")){
		c.src="T8.jpg";
		check8=3;
	}
}
function Tchange8(){
	var a=document.getElementById("TP5");
	var b=document.getElementById("TP7");
	var c=document.getElementById("TP8");
	var d=document.getElementById("TP9");
	checker2=0;
	if(a.src.match("T5")){
		a.src="K5.jpg";
		check5=1;
	}
	else if(a.src.match("K5")){
		a.src="L5.jpg";
		check5=2;
	}
	else if(a.src.match("L5")){
		a.src="T5.jpg";
		check5=3;
	}
	if(b.src.match("T7")){
		b.src="K7.jpg";
		check7=1;
	}
	else if(b.src.match("K7")){
		b.src="L7.jpg";
		check7=2;
	}
	else if(b.src.match("L7")){
		b.src="T7.jpg";
		check7=3;
	}
	if(c.src.match("T8")){
		c.src="K8.jpg";
		check8=1;
	}
	else if(c.src.match("K8")){
		c.src="L8.jpg";
		check8=2;
	}
	else if(c.src.match("L8")){
		c.src="T8.jpg";
		check8=3;
	}
	if(d.src.match("T9")){
		d.src="K9.jpg";
		check9=1;
	}
	else if(d.src.match("K9")){
		d.src="L9.jpg";
		check9=2;
	}
	else if(d.src.match("L9")){
		d.src="T9.jpg";
		check9=3;
	}
}
function Tchange9(){
	var a=document.getElementById("TP6");
	var b=document.getElementById("TP8");
	var c=document.getElementById("TP9");
	checker2=0;
	if(a.src.match("T6")){
		a.src="K6.jpg";
		check6=1;
	}
	else if(a.src.match("K6")){
		a.src="L6.jpg";
		check6=2;
	}
	else if(a.src.match("L6")){
		a.src="T6.jpg";
		check6=3;
	}
	if(b.src.match("T8")){
		b.src="K8.jpg";
		check8=1;
	}
	else if(b.src.match("K8")){
		b.src="L8.jpg";
		check8=2;
	}
	else if(b.src.match("L8")){
		b.src="T8.jpg";
		check8=3;
	}
	if(c.src.match("T9")){
		c.src="K9.jpg";
		check9=1;
	}
	else if(c.src.match("K9")){
		c.src="L9.jpg";
		check9=2;
	}
	else if(c.src.match("L9")){
		c.src="T9.jpg";
		check9=3;
	}
}