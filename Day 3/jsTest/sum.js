function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('inputs must be number')
    }   
    return a + b
}
// console.log(sum("1", 2))
// console.log(sum("2",'3'))
// console.log(sum(2,3))

module.exports = sum