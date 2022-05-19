const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client')

describe('로그인', () => {
    const login = jest.fn(async () => 'success');

    UserClient.mockImplementation(() => {
        return {
            login
        }
    })

    let userService

    beforeEach(() => {
        userService = new UserService(new UserClient())
    })

    it('로그인 성공 (첫 시도)', async () => {
        await userService.login('abc', 'def')
        expect(login.mock.calls.length).toBe(1)
    })

    it('로그인 성공 상태에서 또 로그인 시도', async () => {
        await userService.login('abc', 'def')
        await userService.login('abc', 'def')
        expect(login.mock.calls.length).toBe(1)
    })
})