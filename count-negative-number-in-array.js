function countNegativeNumberInArray(arr){
    // if(arguments.length===1 && typeof(arr)==="object" &&Array.isArray(arr) && arr.length > 0 && arr.every(i=>typeof(i)==="number") && arr.filter(i=>!isFinite(i)|| isNaN(i)).length===0) return arr.filter(i=>i<0).length
    // return 'Invalid'
    if(arguments.length!==1 || !Array.isArray(arr) || arr.length==0) return 'Invalid'
    count=0
    for (let i=0;i<arr.length;i++) {
        if(typeof(arr[i])!=="number" || !isFinite(arr[i]) || isNaN(arr[i])) return 'Invalid'
        if(arr[i]<0) count++
    }
    return count
}
console.log(countNegativeNumberInArray([1,6,-2,0]))