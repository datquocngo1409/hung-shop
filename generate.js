var faker = require('faker');

var database = { products: [], users: []};

database.users.push({
    id: 1,
    name: "Admin",
    username: "admin",
    password: "123456",
    role: "ADMIN",
    token: "token1"
});

for (var i = 1; i<= 10; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?product",
        quantity: faker.random.number()
    });
    database.users.push({
        id: i + 1,
        name: "user" + (i + 1),
        username: "User " + (i + 1),
        password: "123456",
        role: "CUSTOMER",
        token: "token" + (i + 1)
    });
}

console.log(JSON.stringify(database));
