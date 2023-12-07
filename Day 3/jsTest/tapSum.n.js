const { test } = require('tap');
const sum = require('./sum')

test('sum error -> input not numbers', (assert) => {
    assert.throws(() => sum('1', 2), new Error('inputs must be number'))
    assert.throws(() => sum('2', '3'), new Error('inputs must be number'))
    assert.throws(() => sum(2, '3'), new Error('inputs must be number'))
    assert.end()
})

test('sum -> input numbers', (assert) => {
    assert.equal(sum(1, 2), 3)
    assert.equal(sum(12, 12), 24)
    assert.end()
})