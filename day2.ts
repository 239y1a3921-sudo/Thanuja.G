interface Data{
    length:number, I
    breadth:number,
    height?: number
}
function reactangleArea (a: Data) {
    return a.length*a.breadth
}
console.log(reactangleArea ({length: 2, breadth:3})+"area od rectangle")
function squareAre (a: Data) {
    return a.length*a.breadth
}
console.log(squareAre ({length: 3,breadth:3})+"area of square")