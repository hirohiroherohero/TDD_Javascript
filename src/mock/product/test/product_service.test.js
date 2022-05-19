const ProductService = require('../product_service.js');
const StubProductClient = require('./stub_propduct.client');

describe('ProductService - Stub', () => {
    let productService;

    beforeEach(() => {
        productService = new ProductService(new StubProductClient());
    })

    it('사용할 수 있는 상품만 불러오기', async () => {
        const item = await productService.fetchAvailableItems()

        expect(item.length).toBe(2)
        expect(item).toEqual([{ item: 'milk', available: true }, { item: 'tomato', available: true }])
    })
})