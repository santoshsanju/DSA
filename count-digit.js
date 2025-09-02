// count=0
// function countDigit(n){
//     if(n===0) return 1;
//     num=n
//     while(parseInt(num)>0||parseInt(num)<0){
//         num/=10
//         count+=1
//     }
//     return count
// }
// console.log(countDigit(-259))


function fun(n){
    count=0
    for(let i=0;n>0;i++){
        n=Math.floor(n/10)
        count++
    }
    return count
}
console.log(fun(1234))