// import {
//     performance,
//     PerformanceObserver
// } from 'perf_hooks'

// import {fibonacci, fibonacciIterative, fibonacciMemoization} from './fibonacci.js'

// let result = [];

// // timerify: 在一个新函数中包装一个函数，用于测量包装函数的运行时间
// const testfibonacci = performance.timerify(fibonacci);
// const testfibonacciIterative = performance.timerify(fibonacciIterative);

// // 有对象添加到性能时间表时，发出通知
// const obs = new PerformanceObserver((list, observer) => {
//     // PerformanceEntry 对象列表
//     const entries = list.getEntries();

//     entries.forEach((entry, index) => {
//         // entry[0] 是第一个参数的值，如此类推
//         console.log(`${entry.name}(${entry[0]}) = ${result[index]}, run time:`, entry.duration, 'ms');
//     });

//     // 断开 PerformanceObserver 实例与所有通知的连接。
//     obs.disconnect();
//     // 从性能时间表中清除所有对象
//     // performance.clearFunctions();
// });

// // buffered 为 true 表示异步通知，默认是同步通知
// obs.observe({ entryTypes: ['function'], buffered: true });

// result.push(
//     testfibonacci(5),
//     testfibonacci(10),
//     testfibonacciIterative(10),
//     testfibonacci(20),
//     testfibonacci(30),
// );


import { perfTest } from '../../perf.js'
import { fibonacci, fibonacciIterative, fibonacciMemoization } from './fibonacci.js'

perfTest(fibonacci, 10)
perfTest(fibonacciIterative, 10)
// perfTest(fibonacciMemoization, 10)

function add(a, b) {
    return a + b;
}

// perfTest(add, 10, 100)