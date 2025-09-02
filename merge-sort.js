// function fnc(arr1, arr2) {
//     let p1 = 0;
//     let p2 = 0;
//     let result = []
//     for (let i = 0; i < arr1.length + arr2.length; i++) {
//         console.log(arr1[p1], arr2[p2])
//         if (arr1[p1] !== undefined && arr2[p2] !== undefined) {
//             if (arr1[p1] > arr2[p2]) {
//                 result[i] = arr2[p2]
//                 p2++
//             } else {
//                 result[i] = arr1[p1]
//                 p1++
//             }
//         } else if (arr1[p1] === undefined) {
//             result[i] = arr2[p2]
//             p2++
//         } else if (arr2[p2] === undefined) {
//             result[i] = arr1[p1]
//             p1++
//         }
//     }
//     return result
// }
// console.log(fnc([1, 2, 3], [2, 3, 4]))


function fun(n1, n2, m, n) {
    for (let i = m + n + 1; i >= 0; i--) {
        console.log(n2[n],n1[m],n.m)
        if (n2[n] !== undefined && n1[m] !== undefined) {
            if ((n2[n] > n1[m])) {
                n1[i] = n2[n]
                n--
            } else {
                n1[i] = n1[m]
                m--
            }
        }
    }
    return n1
}
console.log(fun([1, 2, 3, 0, 0, 0], [1, 2, 3], 2, 2))