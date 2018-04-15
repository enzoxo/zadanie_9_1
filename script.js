var a, 
	h, 
	triangleArea1,
	triangleArea2,
	triangleArea3;
function getTriangleArea(a, h){
	if(a <= 0 || h <= 0){
		console.log("Wrong data!");	
	} else{
	return a*h/2;
	}
}

console.log(getTriangleArea(10,6));
console.log(triangleArea1=getTriangleArea(1,5));
console.log(triangleArea2=getTriangleArea(0,4));
console.log(triangleArea3=getTriangleArea(4,2));
