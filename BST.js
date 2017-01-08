'use strict'

class BinarySearchTree {
	constructor(value, key) {
		this.value = value;
		this.parent = null;
		this.left = null;
		this.right = null;
		this.key = key;
		this.root = null;
	}

	//returns root* of the tree

	root(){
		if(this.root){
			return this.root;
		}
		else {
			throw new Error('the tree does not exist');
		}
	};

	//stores specified value in tree using key; method should be chainable

	insert(value, key){

		if(!this.root) {
			this.root = key;
			return this.root;
		};

		this.parent = this.root;

		if (key < this.parent) {
			this.left = key;
			this.left.parent = this;

			return this.left;
		}
		else {
			this.right = key;
			this.right.parent = this;
			return this.right;
		}		

	};

	//removes node from tree by provided key; method should be chainable

	delete(key){
		let node = this.root;
		let searchNode = search(key);
		if (key == node ){
			node = null;
		}
		else {
			
		}

	};

	//looking for stored data in tree using key

	search(key){
		let node = this.root
		while (node != null){
			if (key < node){
				node = node.left;
			}
			else if (key > node){
				node = node.right;
			}
			else {
				return node;
			}
		};
		return null;
	};

	//returns whether BST contains such value or not

	contains(value){

	};

	//retrieves ordered sequence of stored values in given order (order is boolean)

	traverse(order){

	};

	//verifies whether tree is well-formed binary search tree or not

	verify(){

	};

/*
	appendChild(node) {
		if(!this.left) {
			this.left = node;
			this.left.parent = this;
		}
		else if(!this.right) {
			this.right = node;
			this.right.parent = this;
		}
	}

	removeChild(node) {
    if(node == this.left) {
			this.left = null;
		}
    else if(node == this.right) {
	    this.right = null;
    }
		else {
			throw new Error('you are trying to remove node which does not exist');
		}
		node.parent = null;
	}

	remove() {
		if(!this.parent) return;
		this.parent.removeChild(this);
	}

	swapWithParent() {
    if(!this.parent) return;

		let parentOfParent = null;
    	let parentBranch = null;

		if(this.parent.parent) {
			parentOfParent = this.parent.parent;

			parentBranch = this.parent === parentOfParent.left ? 'left' : 'right';
		};

		const oldParent = this.parent;
		oldParent.parent = this;

		if(this.getSibling()){
		  this.getSibling().parent = this;
		}

    	this.right = this.parent.right;
		this.parent.left = this.left;
		this.left = this.parent;

		if(!parentOfParent) return;
		  this.parent = parentOfParent;

			this.parent[parentBranch] = this;
	}

	getSibling() {
		if(!this.parent) return;
		if(this === this.parent.left) {
			return this.parent.right;
		}
		if(this === this.parent.right){
			return this.parent.left;
		}
	}*/
}

let root = new BinarySearchTree();
let left = root.insert(1, new BinarySearchTree());
let right = root.insert(1, new BinarySearchTree());
let leftLeft = left.insert(1, new BinarySearchTree());
let leftRight = left.insert(1, new BinarySearchTree());

console.log(root);