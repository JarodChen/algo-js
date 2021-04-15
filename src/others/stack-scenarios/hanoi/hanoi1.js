function Stack() {

	let items = [];

	this.push = function (element) {
		items.push(element);
	};

	this.pop = function () {
		return items.pop();
	};

	this.peek = function () {
		return items[items.length - 1];
	};

	this.isEmpty = function () {
		return items.length == 0;
	};

	this.size = function () {
		return items.length;
	};

	this.clear = function () {
		items = [];
	};

	this.print = function () {
		console.log(items.toString());
	};

	this.toString = function () {
		return items.toString();
	};
}

function towerOfHanoi(n, from, to, helper){

    if (n > 0){
        towerOfHanoi(n-1, from, helper, to);
        to.push(from.pop());
        console.log('-----');
        console.log('Source: ' + from.toString());
        console.log('Dest: ' + to.toString());
        console.log('Helper: ' + helper.toString());
        towerOfHanoi(n-1, helper, to, from);
    }
}

var source = new Stack();
source.push(3);
source.push(2);
source.push(1);

var dest = new Stack();
var helper = new Stack();

towerOfHanoi(source.size(), source, dest, helper);

source.print();
helper.print();
dest.print();