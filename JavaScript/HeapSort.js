

function maxheapify(arr, i , length){
		let firstChild = (2*i)+1;
		let secondChild = (2*i)+2;
		if(firstChild >length || secondChild > length){
			return;
		}
		let largest = i;

		 if( firstChild < length && arr[firstChild] > arr[i]){
		 	largest = firstChild;
		 } 

		 if(secondChild < length && arr[secondChild] > arr[largest]){
		 	largest = secondChild;
		 }

		if(i !== largest){
			let temp = arr[i];
			arr[i] = arr[largest];
			arr[largest] = temp;

			maxheapify(arr, largest, length);
		}

		
}




function  heapSort() {

	let arr = [10,23,34,21,67, 17, 18, 100];

	for(let i= Math.floor(arr.length/2-1); i>=0; i--){
		maxheapify(arr,i, arr.length );	
	}
	
	console.log(arr);
	// Heapify

	// remove the root element and then ass it to end of arry
	let k =6;
	let count =0;
	for(let j=arr.length-1; j>0; j--){
		count++;
		if(count === k){
			break;
		}
		let temp = arr[j];
		arr[j]= arr[0];
		arr[0]= temp;

		maxheapify(arr, 0, j);
		
	}

	//console.log(arr[0]);

	console.log(arr);
}

heapSort();