function fun(arr,n){
    for(let i=0;i<Math.floor(arr.length/2);i++){
        [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]]
    }
    return arr
}
console.log(fun([0,0,1,1,1,2,2,3,3,4],1))