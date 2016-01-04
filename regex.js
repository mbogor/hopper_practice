var findACount = function(string){
	var array = string.match(/a/ig);
	return array ? array.length : 0; 
	/*ternary operator (if array.length>0 
	then return array.length if not than return 0)*/

}

var areaCodeFinder = function(string){
	var newsr = string.replace(/[()-]/, "");
	var code = newsr.match(/^\d{3}/);
	return Number(code.toString());
}

var adjustUrlParameter = function(url, param){
	if (url.indexOf("?")>-1){
		var end = param.split("=")[0];
		var objre = new RegExp(end);
		if (url.match(objre)){
			return url.split(end)[0] + param;
		}else{
			return url + "&" + param;
		}
	}else{
		return url + "?"+ param;
	}
}


function stringPlusPlus(str){
	if (!str.match(/\d/)) {
		return str + "1";
	
	} else if (isNaN(Number(str))==false) { 
		var debug = Number(str);
		return (Number(str)+1).toString();
	
	} else {
		var string = str.match(/^[a-z]+/i)[0];	
		var newnum = str.replace(new RegExp(string), "");
		var number = Number(newnum)+1;
		var lengthNumber = number.toString().length;
		var lengthONum = newnum.length;
		var zeros = lengthONum - lengthNumber;
		return string + (Array(zeros+1)).join("0") + number;

	}
}
