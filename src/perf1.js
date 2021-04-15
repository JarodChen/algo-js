// 不太好用

import {
    performance,
    PerformanceObserver
} from 'perf_hooks'

function perfTest(func) {
    let result = [];

    var func = Array.prototype.slice.call(arguments)[0];
    var args = Array.prototype.slice.call(arguments, 1);

0
    const obs = new PerformanceObserver((items) => {
        // console.log(items.getEntries()[0].duration);
        var entry = items.getEntries()[0];
        // console.log(`${entry.name}(${entry[0]}) = ${result[0]}, run time:`, entry.duration, 'ms');
        console.log(`${entry.name}(run time:`, entry.duration, 'ms');
        performance.clearMarks();
    });
    obs.observe({ entryTypes: ['measure'] });


    performance.mark('A');          // 标志一下
    result.push(
        func.apply(this, args)
    );
    performance.mark('B');      // 再标记一下

    // performance.measure(name, startMark, endMark): 在性能时间表里添加一项
    performance.measure('A to B', 'A', 'B');
}

export { perfTest } 