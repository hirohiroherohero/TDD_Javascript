const Calculator = require('../calculator.js')

describe('Calculator', () => {
    let cal

    beforeEach(() => {
        cal = new Calculator()
    })

    it('value', () => {
        expect(cal.value).toBe(0)
    })

    it('set', () => {
        cal.set(2)
        expect(cal.value).toBe(2)
    })

    it('clear', () => {
        cal.set(2)
        cal.clear()
        expect(cal.value).toBe(0)
    })

    it('add', () => {
        cal.set(2)
        cal.add(3)
        expect(cal.value).toBe(5)
    })

    it('subtract', () => {
        cal.set(4)
        cal.subtract(3)
        expect(cal.value).toBe(1)
    })

    it('multiply', () => {
        cal.set(2)
        cal.multiply(5)
        expect(cal.value).toBe(10)
    })

    describe('divides', () => {
        it('0 / 0 === NaN', () => {
            cal.divide(0)
            expect(cal.value).toBe(NaN)
        })

        it('1 / 0 === Infinity', () => {
            cal.set(1)
            cal.divide(0)
            expect(cal.value).toBe(Infinity)
        })
    })
})