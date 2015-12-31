// 06_Functional 
var doubler = function(n){
	return n*2;
}

var map = function(array, doubler){
	var newarray = [];
	for (var i = 0; i<array.length; i++) {
	 	newarray.push(doubler(array[i]));
	}
	return newarray;
}

var filter = function(array, filtfunc){
	var newarray = [];
	for (var i = 0; i < array.length; i++) {
		if (filtfunc(array[i])==true){
			newarray.push(array[i]);
		}
	}
	return newarray;
}


var contains = function(array, value){
	var result = 0;
	var newarray = [];

	for(key in array) {
    	if(array.hasOwnProperty(key)) {
        	newarray.push(array[key]);
        }
    }

	for (var i = 0; i < newarray.length; i++) {
		if (newarray[i]==value==true){
			result++;
		}
	}

	if (result>0){
		return true;
	}else{
		return false;
	}
}

var countWords = function(string){
	return string.split(" ").length;
}

var reduce = function(array, starting, func){
	var current = starting;
	
	for (var i = 0; i < array.length; i++) {
		current=func(current, array[i]);
	}
	return current;
}

var countWordsInReduce = function(now, next){
	now+=countWords(next);
	return now;

}
var sum = function(array){
	var result = reduce(array, 0, function(a, b) {
      return a + b;
    });
    return result;
}

var every = function(set,func){
	var res = 0;
	for (var i = 0; i <set.length; i++) {
		if (func(set[i])==false){
			res++;
		}
	}

	if (res>0){
		return false;
	}else{
		return true;
	}

}

var any = function(set, func){
	var res = 0;
	for (var i = 0; i <set.length; i++) {
		if (func(set[i])==false){
			res++;
		}
	}

	if (res==set.length){
		return false;
	}else{
		return true;
	}	
}




