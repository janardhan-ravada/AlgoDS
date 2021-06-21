let reverseString1 = (input) => {
	if(!input){
		return input;
	}

	let reversedString = '';
	let splittedInput = input.split("");
	for(let i=splittedInput.length-1; i>=0 ; i--){
		reversedString = reversedString + splittedInput[i];	
	}
	return reversedString;

}


let reverseString2 = (input) => {
	if(!input){
		return input;
	}

	
	return input.split('').reverse().join('');

}

let reverseString3 = (input) => {
	if(!input){
		return input;
	}

let reversed = "";
	for ( let char of input){
		reversed = char+reversed;
	}
	return reversed;

}

let reverseString4 = (input) => {
	let reversedString = '';

	return input.split("").reduce( (reversed, charcter)=> {
		return charcter+reversed;
	}, '');
}

console.log(reverseString4(""));

console.log(reverseString4("a"));

console.log(reverseString4("abcd"));

/* 

------Test cases-----

1. input = "" || undefined || null

2. input  = "a"

3. input = "abjdj"

*/

