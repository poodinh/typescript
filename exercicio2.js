var calcArea = function (shape, dimensions) {
    if (shape === 'rectangle') {
        var area = dimensions[0] * dimensions[1];
        console.log(area);
    }
    else if (shape === 'circle') {
        var area = Math.PI * dimensions[0] * dimensions[0];
        console.log(area);
    }
};
calcArea('rectangle', [4, 5]);
calcArea('circle', [2]);
var calculateArea = function (shape, dimensions) {
    if (shape === 'rectangle' && dimensions.length === 2) {
        var width = dimensions[0], length_1 = dimensions[1];
        return width * length_1;
    }
    else if (shape === 'circle' && dimensions.length === 1) {
        var radius = dimensions[0];
        return Math.PI * Math.pow(radius, 2); //ou Math.pow(radius,2)
    }
    else {
        throw new Error('invalid shape or dimensions');
    }
};
console.log(calculateArea('rectangle', [4, 5]));
console.log(calculateArea('circle', [2]));
