var repeat = function(a,b) {
	var result = "";
	if (b==0){
		return result;
	}

	while (b>0){
		result+=a;
		b--;
	}
	return result;
}


var sum = function(array){
	var total = 0;
	if (array.length==0){
		return 0;
	} 
	else if (array.length==1){
		return array[0];
	}
	else {
		for (var i=0; i<array.length; i++){
			total+=array[i];
		}
		return total;
	}
}


var gridGenerator = function(n){
	var st = "";

	for (var i=0; i<n; i++){

		for (var j=0; j<n; j++){

			if (i%2===0 && j%2===0 || i%2===1 && j%2===1)
			{
				st=st.concat("#");
			}
			else{
				st=st.concat(" ");
			}
		}
		st=st.concat("\n");
	}
	return st;
}


var largestTriplet = function (n) {
	var answer = [];
	for (i=n;i>1;i--) {
		for (j=(i-1);j>1;j--) {
			var low = Math.pow((Math.pow(i,2)) - (Math.pow(j,2)),.5);
			if ((low%1===0) && (low>1)) {
				answer.push(low);
				answer.push(j);
				answer.push(i);
				return answer;
			}
		}
	} 
}


var join = function(array, string){
	var str = "";
	
	if (array.length===0){
		return str;
	
	} else if (array.length!==0 && string===undefined) {
		for (var i=0; i<array.length; i++){
			str = str.concat(array[i]);
		}
		return str;

	}else if (array.length!==0 && string!==undefined) {
		for (var j=0;j<array.length; j++){
			str = str.concat(array[j]+ string);
			if (j==(array.length)-1){
			    str = str.slice(0,(str.length-1));
			}
		}
		return str;
		
	}
}


var paramify = function(obj){
	var answer = "";
	var counter = 0;
	var ks = [];
	//alphabitize

	for (k in obj){
  		if (obj.hasOwnProperty(k)) {
    	ks.push(k);
    	}
    }

    ks.sort()
    console.log(ks);

	for (var i=0; i<ks.length; i++){
		
		answer+= ks[i] + "=" + obj[ks[i]];
		console.log(obj);
		console.log(i);
		console.log(ks[i]);
		console.log(answer);

		
		if (Object.keys(obj).length!=(counter+1)){
			answer = answer + "&";
		}
		counter++;
	}
	return answer;

}
