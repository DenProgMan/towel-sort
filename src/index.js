
// You should implement your task here.

function isOdd(num) {
    return num === 0 || !!(num && (num%2));
}

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    let result = [];

    for (const [ key, line ] of Object.entries(matrix)) {
        result = result.concat(isOdd(key)
            ? line.reverse()
            : line);
    }

    return result;
}
