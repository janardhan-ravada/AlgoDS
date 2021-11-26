class Node{
	
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data){
		if(data < this.data && this.left) {
			this.left.insert(data);
		} else if(data < this.data){
			this.left = new Node(data);
		} else if(data > this.data && this.right){
			this.right.insert(data);
		}else  if(data > this.data) {
			this.right = new Node(data);
		}
	}

	contains(data){
		if(this.data === data){
			return this;
		}

		if(this.data < data && this.right){
			return this.right.contains(data);
		} else if(this.data > data&& this.left){
			return this.left.contains(data);
		}

		return null;
	}
}

function validateBST(node){
	if(node && node.left && node.right){
		let valid = false;
		let isLeftValid = false;
		let isRightValid = false;
		
		if(node.data >= node.left.data){
			valid = true;
			isLeftValid = validateBST(node.left);
		}

		if(node.data <= node.right.data && valid ){
			valid = true;
			isRightValid = validateBST(node.right);
		}

		return valid && isLeftValid && isRightValid;
	} else if(node && node.left ){
		let valid = false;
		let isLeftValid = false;
		
		if(node.data >= node.left.data){
			valid = true;
			isLeftValid = validateBST(node.left);
		}
		return valid && isLeftValid;
	} else if (node && node.right){
		let valid = false;
		let isRightValid = false;
		
		if(node.data <= node.right.data){
			valid = true;
			isRightValid = validateBST(node.right);
		}
		return valid && isRightValid;
	} 

	return true;
}


function validate(node, min=null, max = null){
	if(max != null && node.data > max){
		return false;
	}

	if(min!=null && node.data < min){
		return false;
	}

	if(node.left && !validate(node.left, min, node.data)){
		return false;
	}

	if(node.right && !validate(node.right, node.data, max)){
		return false;
	}

	return true;
}


function inorderTraversal(node){
	if(!node)
		return;
	inorderTraversal(node.left);
	console.log(node.data);
	inorderTraversal(node.right);
}
let root = new Node("50");

root.insert("40");
root.insert("30");
root.insert("55");
root.insert("60");
root.insert("55");
root.insert("35");
root.insert("57");
root.insert("65");
root.insert("64");
root.insert("66");


console.log(inorderTraversal(root));

