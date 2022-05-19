const fetchProduct = require('../async.js')

// 비동기 테스트 법
describe('Async', () => {
    // done 방식 시간 너무 오래 걸림, 가독성 떨어짐
    it('async-done', (done) => {
        fetchProduct().then(data => {
            expect(data).toEqual({ item: 'Milk', price: 200 })
            done();
        })
    })

    // return 방식
    it('async-return', () => {
        return fetchProduct().then(data => {
            expect(data).toEqual({ item: 'Milk', price: 200 })
        })
    })

    // async-await 방식
    it('async-await', async () => {
        const product = await fetchProduct()
        expect(product).toEqual({ item: 'Milk', price: 200 })
    })

    // resolve,reject 메소드 방식
    it('async-resolve', () => {
        return expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 })
    })
    it('async-reject', () => {
        return expect(fetchProduct('error')).rejects.toBe('network error')
    })
})