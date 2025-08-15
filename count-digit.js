count=0
function countDigit(n){
    if(n===0) return 1;
    num=n
    while(parseInt(num)>0||parseInt(num)<0){
        num/=10
        count+=1
    }
    return count
}
console.log(countDigit(-259))