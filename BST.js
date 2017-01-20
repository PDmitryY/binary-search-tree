'use strict'

var Node = require("./Node");

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	//returns root* of the tree

	root(){
		if(this.root){
			return this.root;
		}
		else {
			throw new Error ('the tree does not exist');
		}
	}

	//stores specified value in tree using key; method should be chainable

	insert(key, value){
		if (typeof key !== "number" || value === undefined) {
			throw new Error('Entered data is not valid');
		};

		if(!this.root) {
			this.root = new Node(key, value);
			return this;
		};

		let leaf = this.root;

		while(true){
			if(key < leaf.key){
				if(!leaf.left){
					leaf.left = new Node(key, value);
					break;
				};
				leaf = leaf.left;
				
			} else if (key >= leaf.key){
				if(!leaf.right){
					leaf.right = new Node(key, value);
					break;
				};
				leaf = leaf.right;
			};
		};
		return this;

	}

	//removes node from tree by provided key; method should be chainable

	delete(key){
		
	}

	//looking for stored data in tree using key

	search(key){
		if (typeof key !== "number") {
			throw new Error('Entered data is not valid')
		};

		if (!this.root) {
			throw new Error('Tree does not exist')
		};

		if(this.root.key===key&&!this.root.left&&!this.root.right) {
			return this.root;
		};

		let leaf = this.root;
		let result = {};

		while(true){
			if(key < leaf.key){
				if(leaf.left.key===key){
					result = leaf.left;
					break;
				};
				leaf = leaf.left;
				
			} else if (key >= leaf.key){
				if(leaf.right.key===key){
					result = leaf.right;
					break;
				};
				leaf = leaf.right;
			};
		};
		return result;
	}

	//returns whether BST contains such value or not

	contains(value){
		if (value === undefined) {
			throw new Error('Entered data is not valid');
		};

		if (!this.root) {
			throw new Error('Tree does not exist')
		};

		let leaf = this.root,
			parent = this;

		while(leaf.value){
			if(leaf.value===value) {
				return true;
			}
			else if(leaf.left.value === value){
				return true;
			}
			else if(leaf.right.value === value){
				return true;
			};
			if(leaf === parent.root){
				leaf = leaf.left;
				parent = parent.root;
			}
			else if(leaf === parent.left){
				leaf = parent.right;
			}
			else if(leaf === parent.right){
				leaf = parent.left.left;
				parent = parent.left;
			}
			else{
				break;
			};

		};
		return false;
	};

	//retrieves ordered sequence of stored values in given order (order is boolean)

	traverse(order){

	}

	//verifies whether tree is well-formed binary search tree or not

	verify(){

	}

}

module.exports = BinarySearchTree;