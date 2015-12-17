function setPropertiesOnObjLiteral(obj){
	obj.x = 7;
	obj['y']=8; 
	obj.onePlus = function onePlus(x){
		return x+1;

	}

}

function setPropertiesOnArrayObj(arrayObject){
	arrayObject['full'] = 'stack';
	arrayObject.push(5);
	arrayObject.hello = function hello(){
		return "Hello!";
	};
	arrayObject.twoTimes = function twoTimes(x){
		return x*2;
	}

};

function setPropertiesOnFunctionObj(functionObject){
	functionObject.year = 2015;
	functionObject.divideByTwo = function divideByTwo(x){
		return x/2;
	};
	functionObject.prototype.helloWorld = function helloWorld() {
		return "Hello World";
	};

};
