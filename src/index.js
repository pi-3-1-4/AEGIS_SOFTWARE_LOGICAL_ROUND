const express = require('express');
const dataFetchHandler = require('../../../AEGIS_SOFTWARE_LOGICAL_ROUND/handlers/dataFetchHandler');
const dbconnection = require('../db/dbconnection');
const fetchData = require('../../../AEGIS_SOFTWARE_LOGICAL_ROUND/handlers/fetchData');
const getDataByTitle = require('../../../AEGIS_SOFTWARE_LOGICAL_ROUND/handlers/getDataByTitle');
const getExcel = require('../handlers/getExcel');

const app = express();
dbconnection();

app.use(express.json())
app.get('/',dataFetchHandler)
app.get('/getProducts',fetchData)
app.get('/getTitle',getDataByTitle)
app.get('/getExcel',getExcel)

app.listen(4000,()=>{
    console.log('app is running in port 4000')
})
