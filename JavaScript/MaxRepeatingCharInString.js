let maxRepeatingChar = (str)=> {

	let charArr = str.split("");

	let charMap = new Map();

	for(let char of charArr){
		if(charMap.has(char)){
			let cont = +charMap.get(char);
			charMap.set(char,cont+1 );
		}else{
			charMap.set(char,1 );
		}
	}

	let maxCount = 0;
	let maxChar=null;

	for (let [key, value] of charMap.entries()) {
  		if(value > maxCount){
  			maxChar = key;
  			maxCount=value;
  		}
  	}

  	return maxChar;
}

console.log(maxRepeatingChar('abcccccdcccaaaaaaaaaaa'));


console.log(maxRepeatingChar('abc123aabbbcccc33333'));

