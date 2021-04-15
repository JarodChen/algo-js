export function shellSort1(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 3) {          //动态定义间隔序列
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

// var arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 04];
// var len = arr.length;
// for (var fraction = Math.floor(len / 2); fraction > 0; fraction = Math.floor(fraction / 2)) {
//     //希尔增量序列  math.floor是返回小于或等于其数字参数的最大整数;这里不需要parseint
//     for (var i = fraction; i < len; i++) {
//         for (var j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
//             var temp = arr[j];
//             arr[j] = arr[fraction + j];
//             arr[fraction + j] = temp;
//         }
//     }
// }