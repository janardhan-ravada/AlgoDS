/** O(n)*/

function fib(n){
	const result = [0,1];

	for(let i=2; i<=n; i++){
		result[i] = result[i-1]+result[i-2];
	}

	return result[n];
}


/** recursive will be exponential run time **/
function fibRec(n){
	if(n==0)
		return 0;

	if(n==1)
		return 1;

	return fibRec(n-1)+fibRec(n-2);
}

/** recursive solution can be improved with memoization*/


function memoize(fn){
	const cache = {};
	return function(...args){
		if(cache[args]){
			return cache[args];
		}

		const result = fn.apply(args);
		cache[args] = result;

		return result;
	}
}

console.log(memoize(fib(10)));