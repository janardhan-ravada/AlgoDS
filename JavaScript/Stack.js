class Stack {

	constructor(){
		this.data = [];
	}

	push(element){
		this.data[this.data.length] = element;
	}

	pop(){
		if(this.data.length<=0){
			console.log("Stack underflow");
			return;
		}
		let popElem = this.data[this.data.length-1];
		this.data = this.data.slice(0, this.data.length-1);
		return popElem;
	}

	size(){
		return this.data.length;
	}

	peek(){
		return this.data[this.data.length-1];
	}
}

/*
let stack = new Stack();


stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");
stack.push("5");
stack.push("6");
stack.push("7");

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
*/
class QueueFromStack {

constructor(){
	 this.data = new Stack();

	 this.temp = new Stack();
}

	add(element){
		this.data.push(element);
	}


	remove(){
		while(this.data.size()>0){
			this.temp.push((this.data.pop()));
		}

		let eleToRemove = this.temp.pop();

		while(this.temp.size()>0){
			this.data.push(this.temp.pop());
		}


		return eleToRemove;
	}
}


let q = new QueueFromStack();

q.add(1);
q.add(2);
q.add(3);
q.add(4);
q.add(5);
q.add(6);
q.add(7);
q.add(8);
q.add(9);
q.add(10);


console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());

