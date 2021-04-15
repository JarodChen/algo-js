// 不太好用

import {
    performance,
    PerformanceObserver
} from 'perf_hooks'

function perfTest(func) {
    let result = [];

    var func = Array.prototype.slice.call(arguments)[0];
    var args = Array.prototype.slice.call(arguments, 1);

    // timerify: 在一个新函数中包装一个函数，用于测量包装函数的运行时间
    let testFunc = performance.timerify(func);

    // 有对象添加到性能时间表时，发出通知
    let obs = new PerformanceObserver((list, observer) => {
        // PerformanceEntry 对象列表
        let entries = list.getEntries();

        // console.log(entries[0])

        entries.forEach((entry, index) => {
            // entry[0] 是第一个参数的值，如此类推
            // console.log(entry);
            // console.log(result);
            if(result[index] == undefined){
                return;
            }
            // console.log(`${entry.name}(${entry[0]}) = ${result[index]}, run time:`, entry.duration, 'ms');
            // console.log(`${entry.name}(${entry[0]}) = ${result[0]}, run time:`, entry.duration, 'ms');
            console.log(`${entry.name}(run time:`, entry.duration, 'ms');
        });
        // 断开 PerformanceObserver 实例与所有通知的连接。
        obs.disconnect();
        // 从性能时间表中清除所有对象
        // performance.clearFunctions();
    });

    // buffered 为 true 表示异步通知，默认是同步通知
    obs.observe({ entryTypes: ['function'], buffered: true });

    // console.log(args);

    result.push(
        testFunc.apply(this, args)
    );
}

export { perfTest } 
