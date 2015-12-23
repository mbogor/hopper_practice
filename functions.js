// Functions.js
var concat_string = function(){
	var answer = "";
	for (var i=0; i<arguments.length; i++){
		answer+=arguments[i];
	}
	return answer;
}

var yourFunctionRunner = function(){
	var answer = "";
	for (var i=0; i<arguments.length; i++){
		answer+=(arguments[i])();
	}
	return answer;
}

var makeAdder = function(a){
	var sum = 0;
	console.log(a)

	var total = function(b){
		sum=sum+a+b; 
		return sum
	}
	
	return total;
}

var once = function(func){
	var inc = 0;
	var func1 = function(){
		if (inc<1){
			func();
			inc++;
		}
	}
	return func1;

}

var createObjectWithTwoClosures = function(){
	var sum = 0;
	var obj = {};

	obj.oneIncrementer = function(){
		return sum+=1;
	}
	obj.tensIncrementer = function(){
		return sum+=10;
	}
	obj.getValue = function(){
		return sum;
	}

	return obj;

}

