
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var res = [];

    for (const part in matrix) {
        part % 2 !== 0 ? res.push((matrix[part].reverse())) : res.push((matrix[part]));
    }

    return res.flat(Infinity);
}
