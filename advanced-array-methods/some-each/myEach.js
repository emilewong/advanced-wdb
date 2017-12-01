Array.prototype.myEvery = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

var arr = [1, 2, 3];

arr.myEvery(function(val) {
    return val > 0;
});
