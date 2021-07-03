let bubbleSort = (arr) => {
	for(let j=0; j<arr.length; j++){
		for(let i=0; i<arr.length-j-1; i++){
			if(arr[i]>arr[i+1]){
				let temp = arr[i];
				arr[i]= arr[i+1];
				arr[i+1] = temp;
			}
		}
	}
	return arr;
}

let selectionSort = (arr) => {
	for(let i=0; i< arr.length; i++){
		let minIndex = i;

		for(let j=i+1; j< arr.length; j++){
			if(arr[j] < arr[minIndex]){
				minIndex = j;
			}
		}

		if(minIndex !== i){
			let temp = arr[i];
		arr[i]= arr[minIndex];
		arr[minIndex] = temp;	
		}
		
	}
}

function merge(left, right) {
	const results = [];

	while(left.length && right.length){
		if(left[0] < right[0]){
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	return [...results ,...left, ...right];
}

function mergeSort(arr){
	if(arr.length ===1){
		return arr;
	}

	let midPoint = Math.floor(arr.length/2);

	let leftArr = mergeSort(array.splice(0, midPoint));
	let rightArr = mergeSort(array.splice(midPoint));

	return merge(leftArr, rightArr);
}