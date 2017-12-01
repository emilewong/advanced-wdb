Array.prototype.myMap = function(callback) {
    var newArr = [];

    for (var i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }

    return newArr;
}

var arr = [1, 2, 3, 4, 5];

arr.myMap(function(val, i, arr) {
    return val * 2;
});
