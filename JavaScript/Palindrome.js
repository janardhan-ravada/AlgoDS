let isPalindrome = (str) => {
	if(!str){
		return false;
	}

	let length = str.length;
	let startIndex, endIndex;

	if(length%2 == 0){
		startIndex = (Math.floor(length/2))-1;
		endIndex = startIndex+1;

	}else{
		startIndex = Math.floor(length/2);
		endIndex = Math.floor(length/2);
	}

	let isPalindrome = false;
	let strArr = str.split("");
	while(startIndex >=0 && endIndex<=length-1){
		if(startIndex ==0 && endIndex == length-1){
			return true
		}
		if(strArr[startIndex].toLowerCase() == strArr[endIndex].toLowerCase()){
			startIndex--;
			endIndex++;
		}else{
			return false;
		}
	}

	return isPalindrome;
};


console.log(isPalindrome("Fish hsif"));

console.log(isPalindrome("abccba"));;

console.log(isPalindrome("abcba"));;

console.log(isPalindrome("absdfaba"));

console.log(isPalindrome("abfdba"));





/** Testcases **/

/* *

1. length ==1 //true


abcdef
*/