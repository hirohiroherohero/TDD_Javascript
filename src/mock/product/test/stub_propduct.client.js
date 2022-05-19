class StubProductClient {
    async fetchItems() {
        return [
            { item: 'milk', available: true },
            { item: 'banana', available: false },
            { item: 'tomato', available: true }
        ]
    }
}

module.exports = StubProductClient