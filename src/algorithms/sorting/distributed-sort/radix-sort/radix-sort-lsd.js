// //LSD Radix Sort
// var counter = [];
// function radixSort(arr, maxDigit) {
//     var mod = 10;
//     var dev = 1;
//     for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
//         for(var j = 0; j < arr.length; j++) {
//             var bucket = parseInt((arr[j] % mod) / dev);
//             if(counter[bucket]==null) {
//                 counter[bucket] = [];
//             }
//             counter[bucket].push(arr[j]);
//         }
//         var pos = 0;
//         for(var j = 0; j < counter.length; j++) {
//             var value = null;
//             if(counter[j]!=null) {
//                 while ((value = counter[j].shift()) != null) {
//                       arr[pos++] = value;
//                 }
//           }
//         }
//     }
//     return arr;
// }

import { findMaxValue, findMinValue } from '../../../search/min-max-search.js';

//LSD Radix Sort
export function radixSortLSD(arr) {
    if (arr.length < 2) {
        return arr;
    }

    // 找出最大位数
    let maxValue
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            maxValue = arr[i]
        } else {
            maxValue = arr[i + 1]
        }
    }

    let maxDigit = 0
    while (maxValue != 0) {
        maxValue = parseInt(maxValue / 10)
        maxDigit++;
    }
    // console.log(maxDigit);

    let counter = [];
    let mod = 10;
    let dev = 1;
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (let j = 0; j < arr.length; j++) {
            let bucket = parseInt((arr[j] % mod) / dev)
            if (counter[bucket] == null) {
                counter[bucket] = []
            }
            counter[bucket].push(arr[j])
        }
        let pos = 0
        for (let j = 0; j < counter.length; j++) {
            let value = null
            if (counter[j] != null) {
                while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value
                }
            }
        }
    }

    return arr;
}
