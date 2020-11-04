let geometricShapes = {	
1: "circle",
2:	"semi-circle",
3:	"triangle",
4:	"square",
5:	"pentagon",
6:	"hexagon",
7:	"heptagon",
8:	"octagon",
9:	"nonagon",
10:	"decagon"
}
console.log (geometricShapes)

function wholenumber(num){
 console.log(`You entered ${num} for number of side and the shape is ${geometricShapes[num]}`)
}
wholenumber(5)

///// version 2
function sides(num, obj){
    return obj[num]
}

console.log(sides(2,geometricShapes))