function evenOrOdd(num){
    if(arguments.length===1 && typeof(num)==='number' && isFinite(num) && !isNaN(num)) return num%2==0?'Even':'Odd'
    return 'Invaild'
}
console.log(evenOrOdd(10))