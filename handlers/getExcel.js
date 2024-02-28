const {getExcelData} = require("../utils/storeData")

async function getExcel(req,res){
    const response =getExcelData()
    res.json(response)
}

module.exports = getExcel
