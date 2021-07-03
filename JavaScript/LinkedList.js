class Node {
	constructor(data, next= null){
		this.data = data;
		this.next = next;
	}
}

classs LinkedList {
	constructor(){
		this.head = null;
	}

	insertFirst(data){
		/*if(!this.head.next){
			this.head = new Node(data);
		}
		else{
			let newNode = new Node(data, this.head);
			this.head = newNode;
		}*/

		this.head = new Node(data, this.head);
	}

	size(){
		Node temp = this.head;
		let counter = 0;
		
		while(temp){
			counter++;
			temp = temp.next;
		}
		return counter;
	}

	getFirst(){
		return this.head;
	}

	getLast(){
		Node last = this.head;

		while(last && last.next){
			last = last.next;
		}

		return last;
	}

	clear(){
		this.head = null;
	}

	removeFirst(){
		if(!this.head){
			return;
		}
		this.head = this.head.next;
	}

	removeLast(){
		if(!this.head){
			return;
		}

		if(!this.head.next){
			this.head = null;
			return;
		}

		let lastNode = this.head.next;
		let lastBefore = this.head;

		while(lastNode.next){
			lastBefore = last;
			lastNode = lastNode.next;
		}
		lastBefore.next = null;
	}

	insertLast(data){
		if(!this.head){
			this.head = new Node(data);
			return;
		}

		let last = this.head;

		whiel(last){
			last = last.next;
		}
		last.next = new Node(data);
	}

	getAt(index){
		if(!this.head){
			return null;
		}

		let counter = 0;
		let tempNode = this.head;
		while(tempNode){
			if(counter === index){
				return tempNode;
			}
			tempNode = tempNode.next;
			counter++;
			
		}
		return null;
	}

	removeAt(index){
		if(!this.head){
			return;
		}

		if(index == 0){
			this.head = this.head.next;
		}


		let previous = this.getAt(index-1);
		if(!previous || !previous.next){
			return;
		}

		previous.next = previous.next.next;

	}

	insertAt(index, data){

		
		if(!this.head){
			this.head = newNode;
			return;
		}

		if(index === 0){
			this.head = new Node(data, this.head);
			return;
		}

		let newNode = new Node(data);
		let previous = this.getAt(index-1) || this.getLast();
		newNode.next = previous.next;
		previous.next = newNode;

	}

}

/** To get middle element of a Linkedlist, use 2 pointers 'Faster', 'Slower'. 
 * Faster one pointer to navigate 2 nodes, Slower one to navigate one node.
 * By the time Faster one reaches last node, slower one will be at middle */



 /** To detect circular queue. if at any point fast and slow pointers met then it 
  * means cycles exists in loop. */


 function circular(list) { 
   let slow = list.head;
   let fast = list.head;

   while(fast.next && fast.next.next){
   	slow = slow.next;
   	fast = fast.next.next;

   	if(slow === fast){
   		return true;
   	}
   }
   return false;
}



/** Get n the element from last
 * 
 * initialise fast to head+nth, slow to head. 
 * now increment fast and slow by one node. 
 * By the time fast node reaches end, slow node will be at the nth from last
 * 
 * */

function fromLast(list, n){
	let fast = list.getAt(n+1);
	let slow = list.head;

	while(fast){
		fast = fast.next;
		slow = slow.next;
	}
	return slow;
}


