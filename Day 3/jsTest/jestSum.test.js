const sum = require('./sum')

describe('a sum function' , () => {
    it('should throw an error if the argument is not a number', () => {
        expect(() => sum('1', 2)).toThrow();
        expect(() => sum('2', '3')).toThrow();
        expect(() => sum(2, '3')).toThrow();
    })

    it('should return the sum of two numbers', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(3, 7)).toBe(10);
        expect(sum(-12, 23)).toBe(11);
    })

})