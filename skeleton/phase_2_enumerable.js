Array.prototype.myEach = function(callback) {
	for(i = 0; i < this.length; i++) {
		callback(this[i]);
	}
	return undefined // if you don't specify a return val in a function, returns undefined.
}

const callback = function(num) {
	console.log(num + 1)
}

console.log([1,2,3,4].myEach(callback))

// ----------------------------------------------------------------------------------------

Array.prototype.myMap = function(callback) {
	let output = [];
	// output.push(this.myEach(callback));
	this.myEach(element => { // CH: ????
		output.push(callback(element));
	});
	return output;
}

const callback2 = function(num) {
	return num + 1;
}

console.log([1,2,3,4].myMap(callback2))

//--------------------------------------

//myReduce needs to be defined with semicolon or will error.
Array.prototype.myReduce = function(callback, initialValue) {
	// debugger
	let acc = initialValue;
	let fullArray = this;
	if(initialValue === undefined) {
		acc = this[0];
		fullArray = this.slice(1, this.length - 1);
	}
	// debugger
	fullArray.myEach(el => {
		acc = callback(acc, el);
	})
	return acc;
};
// console.log("hello")



//These will trigger "Uncaught TypeError: Cannot read properties of undefined (reading '3')"
//unless we wrap these myReduce calls in console.log, or assign to a variable


// without initialValue
a = [1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}); // => 6

console.log(a);

// with initialValue
[1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25); // => 31

// console.log(b)
