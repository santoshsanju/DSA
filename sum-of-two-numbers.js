function sumOfTwoNumbers(a,b){
    if(arguments.length==2 &&typeof(a)=='number' && typeof(b)=="number" && !isNaN(a) && !isNaN(b) && isFinite(a) && isFinite(b)) return a+b
    return 'Invalid'
}
console.log(sumOfTwoNumbers(3,2))