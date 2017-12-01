Array.prototype.myFilter = function(callback) {
    var newArr = [];

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }

    return newArr;
};

var arr = [1, 2, 3, 4, 5];

arr.myFilter(function(val) {
    return val % 2 === 0;
});
