function findSecondLargestNumberInAnArray(arr){
    if(arguments.length!==1 || !Array.isArray(arr) || arr.length<2) return 'Invalid'
    num1=-Infinity
    num2=-Infinity
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i])!=="number" || !isFinite(arr[i]) || isNaN(arr[i])) return 'Invalid'
        if(num1<arr[i]){
            num2=num1
            num1=arr[i]
        }else if(num2<arr[i] && arr[i]!==num1){
            num2=arr[i]
        }
    }
    return num2
}
console.log(findSecondLargestNumberInAnArray([1,5,2,5]))