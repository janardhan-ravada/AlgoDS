let vowelsCount = (str) => {
	let vCount = 0;

	let vowlsArray = ['a', 'e', 'i', 'o', 'u'];
	str.split("").forEach( char => {
		if(vowlsArray.includes(char.toLowerCase())){
			vCount++;
		}
	});
	return vCount;
}

let vowelsCount2 = (str) => {
	const matches = str.match(/[aeiou]/gi);

	return matches?matches.length : 0;
}
console.log(vowelsCount2('aeiouaeiou!'));