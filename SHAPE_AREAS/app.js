const { circleArea, squareArea } = require("./shape-area.js");

const radius = 5;
const sideLength = 10;

const circleArea = circleArea(radius);

const squareArea = squareArea(sideLength);

console.log(`Area of circle with radius ` + radius + ` is ${circleArea}`);

console.log(`Area of square with side lenght of ` + sideLength + ` is ${squareArea}`);