Array.prototype.bubbleSort = function() {
    sorted = false;

    while (!sorted) {
        sorted = true;
        for (i = 0; i < this.length-1; i++) {
            if (this[i] > this[i+1]) {
                // this[i], this[i+1] = this[i+1], this[i];
                temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                sorted = false;
            }
        }
    }
    return this;
};

console.log([1,0,-5].bubbleSort())
// console.log([1,0,8,5,9,-9,7,2].bubbleSort())

//------------------------------------------------------------------------------
String.prototype.substrings = function() {
    substrings = [];

};
