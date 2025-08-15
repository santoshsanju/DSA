function countNegativeNumberInArray(arr){
    if(arguments.length===1 && typeof(arr)==="object" &&Array.isArray(arr) && arr.length > 0 && arr.every(i=>typeof(i)==="number") && arr.filter(i=>!isFinite(i)|| isNaN(i)).length===0) return arr.filter(i=>i<0).length
    return 'Invalid'
}
console.log(countNegativeNumberInArray([1,NaN,6,-2,0]))