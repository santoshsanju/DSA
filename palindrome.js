// function palindrome(num){
//     if(typeof(num)!=='number' || num<0) return 'Invalid'
//     newNum=''
//     n=num
//     while(parseInt(n)>0){
//         newNum+=parseInt(n%10)
//         n/=10;
//     }
//     return +newNum===num
// }
// console.log(palindrome(121))


function fun(n){
    copy=n
    num=''
    for(let i=0;n>0;i++){
        num+=n%10
        n=Math.floor(n/10)
    }
    return num==copy
}
console.log(fun(121))