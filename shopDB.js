const faker = require('faker')

module.exports = () => {
    const data = {
        users: [],
        products: [],
        roles: [
            {name: "Admin",
            capabilities: "changing products",
            id: 1}
            ,
            {name: "Client",
            capabilities: "buying only",
            id: 2} 
            ,
            {name: "User",
            capabilities: "viewing mode",
            id: 3}
    ]
    }

    const num = 50

    for (let index = 1; index <= num; index++) {
        let fakeUser = {}
        
        
        fakeUser.id = index
        fakeUser.role = Math.ceil(Math.random()*3)
       

        let name = {} 

        

        name.firstname = faker.name.firstName()
        name.lastname = faker.name.lastName()

        fakeUser.name = name

        data.users.push(fakeUser)



        let product = {}

        product.id = index

        product.title = faker.commerce.productName()

        product.imageUrl = 'http://localhost:3000/src/logo.svg'


        data.products.push(product)

    }

    return data
}