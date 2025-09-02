// function fnc(arr){
//     let x=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             [arr[x],arr[i]]=[arr[i],arr[x]]
//             x++
//         }
//     }
//     return arr
// }
// console.log(fnc([5,0,1,0,3,12,4]))
function fnc(arr){
    let x=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            [arr[x],arr[i]]=[arr[i],arr[x]]
            x++
        }
    }
    return arr
}
console.log(fnc([-5,0,1,0,3,12,4]))