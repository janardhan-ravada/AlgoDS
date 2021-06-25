let reverseInt1 = (num) => {
	let reversedInt = 0;

	num = +num;

	let isNegative = false;

	if(num <0){
		isNegative = true;
		num=-num;
	}

	while(num!=0){
		let rem = num%10;
		reversedInt = (reversedInt*10)+rem;
		num = Math.floor(num/10);
	}
	if(isNegative){
		reversedInt = -reversedInt;
	}
	return reversedInt;
}

/** Math.sign will return -1 for negative numbers, +1 for postiive numbers
 * in this approach we are doing string reverse on number, then converting into number, then assigning sign by multiplying with -1/+1
 * */
 
let reverseInt2 = (num) => {
	const reversed = parseInt(num.toString().split('').reverse().join(''));

	return reversed * Math.sign(num);
}

console.log(reverseInt2(123));
console.log(reverseInt2(0));
console.log(reverseInt2(-150));
console.log(reverseInt2(500));

