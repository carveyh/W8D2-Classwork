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

const fibonacci = function(n){
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1];
    } else {
        let previous = fibonacci(n-1);
        previous.push(previous[previous.length-1] + previous[previous.length-2]);
        return previous;
    }
};

//------------------------------------------
const deepDup = function(arr) {
    copy = [];
    arr.forEach(el => {
        if (el instanceof Array) {
            // arr.forEach(el => {
            //     copy.push(deepDup(el))
            // })
            copy.push(deepDup(el))
        } else {
            // something to duplicate base case
            // return arr;
            copy.push(el);
        }
    });
    return copy;
};
