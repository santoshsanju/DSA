// function fnc(arr) {
//     let count = 0
//     let maxCount = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) count++
//         if (maxCount < count) maxCount = count;
//         if (arr[i] !== 1) count = 0
//     }
//     return maxCount
// }
// console.log(fnc([1, 1, 0, 1, 1, 1,0,1,1,0,1]))
function fnc(arr) {
    let count = 0
    let maxCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) count++
        else{
            maxCount=Math.max(count,maxCount)
            count=0
        }
    }
    return Math.max(count,maxCount);
}
console.log(fnc([1, 1, 0, 1, 1, 1,0,1,1,0,1]))