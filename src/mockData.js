export function getRandomNumArray(len, min = 0, max = 100) {
    let result = [];
    for (let i = 0; i < len; i++) {
        let randomNum = getRandomNum(min, max);
        result.push(randomNum);
    }

    return result;
}

export function getRandomNum (min, max) {
    var Range = max - min;
    var Rand = Math.random();
    return (min + Math.round(Rand * Range));
}
