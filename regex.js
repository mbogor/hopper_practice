var findACount = function(string){
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i)=="a" || string.charAt(i)=="A"){
			counter++
		}
	}
	return counter;
}

var areaCodeFinder = function(string){
	var code = "";
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		if (counter===3){
			return Number(code);
		} else if (isNaN(Number(string[i]))!==true) {
			code+=string[i];
			counter++;
		}
	}

}

var adjustUrlParameter = function(url, param){
	var last = url.charAt(url.length-1);
	if (param.charAt(0)==="I"){
		
		if (isNaN(last)===true){
			return url+ "?"+param;
		
		} else if (isNaN(Number(last))===false){
			return url.slice(0,url.indexOf("ID"))+param;
		}
	} else {
		return url+ "&"+param;
	}
}

var CharFinder= function(str){
	for (var i = 0; i <str.length; i++) {
		if (isNaN(Number(str.charAt(i)))===false){
			return i;
		}
	};
}
var stringPlusPlus = function(string){
	var last = string.charAt(string.length-1);
	console.log(last);
	var character = CharFinder(string);
	var num = 0;
	
	if (isNaN(last)===true){
		return string+"1";
	} else{
		num = Number(string.slice(character,string.length))+1;
		return string.slice(0,character) + num.toString();
	}
}

