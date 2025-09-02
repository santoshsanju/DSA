function fun(arr){
    // let obj={}
    // for(let i=0;i<arr.length;i++){
    //     if(!obj[arr[i]]){
    //         obj[arr[i]]=1
    //     }else{
    //     obj[arr[i]]++
    //     }
    // }
    // for(let i=0;i<arr.length;i++){
    //      if(obj[arr[i]]==1){
    //         return arr[i]
    //     }
    // }
    // return -1

    let xor =0;
    for(let i=0;i<arr.length;i++){
        xor=xor^arr[i];
    }
    return xor
}
console.log(fun([2,2,1,4,1]))