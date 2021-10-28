function myRule(){
	var x,y;
	var a, b, c;
	alert("I have a rule. I want you to guess what it is. A set of three numbers follow this rule. Now you can give examples of three to aid you in guessing. There's this one keyword in my rule you just need to type to win. Now, the set of numbers are 2,4,8. What is my rule?");
	do{
		x=prompt("Give the answer or an example. (A or E) ");
		if(x=='E'||x=='e'){
			a=prompt("First number in set.");
			b=prompt("Second number in set.");
			c=prompt("Third number  in set.");
			if(a<b&&b<c){
				alert("Follows my rule.");
			}
			else{
				alert("Does not follow my rule.");
			}
		}
	}
	while(x=='E'||x=='e');
	y=prompt("What is the rule? (no capital letters) ");
	if(y=='increase' ||	y=='increasing' ||	y=='ascend' || y=='ascending' || y=='greater' || y=='larger' || y=='bigger'){
		alert("You have guessed my rule.");
	}
	else{
		alert("Wrong.");
	}
}
function mindRead(){
	var x=0,y;
	alert("Think of a number between 1-63.");
	alert("Can you see your number here? \n 1     3     5     7     9     11     13     15     17     19     21     23     25     27     29     31     33     35     37     39     41     43     45     47     49     51     53     55     57     59     61     63");
	y=prompt("Y or N");
	if(y=='y'||y=='Y'){
		x=x+1;
	}
	alert("Can you see your number here? \n 2     3     6     7     10     11     14     15     18     19     22     23     26     27     30     31     34     35     38     39     42     43     46     47     50     51     54     55     58     59     62     63");
	y=prompt("Y or N");
	if(y=='y'||y=='Y'){
		x=x+2;
	}
	alert("Can you see your number here? \n 4     5     6     7     12     13     14     15     20     21     22     23     28     29     30     31     36     37     38     39     44     45     46     47     52     53     54     55     60     61     62     63");
	y=prompt("Y or N");
	if(y=='y'||y=='Y'){
		x=x+4;
	}
	alert("Can you see your number here? \n 8     9     10     11     12     13     14     15     24     25     26     27     28     29     30     31     40     41     42     43     44     45     46     47     56     57     58     59     60     61     62     63");
	y=prompt("Y or N");
	if(y=='y'||y=='Y'){
		x=x+8;
	}
	alert("Can you see your number here? \n 16     17     18     19     20     21     22     23     24     25     26     27     28     29     30     31     48     49     50     51     52     53     54     55     56     57     58     59     60     61     62     63");
	y=prompt("Y or N");
	if(y=='y'||y=='Y'){
		x=x+16;
	}
	alert("Can you see your number here? \n 32     33     34     35     36     37     38     39     40     41     42     43     44     45     46     47     48     49     50     51     52     53     54     55     56     57     58     59     60     61     62     63");
	y=prompt("Y or N");
	if(y=='y'||y=='Y'){
		x=x+32;
	}
	x="Your number is "+x+".";
	alert(x);
}