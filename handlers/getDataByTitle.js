//get the data by title and sort it in max to min
const products = require('../db/schema')
const {pushExcelData} = require('../utils/storeData')

async function getDataByTitle(req,res){
    
    const {title} = req.body
    const data = await products.find({title: { $regex:title}})
    data.sort((a,b)=>b.rating-a.rating)
    res.json(data)
    pushExcelData(data,'MAX TO MIN VALUES')

}

module.exports = getDataByTitle
