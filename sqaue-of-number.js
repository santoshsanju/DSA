function squareOfNumber(a){
    if(arguments.length===1 && typeof(a)==='number'&&isFinite(a)&&!isNaN(a)) return a*a
    return 'Invalid'
}
console.log(squareOfNumber(3))