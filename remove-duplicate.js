function fun(arr){
    x=0
    for(let i=0;i<arr.length;i++){
        if(arr[x]<arr[i]){
            arr[x+1]=arr[i]
            x=x+1
        }
    }
    return arr
}
console.log(fun([0,0,1,1,1,2,2,3,3,4]))