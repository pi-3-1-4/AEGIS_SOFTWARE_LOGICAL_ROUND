const products = require('../db/schema')

async function dataFetchHandler(req, res) {
    let data = await fetch('https://dummyjson.com/products')
    data = await data.json()

    for(let i =0 ; i<data.products.length;i++){
        const addProduct = new products(data.products[i])
        await addProduct.save()
    }
    res.send(data.products[0])
}

module.exports = dataFetchHandler
