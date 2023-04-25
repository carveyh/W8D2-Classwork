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

//------------------------------------------------------------------------------
Array.prototype.twoSum = function() {
    let pairs = [];
    let positions = ({});
    for (i = 0; i < this.length; i++) {
        // debugger
        opposite = 0-this[i];
        // if (positions[opposite]) {    // 0 IS FALSEY
        // if (positions[opposite] !== NaN) {    // it is undefined
        // will assign to positions negative numbers as string
        // it can detect opposite numbers if represented as a string in hash
        if (positions[opposite] !== undefined) {    // 0 IS FALSEY
            pairs.push([positions[opposite], i]);
            positions[this[i]] = i;
        } else {
            positions[this[i]] = i;
        }
    }
    return pairs;
}

console.log([1, 0, 7, -1, 8, -7, 6, -7, 1].twoSum())

//------------------------------------------------------------------------------
Array.prototype.transpose = function() {
    let transposed = [];
    for (j = 0; j < this[0].length; j++) {
        let row = [];
        for (i = 0; i < this.length; i++) {
            row.push(this[i][j]);
        }
        transposed.push(row);
    }
    return transposed;
}
console.log("Transpose: ")
console.log([[1,2,3],[4,5,6]])
console.log([[1,2,3],[4,5,6]].transpose())
