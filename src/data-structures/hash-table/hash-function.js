// lose lose 散列函数，方法是简单地将每个键值中的每个字母的 ASCII值相加
export function loseloseHashCode(toStrFn) {
    let tostringFuncion = toStrFn;
    let hashFunction =  function(key){
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = tostringFuncion(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }
   
    return hashFunction;
}

//不准
export function loseloseHashCode1(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash += char;
    }
    return hash;
}

// 在将键转化为字符串之后（行{1}），djb2HashCode 方法包括初始化一个 hash 变量并赋值 为一个质数（行{2}——大多数实现都使用 5381），然后迭代参数 key（行{3}），将 hash 与 33 相乘（用作一个幻数①），并和当前迭代到的字符的 ASCII码值相加（行{4}）。 
// 后，我们将使用相加的和与另一个随机质数相除的余数（行{5}），比我们认为的散列表 大小要大。
// //不准
export function djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
        hash = (hash * 33) + tableKey.charCodeAt(i);
    }
    return hash % 1013;
}

//不准
export function djb2HashCode1(str) {
    var hash = 5381;
    for (let i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
    }
    return hash;
}

//不准
export function hashCode1(str) {
    var hash = 0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

//不准
export function sdbmCode(str) {
    var hash = 0;
    for (let i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = char + (hash << 6) + (hash << 16) - hash;
    }
    return hash;
}