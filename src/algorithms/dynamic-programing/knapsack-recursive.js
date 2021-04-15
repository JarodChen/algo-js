export function knapSackRecursive(capacity, weights, values, n) {
  if (n === 0 || capacity === 0) {
    return 0;
  }
  if (weights[n - 1] > capacity) {
    return knapSackRecursive(capacity, weights, values, n - 1);
  }
  const a = values[n - 1] + knapSackRecursive(capacity - weights[n - 1], weights, values, n - 1);
  const b = knapSackRecursive(capacity, weights, values, n - 1);
  return a > b ? a : b;
}
