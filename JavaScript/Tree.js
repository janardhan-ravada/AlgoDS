class Node {

	constructor(data){
		this.data = data;
		this.children = [];
	}

	add(data){
		this.children.push(new Node(data));
	}

	remove(data){
		this.children = this.children.filter( node ==> {
			return node.data !== data;
		});
	}
}


class Tree {
    constructor(){
        this.root = null;
    }
    
    traverseBF(fn){
    	const q = [this.root];

    	while(q.length){
    		const node = q.shift();
    		q.push(...node.children);
    		fn(node);
    	}
    }

    traversDF(fn){
    	const arr = [this.root];

    	while(arr.length){
    		const node = arr.shift();
    		
    		arr.unshift(...node.children);
    		fn(node);
    	}
    }
}



/** get no of nodes in each level*/


function levelWidth(root) {
	const arr = [root, "J"];

	const counters = [0];

	while(arr.length>1){
		const node = arr.shift();

		if(node === 'J'){
			counters.push(0);
			arr.push('J')
		}else{
			arr.push(...node.children);
		counters[counters.length-1]++;
		}
	}

	return counters;
}
