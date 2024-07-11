const {generateReqArr} = require("../custom/custom")

const GET_ALL_ITEM = (req, res, con, sqlQuery, anyCondition = []) => {
    con.query(sqlQuery,anyCondition, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
}

const ADD_ITEM = (req, res, con, sqlQuery, propArr, sucessMsg = "Added successfully") => {
    const reqArr = generateReqArr(req, propArr)
    con.query(sqlQuery, reqArr, (err) => {
        if(err) throw err;
        res.send(sucessMsg)
    })
}

const EDIT_ITEM = (req, res, con, sqlQuery, propArr, sucessMsg = "Updated successfully") => {
    const reqArr = generateReqArr(req, propArr)
    con.query(sqlQuery, reqArr, (err) => {
        if (err) throw err;
        res.send(sucessMsg)
    })
}

const DELETE_ITEM = (req, res, con, sqlQuery, delId, sucessMsg = "Deleted successfully") => {
    con.query(sqlQuery, delId, (err) => {
        if(err) throw err;
        res.send(sucessMsg)
    })
}

module.exports = {
    GET_ALL_ITEM,
    ADD_ITEM,
    EDIT_ITEM,
    DELETE_ITEM
}