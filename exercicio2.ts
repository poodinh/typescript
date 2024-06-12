/*
Write a function called calculateArea that takes in two parameters: shape (string) 
and dimensions (number[]). The shape parameter represents the shape type, which can 
be either "rectangle" or "circle". The dimensions parameter represents the dimensions 
of the shape. For a rectangle, the dimensions array should contain two numbers 
representing the length and width. For a circle, the dimensions array should contain one 
number representing the radius. The function should calculate and return the area of the
shape based on the provided dimensions.
*/
type Shape = 'rectangle' | 'circle';

const calcArea = (shape:Shape, dimensions:number[]):void =>{ //n me está a dar c o number
    
    if (shape==='rectangle'){
        const area = dimensions[0]*dimensions[1];
        console.log(area)
    } else if (shape==='circle'){
        const area = Math.PI * dimensions[0] * dimensions[0];
        console.log(area)
    } 
} //n tinha else era esse o problema mas n conhecia a cena do throw error

calcArea('rectangle',[4,5])
calcArea('circle',[2])


const calculateArea = (shape:Shape, dimensions:number[]):number =>{
    if (shape==='rectangle' && dimensions.length===2){
        const [width, length]=dimensions;
        return width*length
    } else if (shape==='circle' && dimensions.length ===1){
        const [radius] = dimensions;
        return Math.PI* radius**2 //ou Math.pow(radius,2)
    }else{
        throw new Error('invalid shape or dimensions')
    }
}

console.log(calculateArea('rectangle',[4,5]))
console.log(calculateArea('circle',[2]))