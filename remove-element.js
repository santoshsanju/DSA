function fun(arr,n){
    x=0
    for(let i=0;i<arr.length;i++){
        if(n!==arr[i]){
            arr[x]=arr[i]
            x++
        }
    }
    return arr
}
console.log(fun([0,0,1,1,1,2,2,3,3,4],1))