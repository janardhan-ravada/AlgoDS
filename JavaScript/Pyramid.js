let printPyramid = (n) => {
	let noOfColumns = 2*n-1;
		let midPoint = Math.floor(noOfColumns/2);
	for(let i=0; i<n; i++){
		
		let pyramidRow = "";
		
		for(let j=0; j<noOfColumns; j++){
			
			if(j<= midPoint+i && j>=midPoint-i){
				pyramidRow = pyramidRow+"#";
			}else{
				pyramidRow = pyramidRow+" ";
			}

		}
		console.log(pyramidRow);
		
	}
}

let printPyramidRecursion = (n, row = 0, level = '') => {
	if(n==row){
		return;
	}

	if(level.length === 2*n-1){
		console.log(level);
		return printPyramidRecursion(n, row+1);
	}

	const midPoint = Math.floor((2*n-1)/2);

	let add;

	if(midPoint-row <= level.length && midPoint+row >= level.length){
		add = "#";
	}
	else{
		add = ' ';
	}

	printPyramidRecursion(n, row, level+add);
}

printPyramidRecursion(5);