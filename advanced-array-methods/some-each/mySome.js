Array.prototype.mySome = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

var arr = [1, 2, 3];
arr.mySome(function(val) {
    return val > 2;
});
