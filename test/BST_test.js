var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var BinarySearchTree = require("../BST");
var Node = require("../Node");
var expect = chai.expect;
chai.use(sinonChai);

describe('Binary Search Tree', function() {
	describe('constructor', function(){
		it('should initialize root', function(){
			let bst = new BinarySearchTree();
			expect(bst.root).to.equal(null);
		});
	});
	describe('insert', function() {
		it('should throw an arror if key or value is undefined', function(){
			let bst = new BinarySearchTree();
			let shouldFall = false;

			try{
				bst.insert(undefined,"root_value");
				shouldFall = true; 
			} catch(e) {
				
			}
			
			expect(shouldFall).to.be.false;
		});
		it('should search for root', function(){
			let bst = new BinarySearchTree();
			expect(bst.root).to.equal(null);
			bst.insert(5,"root_value");
			expect(bst.root).to.be.not.null;
			expect(bst.root).to.be.instanceof(Node);
			expect(bst.root.key).to.equal(5);
			expect(bst.root.value).to.equal("root_value");
		});
		it('should insert node in left branch of tree if node.key < root.key', function(){
			let bst = new BinarySearchTree();
			bst.insert(5, "root_value").insert(3, "left_value");

			expect(bst.root.left).to.exist;
			expect(bst.root.left.key).to.equal(3);
		});
		it('should insert node in right branch of tree if node.key >= root.key', function(){
			let bst = new BinarySearchTree();
			bst.insert(5, "root_value").insert(6, "right_value");
			expect(bst.root.right).to.exist;
			expect(bst.root.right.key).to.equal(6);
		});
		it('should insert node in right of the left branch if node.key < root.key && >= root.left.key', function(){
			let bst = new BinarySearchTree();
			bst.insert(5, "root_value").insert(2, "left_value").insert(3, "left_right_value");

			expect(bst.root.left.key).to.equal(2);
			expect(bst.root.left.right.key).to.equal(3);
		});
		it('should insert node in left of the right branch if node.key >= root.key && < root.left.key', function(){
			let bst = new BinarySearchTree();
			bst.insert(5, "root_value").insert(8, "left_value").insert(6, "left_right_value");

			expect(bst.root.right.key).to.equal(8);
			expect(bst.root.right.left.key).to.equal(6);
		});
	});
	describe('delete', function(){
		it('should ', function(){

		});
	});
	describe('search', function(){
		it('should throw an arror if key is undefined', function(){
			let bst = new BinarySearchTree();
			let shouldFall = false;

			try{
				bst.insert(undefined,"root_value");
				shouldFall = true; 
			} catch(e) {
				
			}
			
			expect(shouldFall).to.be.false;
		});
		it('should check if type of result of the search is object', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value");
			let key = 10;
			expect(bst.search(key)).to.be.instanceof(Object);
		});
		it('should return root if root.key == key', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value");
			expect(bst.search(10).key).to.equal(10);
		});
		it('should return root.left if root.left.rey == key', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value").insert(8, "left_value").insert(15, "right_value").insert(9, "left_right_value");
			expect(bst.search(8).key).to.equal(8);
		});
		it('should return root.right.left if root.right.left.key == key', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value").insert(8, "left_value").insert(15, "right_value").insert(9, "left_right_value").insert(12, "right_left.left_right_value");
			expect(bst.search(12).key).to.equal(12);
		});
	});
	describe('contains', function(){
		it('should throw error if value is undefined', function(){
			let bst = new BinarySearchTree();
			let shouldFall = false;

			try{
				bst.insert(key, undefined);
				shouldFall = true;
			}
			catch(e){
			};
			expect(shouldFall).to.be.false;
		});
		it('should throw an error if tree does not exist', function(){
			let bst = new BinarySearchTree();
			let left_right_value = 'root_value';
			expect(bst.contains()).to.throw(new Error ('Tree does not exist'));
		});
		it('should return true if root contains value', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value").insert(8, "left_value").insert(15, "right_value").insert(9, "left_right_value");
			expect(bst.contains("root_value")).to.be.true;
		});
	});
});