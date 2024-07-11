const generateUptateQuery = (body, id, tableName, columnName) => {
    const str = Object.keys(body).map((key) => `${key} = ?`).join(', ');
    return `UPDATE ${tableName} SET ${str} WHERE ${columnName}=${id}`
}

const generateReqArr = (req, propArr) => {
    const tempArr = [];
    const propArrLength = propArr.length
    for(let i=0; i<propArrLength; i++){
        if(req.body[propArr[i]]) tempArr.push(req.body[propArr[i]])
    }
    return tempArr;
} 

module.exports = {
    generateUptateQuery,
    generateReqArr
}