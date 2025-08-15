function printAllEvenNumbersInAnArray(arr){
    if(typeof(arr)==="object" && Array.isArray(arr) && arr.length>0 && arr.every(i=>typeof(i)==="number") && arr.filter(i=>!isFinite(i) || isNaN(i)).length==0) return arr.filter(i=>i%2===0)
    return 'Invalid'
}
console.log(printAllEvenNumbersInAnArray([Infinity, 2]))