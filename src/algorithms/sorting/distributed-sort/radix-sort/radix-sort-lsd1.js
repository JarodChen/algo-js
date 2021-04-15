Array.prototype.radioSort = function() {
    let len = this.length
    if (len < 2) {
        return
    }
    let counter = []
    let mod = 10
    let dev = 1
    // 找出最大位数
    let maxNum
    for (let i = 0; i < len-1; i++) {
        if (this[i] > this[i+1]) {
            maxNum = this[i]
        } else {
            maxNum = this[i+1]
        }
    }
    let maxDigit = 0
    while (maxNum != 0) {
        maxNum = parseInt(maxNum/10)
        maxDigit++;
    }
     
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(let j = 0; j < this.length; j++) {
            let bucket = parseInt((this[j] % mod) / dev)
            if(counter[bucket]==null) {
                counter[bucket] = []
            }
            counter[bucket].push(this[j])
        }
        let pos = 0
        for(let j = 0; j < counter.length; j++) {
            let value = null
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      this[pos++] = value
                }
          }
        }
    }
}
let arr = [2,9,5,7,1,1,6,3,3,4]
arr.radioSort()
console.log("排序后：", arr.toString())