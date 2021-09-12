const faker = require('faker')

module.exports = () => {
    const data = {
        users: [],
        products: []
    }

    const num = 200

    for (let index = 1; index <= num; index++) {
        let fakeUser = {}
        
        
        fakeUser.id = index

        let name = {}

        name.firstname = faker.name.firstName()
        name.lastname = faker.name.lastName()

        fakeUser.name = name

        data.users.push(fakeUser)



        let product = {}

        product.id = index

        product.title = faker.commerce.productName()

        product.imageUrl = 'http://localhost:3000/images/logo.png'


        data.products.push(product)

    }

    return data
}