/** Functional implementation */

// function  Queue() {
// 	this.queue  = [];	
	
// 	let add = (element) => {
// 		this.queue[this.queue.length] = element;
// 	};

// 	let remove =() => {

// 		if(this.queue.length === 0 ){
// 			cosole.log("Queue empty");
// 		}
// 		let firstElement = this.queue[0];
// 		this.queue = this.queue.splice(1);
// 		return firstElement;
// 	};

// 	let size = () => {
// 		return this.queue.length;
// 	};

// 	return {
// 		add : add,
// 		remove : remove,
// 		size : size
// 	}
// }

// let queue = new Queue();

// queue.add(1);
// queue.add(2);
// queue.add(3);
// queue.add(4);
// queue.add(5);
// queue.add(6);
// queue.add(7);
// queue.add(8);
// queue.add(9);
// queue.add(10);

// console.log(queue.size());

// console.log("Removed element"+queue.remove());
// console.log("Removed element"+queue.remove());
// console.log("Removed element"+queue.remove());
// console.log("Removed element"+queue.remove());

// console.log("Queue size: "+queue.size());



/** class implementation */
class QueueClass {
	constructor(){
		this.queue = [];
	}


	 add (element){
		//this.queue[this.queue.length] = element;

		this.queue.unshift(element);
	}

	 remove (){
		/*let firstElement = this.queue[0];
		this.queue = this.queue.splice(1);
		return firstElement;*/

		return this.queue.unshift(element);
	}

	peek(){
		return this.data[this.data.length-1];
	}

}


function weave(soureOne, sourceTwo){
	const q = new QueueClass();

	while(soureOne.peek() || sourceTwo.peek()){
		if(soureOne.peek()){
			q.add(soureOne.remove());
		}

		if(sourceTwo.peek()){
			q.add(sourceTwo.remove());
		}
	}

	return q;
}


