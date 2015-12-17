var RPNCalculator = function(){
	this.total = 0;
	this.array = [];
};

RPNCalculator.prototype.push = function(n){
	this.array.push(n);
}

RPNCalculator.prototype.value = function(){
	return this.total;
}

RPNCalculator.prototype.plus = function(){
	if (this.array.length==0){
		throw "rpnCalculator is empty";
	} else {
		this.total = 0;
		this.total+=this.array.pop()+this.array.pop();
		this.array.push(this.total);
	}
}

RPNCalculator.prototype.minus = function(){
	if (this.array.length==0){
		throw "rpnCalculator is empty";
	} else {
		this.total = 0;
		this.total=(-1*(this.array.pop()-this.array.pop()));
		this.array.push(this.total);
	}
}

RPNCalculator.prototype.times = function(){
	if (this.array.length==0){
		throw "rpnCalculator is empty";
	} else {
		this.total = 0;
		this.total=this.array.pop() * this.array.pop();
		this.array.push(this.total);
	}
}

RPNCalculator.prototype.divide = function(){
	if (this.array.length==0){
		throw "rpnCalculator is empty";
	} else {
		this.total = 0;
		this.total = 1/(this.array.pop()/this.array.pop());
		this.array.push(this.total);
	}
}

