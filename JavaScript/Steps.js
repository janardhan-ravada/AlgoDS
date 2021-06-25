const steps1 = (n) => {
	let steps = "";
	for(let i=1; i<=n; i++){
		for(let j=1; j<=i; j++){
			steps = steps+"#";
		}
		if(n!=1){
			steps = steps+"\n";
		}
	}

	console.log(steps);
}

const steps = (n) => {
	for(let row =0; row <n; row++){
		let stair = "";

		for(let column =0; column <n; column++){
			if( column <= row){
				stair = stair+"#";
			}
			else{
				stair = stair+" ";
			}
		}
		console.log(stair);
	}
}

const stepsRecursion = (n, currentRow=0) => {
	if(n==0 || n== currentRow){
		return;
	}

	let stair ="";
	for(let i=0; i<n; i++){
		if(i<currentRow){
			stair = stair+"#";
		}else {
			stair = stair+" ";
		}
	}
	console.log(stair);
	stepsRecursion(n, currentRow+1);
}


const stepsRecursion2 = (n, currentRow=0, stair='') => {
	if(n== currentRow){
		return;
	}

	if(n== stair.length){
		console.log(stair);
		return stepsRecursion2(n, currentRow+1);
	}

	if(stair.length <=currentRow){
		stair = stair+'#';
	}else{
		stair = stair+ ' ';
	}

	stepsRecursion2(n, currentRow, stair);
}

stepsRecursion2(10);


