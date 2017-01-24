var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var BinarySearchTree = require("../BST");
var Node = require("../Node");
var expect = chai.expect;
chai.use(sinonChai);

const compareArrays = function(array1, array2){
	if (Array.isArray(array1) && Array.isArray(array2)){
		return array1.every((v, k) => array2[k] === v) && array1.length === array2.length;
	}
	else {
		throw new Error('Arguments are incorrect');
	}
}


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
			expect(function(){bst.contains('value');}).to.throw('Tree does not exist');
		});
		it('should return true if root contains value', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value").insert(8, "left_value").insert(15, "right_value").insert(9, "left_right_value");
			expect(bst.contains("root_value")).to.be.true;
		});
		it('should return true if left_value === value', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value").insert(8, "left_value").insert(15, "right_value").insert(9, "left_right_value");
			expect(bst.contains("left_value")).to.be.true;
		});
		it('should return true if right_value === value', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value").insert(8, "left_value").insert(15, "right_value").insert(9, "left_right_value");
			expect(bst.contains("right_value")).to.be.true;
		});
		it('should return true if left_left_value === value', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value").insert(8, "left_value").insert(15, "right_value").insert(6, "left_left_value").insert(9, "left_right_value").insert(13, "right_left_value").insert(20, "right_right_value");
			expect(bst.contains("left_left_value")).to.be.true;
		});
		it('should return true if left_right_value === value', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value").insert(8, "left_value").insert(15, "right_value").insert(6, "left_left_value").insert(9, "left_right_value").insert(13, "right_left_value").insert(20, "right_right_value");
			expect(bst.contains("left_right_value")).to.be.true;
		});
		it('should return true if right_left_value === value', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value").insert(8, "left_value").insert(15, "right_value").insert(6, "left_left_value").insert(9, "left_right_value").insert(13, "right_left_value").insert(20, "right_right_value");
			expect(bst.contains("right_left_value")).to.be.true;
		});
		it('should return true if right_right_value === value', function(){
			let bst = new BinarySearchTree();
			bst.insert(10, "root_value").insert(8, "left_value").insert(15, "right_value").insert(6, "left_left_value").insert(9, "left_right_value").insert(13, "right_left_value").insert(20, "right_right_value");
			expect(bst.contains("right_right_value")).to.be.true;
		});
	});
	describe('traverse', function(){
		it('should return empty array if tree does not exist', function(){
			let bst = new BinarySearchTree();
			expect(compareArrays(bst.traverse(true), [])).to.be.true;
		});
		it('should return array with root.value inside if tree consist only root', function(){
			let bst = new BinarySearchTree();
			bst.insert(8, 'root_value');
			console.log(bst.traverse(true));
			expect(compareArrays(bst.traverse(true), ['root_value'])).to.be.true;
		});
		it('should return array, which consist values from tree in order from min key to max key', function(){
			let bst = new BinarySearchTree();
			bst
				.insert(1, "1")
				.insert(2, "2")
				.insert(3, "3")
				.insert(4, "4")
				.insert(5, "5")
				.insert(6, "6")
				.insert(7, "7")
				.insert(8, "8")
				.insert(9, "9")
				.insert(10, "10")
				.insert(11, "11")
				.insert(12, "12")
				.insert(13, "13")
				.insert(14, "14");
			expect(compareArrays(bst.traverse(true), ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"])).to.be.true;
		})
	})
});