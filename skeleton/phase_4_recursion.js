const range = function(start, end) {
	if (start > end) {
		return [];
	}
	
	if (start === end) {
		return [start];
	} else {
		return [start].concat(range(start + 1, end));
	}
};

// --------------------------------------------------

const sumRec = function(arr) {
	if (arr.length === 1) {
		return arr[0];
	} else {
		return arr[0] + sumRec(arr.slice(1, arr.length));
	}
};

// ----------------------------------------

const exponent = function(base, exp) {
	if(exp === 0) {
		return 1;
	} else if (exp < 0)
	{
		return exponent(base, exp + 1) / base;
	}	else {
		return base * exponent(base, exp - 1);
	}
};

// ----------------------------------------

