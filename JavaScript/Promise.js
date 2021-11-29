/** without promise call back hell*/

/*setTimeout(()=>{
	console.log("after 1 Second");

	setTimeout(()=>{
		console.log("after 2 seconds");
		setTimeout(()=> {
			console.log("after 3 seconds");
		}, 3000);
	}, 2000);
}, 1000);*/


/** with promise sequential(promisifying settimeout */

let wait = (sec) => {
	return new Promise(function(resolve, reject){
		setTimeout(resolve, sec*1000);
	});
} 

wait(1).then(()=>{
	console.log("after 1 Second");
	return wait(2);
}).then(()=> {
	console.log("after 2 seconds");
	return wait(3);
}).then(()=>{
	console.log("after 3 seconds");
})
/*
new Promise((resolve, reject) => {
	setTimeout(()=>{ 
		console.log("after 1 Second"); 
		resolve("done")
	}, 1000);
}).then(()=> {
	return new Promise((resolve,reject) => {
		setTimeout(()=> {
			console.log("after 2 second");
			resolve("done"); 
		}, 2000);
	});

}).then (() => {

	return new Promise((resolve, reject) => {
		setTimeout(()=> {
			console.log("after 3 seconds");
			resolve("done");
		}, 3000);
	})
}). then(response => console.log(response));

*/

/**Example -2  */
function loadScript(src, callback){
	let script = document.createElement('script');
	script.src = src;
	script.onload = () => callback(null, script);
	script.onError = () => callback(new Error(`script loading error for ${src}`));
	document.head.append(script);
}

/** suppose one script is depend on other. we want to append one after other, then we have to do it in below way that will create call bacl hell or pyramid doom*/
/*loadScript('Anagrams.js', function(error, script){
	if(error){

	}else{
		alert(`${script.src} loaded`);
		loadScript("ArrayChunk.js", function(error, script){
			if(error){

			}else {
				alert(`${script.src} loaded`);		
				loadScript("BST.js", function(error, script){
					if(error){
					}else {
						alert(`${script.src} loaded`);	
						alert("we are stopping loadind scripts with call back");
					}
			});
		}
	});
	}
	
});*/


/** To avod above kind of call back hell we can follow below pattern*/

/*function stopLoading(error, script){
	if(error){

	} else {
		alert(`${script.src} loaded`);
	alert("we are stopping here");	
	}
}

function loadIntegerReverse(error, script) {
	if(error){

	}else{
		alert(`${script.src} loaded`);
		loadScript('IntegerReverse.js', stopLoading);	
	}
}

function loadFibonacci(error, script) {
	if(error){

	}else {
		alert(`${script.src} loaded`);
		loadScript('Fibonacci.js', loadIntegerReverse );	
	}
	
}

loadScript('Calculator.js', loadFibonacci);*/

/** ABove approach is not a call back hell, still it need many fucntions and many call backs.
 *  they are not much useful method. so we can load all scripts asynchronously using promises*/



 /** Promises*/

 function loadScriptPromise(src) {
 	return new Promise(function(resolve, reject) {
 		let script = document.createElement('script');
 		script.src = src;

 		script.onload = ()=> resolve(script);
 		script.onError = () => reject(new Error(`script loadind ${src} failed`));

 		document.head.append(script);
 	});
 }

/*
 loadScriptPromise("Queue.js")
 .then(response => {
 	alert(`${response.src} loaded with promise`);
 	return loadScriptPromise("Pyramid.js");
 	}
 )
 .then( response => {
 	alert(`${response.src} loaded with promise`);
 });
*/


/**Simple Promise example */

function winLottery(){
	return new Promise(function(resolve, reject){
		console.log("Lottery started");
		setTimeout(()=> {
			if(Math.random() > 0.5){
			resolve("You Own");
		} else {
			reject(new Error("You Lose"));
		}
		}, 2000);
		
	});
}

/*winLottery().
then(response => console.log(response))
.catch(err => console.log(err));*/







/** Get city with GEO location*/

function getLocationsCoords(){
	return new Promise(function (resolve, reject){
		navigator.geolocation.getCurrentPosition( function(poistion, error) {
			if(error){
				reject(new Error(error));
			}
			resolve(poistion);
		});
	}).then(response => response.coords);
}


function getCurrentCity(){
	getLocationsCoords().then(response => {
		const {latitude, longitude } = response;

		return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
	})
	.then(res => res.json())
	.then(data => console.log("data"+data.city));
}

/*getCurrentCity();*/

/** Parallel execution of Promises*/
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function(c1, c2, c3){
	try{
		/*
		const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);

		const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);

		const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);


		console.log(data1.capital, data2.capital, data3.capital)*/


		const data =await Promise.all([
			getJSON(`https://restcountries.eu/rest/v2/name/${c1}`), 
			getJSON(`https://restcountries.eu/rest/v2/name/${c2}`), 
			getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)
			]);

		console.log(data.map(d => d[0].capital));
	} catch(err){
		console.error(err);
	}
}

get3Countries('USA', 'CAN', 'IND');


