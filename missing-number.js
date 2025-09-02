function fun(arr){
    sum=arr.length*(arr.length+1)/2
    for(let i=0;i<arr.length;i++){
        sum-=arr[i]
    }
    return sum
}
console.log(fun([9,6,4,2,3,5,7,0,1]))