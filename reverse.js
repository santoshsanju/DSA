// function reverse(num){
//     if(typeof(num)!=='number') return 'Invalid'
//     newNum=''
//     n=Math.abs(num)
//     while(parseInt(n)>0){
//         newNum+=parseInt(n%10)
//         n/=10;
//     }
//     return num<0?-newNum:+newNum
// }
// console.log(reverse(-12))

function fun(n){
    num=''
    for(let i=0;n>0;i++){
        num+=n%10
        n=Math.floor(n/10)
    }
    return num
}
console.log(fun(123241))