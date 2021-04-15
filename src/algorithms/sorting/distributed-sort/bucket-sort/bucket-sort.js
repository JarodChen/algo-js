import { insertionSort } from '../../insertion-sort/insertion-sort.js';

// 桶排序（也被称为箱排序）也是分布式排序算法，它将元素分为不同的桶（较小的数组），
//  再使用一个简单的排序算法，例如插入排序（用来排序小数组的不错的算法），来对每个桶进行 排序。然后，它将所有的桶合并为结果数组
function createBuckets(array, bucketSize) {
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  // console.log(`${maxValue} - ${minValue} / ${bucketSize} = ${(maxValue - minValue) / bucketSize} : ${Math.floor((maxValue - minValue) / bucketSize) + 1}`)
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < array.length; i++) {
    // console.log(`${array[i]} - ${minValue} / ${bucketSize} = ${(array[i] - minValue) / bucketSize} : ${Math.floor((array[i] - minValue) / bucketSize)}`)
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }
  return buckets;
}
function sortBuckets(buckets) {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
}
export function bucketSort(array, bucketSize = 2) {
  if (array.length < 2) {
    return array;
  }
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}
