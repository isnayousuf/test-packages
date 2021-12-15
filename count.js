module.exports = countNumbers
let count=0;
function countNumbers() {
    function inner() {
        console.log(count);
    }
    count++
    return inner();
}
