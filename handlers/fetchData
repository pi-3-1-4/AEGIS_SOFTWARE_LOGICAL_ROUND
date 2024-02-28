//fetch data btwn min and max price and sort it and send it back 

const products = require('../db/schema')
const {pushExcelData} = require('../utils/storeData')

async function fetchData(req,res){
    const {min,max} = req.body
    const data = await products.find({ price:{ $gte:min,$lte:max}})
    data.sort((a,b)=> a.price-b.price)
    pushExcelData(data,'MIN TO MAX VALUES')
    res.json(data)

}
module.exports = fetchData
