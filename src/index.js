
// You should implement your task here.

module.exports = function towelSort (matrix) {
let resArr = [];
if (matrix) {
matrix.map((e, i) => {
if (i % 2 === 0) {
e.map(a => resArr.push(a));
} else {
e.reverse().map(a => resArr.push(a));
}
});
}
return resArr;
}
