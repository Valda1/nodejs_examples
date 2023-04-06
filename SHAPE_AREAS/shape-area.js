const PI = Math.PI;

module.exports.circleArea = function(radius) {
    return PI * radius * radius;
};

module.exports.squareArea = function (sideLength) {
    return sideLength * sideLength;
};