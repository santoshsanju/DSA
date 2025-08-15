function reverse(num){
    if(typeof(num)!=='number') return 'Invalid'
    newNum=''
    n=Math.abs(num)
    while(parseInt(n)>0){
        newNum+=parseInt(n%10)
        n/=10;
    }
    return num<0?-newNum:+newNum
}
console.log(reverse(-12))