const assert = require('assert')
const sum = require('./sum')

assert.equal(sum(1, 2), 3)
assert.equal(sum(12, 12), 24)
assert.throws(() => {
    sum('1', 2)
}, /^Error: inputs must be number$/)