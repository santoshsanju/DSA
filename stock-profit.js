// function fun(arr){
//     min=arr[0]
//     k=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//             k=i
//         }
//     }
//     max=arr[k]
//     for(let i=k;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max-min
// }
// console.log(fun([7,1,5,3,6,4]))

function fun(arr) {
    min = arr[0]
    profit = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (profit < arr[i] - min) {
            profit = arr[i] - min
        }
    }
    return profit
}
console.log(fun([7, 1, 5, 3, 6, 4]))