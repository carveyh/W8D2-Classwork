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
    let copy = [];
    arr.forEach(el => {
        if (el instanceof Array) {
            copy.push(deepDup(el));
        } else {
            copy.push(el);
        }
    });
    return copy;
};

// -----------------------------------------

const bsearch = function(arr, target) {
	if (arr.length === 0) {
		return -1;
	}
	midIdx = arr.length / 2;
	if(target === arr[midIdx]) {
		return midIdx;
	} else {
		let left = arr.slice(0, midIdx);
		let right = arr.slice(midIdx + 1, arr.length);
		//Less than
		if(target < arr[midIdx]) {
			return bsearch(left, target);
		} else {
			let tempIdx = bsearch(right, target);
			if (tempIdx === -1) {
				return -1;
			}
			return midIdx + tempIdx;
		}
	}
};