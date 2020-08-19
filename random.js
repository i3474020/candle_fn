function candleGen({count = 1, min = 0, max = 9999, noGap = true}) {

    if (count < 1 || !Number.isFinite(count) || min > max) {
        return [];
    }

    function getRange(min, max) {
        const range = Math.random() * (+max - +min) + +min;
        return (range.toFixed(0))
    }

    const results = [];
    let prevEnd = null;

    for (let i = 0; i <= count; i++) {

        const bounds = [getRange(min, max), getRange(min, max)].sort();
        const start = (noGap && prevEnd) ? prevEnd : getRange(...bounds)
        const end = getRange(...bounds);
        if (noGap) prevEnd = end;
        const body = [start, end];
        const dyn = body[0] > body[1] ? 'bear' : 'bull';

        results.push([].concat(bounds, body, dyn))

    }

    return results;
}

console.log(candleGen({count: -10, max: 100}).map(c=>([
    c
])))