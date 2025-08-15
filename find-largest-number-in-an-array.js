function findLargestNumberInAnArray(arr){
    if(arguments.length!==1 || !Array.isArray(arr) || arr.length===0) return 'Invalid'
    num=-Infinity
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i])!=='number' || !isFinite(arr[i]) || isNaN(arr[i])) return 'Invalid'
        if(num<arr[i]) num=arr[i]
    }
    return num
}
console.log(findLargestNumberInAnArray([1,4,-5,8,10]))