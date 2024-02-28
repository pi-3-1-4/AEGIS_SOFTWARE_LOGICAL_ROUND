let data ;
let name ;
let response
function pushExcelData(data,name){
    data = data
    name = name
    response={data,name}
}

function getExcelData(){
    return response
}

module.exports = {getExcelData,pushExcelData}
