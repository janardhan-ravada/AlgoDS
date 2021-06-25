const areAnagrams = (str1, str2)=> {
	str1 = str1.replace(/[^\w]/g, "");
	str2 = str2.replace(/[^\w]/g, "");

	let charMapForStr1 = {};
	str1.split("").map( char => {
		if(charMapForStr1[char]){
			charMapForStr1[char]++;
		}else{
			charMapForStr1[char]=1;
		}
	});


	let charMapForStr2 = {};
	str2.split("").map( char => {
		if(charMapForStr2[char]){
			charMapForStr2[char]++;
		}else{
			charMapForStr2[char]=1;
		}
	});

	if(Object.keys(charMapForStr1).length !== Object.keys(charMapForStr2).length  ){
		return false;
	}

	let keys = Object.keys(charMapForStr1);

	for(let key of keys){
		if(charMapForStr1[key] !== charMapForStr2[key]){
			return false;
		}
	}

	return true;
}


const angrams = ( stringA, stringB) => {
	const str1 = stringA.replace(/[^\w]/g, "").split("").sort().join("");
	const str2 = stringB.replace(/[^\w]/g, "").split("").sort().join("");

	return str1===str2;
}


console.log(angrams("hellob", "llbbohe"));