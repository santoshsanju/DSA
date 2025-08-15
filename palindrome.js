function palindrome(num){
    if(typeof(num)!=='number' || num<0) return 'Invalid'
    newNum=''
    n=num
    while(parseInt(n)>0){
        newNum+=parseInt(n%10)
        n/=10;
    }
    return +newNum===num
}
console.log(palindrome(121))