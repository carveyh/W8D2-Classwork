// Array.prototype.uniq = () => { //This errors "forEach is not a function", within "this" also is {}
Array.prototype.uniq = function() {
	let output = [];
	let counterHash = ({}); //need parens to make this not just a block
	console.log(this)
	this.forEach(el => {
		if(!counterHash[el]) {
			output.push(el);
			counterHash[el] = 1;
		}
	})
	return output;
}

console.log([1,2,2,3,3,3].uniq()) // => [1,2,3]

console.log([1,2].__proto__)