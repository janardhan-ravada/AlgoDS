function chunk(array, size) {
 	let arrLen = array.length;

 	let chunksArray = [];

 	for(let i=0; i<arrLen;){
 		let chunk = [];
 		for(let j=0; j<size && i<arrLen; j++,i++){
 			chunk[j] = array[i];
 		}
 		chunksArray.push(chunk);
 	}   

 	return chunksArray;
}

function chunk2(array, size) {
 	let chunked = [];

 	for(let element of array){
 		const last = chunked[chunked.length-1];

 		if(!last || last.length === size){
 			chunked.push([element]);
 		}else{
 			last.push(element);
 		}
 	}

 	return chunked;
}



function chunk3(array, size) {
 	let chunked = [];

 	let index = 0;

 	while(index<array.length){
 		chunked.push(array.slice(index, index+size));
 		index+=size;
 	}

 	return chunked;
}


console.log(chunk3([1,2,3,4,5], 2));