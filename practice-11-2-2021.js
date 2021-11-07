function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if(test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}

let rabbit = {};
rabbit.speak = function(line) {
	console.log(`The ${this.type}rabbit says '${line}'`);
};

let white_rabbit = {type: "white", speak}
let hungry_rabbit = {type: "hungry", speak}