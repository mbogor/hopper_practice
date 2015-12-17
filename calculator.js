var createCalculator = function() {
	var object = {}
	object.total = 0;
	
	object.value = function() {
		return object.total;
	}

	object.add = function(n) {
		object.total+=n;
	}

	object.subtract = function(n) {
		object.total-=n;
	}

	return object

}
