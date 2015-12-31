//Functions for Recursion

var factorialIterative = function(n){
	var product = 1;
	while(n>0){
		product=product*n;
		n--;
	}
	return product;
}

var factorial = function(n){

	if (n==0){
		return 1;
	}
	
	return n * factorial(n-1);
}

var fib = function(n){
	if (n===0|| n===1){
		return 1;
	} 
	return fib(n-1)+fib(n-2);
}

var type = function(n){
	return Object.prototype.toString.call(n).slice(8,-1);
}

var stringify = function(n) {
	if (type(n) == 'Undefined') {
		return 'undefined'
	}
	if (type(n) == 'Null') {
		return 'null'
	}
	if (type(n) == 'Boolean') {
		return n.toString()
	}
	if (type(n) == 'Number') {
		return n.toString()
	}
	if (type(n) == 'String') {
		return '"' + n + '"'
	}
	if (type(n) == 'Function') {
		return n.toString()
	}
	if (type(n) == 'Array') {
		var result = [];
		for (var i in n) {
		    result.push(stringify(n[i]))
		}
		return '[' + result.join(',') + ']'
	}
	if (type(n) == 'Object') {
		var result = [];
		for (var key in n) {
			var val = stringify(n[key])
			result.push('"' + key + '"' + ": " + val)
		}
		return '{' + result.join(',') + '}'
	}
}




