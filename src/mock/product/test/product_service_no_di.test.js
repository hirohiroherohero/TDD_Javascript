const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
// ProductService를 테스트 하기위해 ProductClient가져오면 단위테스트로서 의미가 없어진다
// 의존성 없이 테스트 하는게 단위테스트
// ProductClient 모듈 전체 mock
jest.mock('../product_client.js')

describe('ProductService', () => {
    // ProductClient가 리턴하는 데이터를 목 데이터로 만들어주기
    // async는 비동기이기 떄문에 작성
    const fetchItems = jest.fn(async () => [
        { item: 'milk', available: true },
        { item: 'banana', available: false },
        { item: 'tomato', available: true }
    ]);

    // mock ProductClient와 만들어 놓은 mock fetchItems 연결
    ProductClient.mockImplementation(() => {
        return {
            // fetchItems : fetchItems을 줄인것
            fetchItems,
        };
    });

    let productService

    beforeEach(() => {
        productService = new ProductService();
    })

    it('사용할 수 있는 상품만 불러오기', async () => {
        const item = await productService.fetchAvailableItems()

        expect(item.length).toBe(2)
        expect(item).toEqual([{ item: 'milk', available: true }, { item: 'tomato', available: true }])
    })
})