const {generateUptateQuery} = require("../custom/custom")

const foodQuery = {
    getAllFoods: "SELECT * FROM foodItem",
    addFoodQuery: "INSERT INTO foodItem VALUES (?, ?, ?, ?)",
    editFoodQuery: generateUptateQuery,
    deleteFoodQuery: "DELETE FROM foodItem WHERE itemId = ?"
}

const tableQuery = {
    getAllTables: "SELECT * FROM tableList",
    addTableQuery: "INSERT INTO tableList VALUES (?, ?, ?)",
    editTableQuery: generateUptateQuery,
    deleteTableQuery: "DELETE FROM tableList WHERE tableId = ?"
}

const userQuery = {
    getAllUser: "SELECT * FROM userTable",
    addUserQuery: "INSERT INTO userTable VALUES (?, ?, ?, ?, ?, ?)",
    editUserQuery: generateUptateQuery,
    deleteUserQuery: "DELETE FROM userTable WHERE userId = ?"
}

const orderQuery = {
    getOrderQuery: "SELECT * FROM orderTable",
    newOrderQuery: "INSERT INTO orderTable VALUES (?, ?, ?, ?, ?, ?)",
    getTableQuery: "SELECT orderId, userTable.userName, foodItem.itemName, foodItem.itemPrice, orderQty, subTotal FROM orderTable LEFT JOIN userTable ON userTable.userId = orderTable.orderUserId LEFT JOIN foodItem ON foodItem.itemId = orderTable.orderFoodId WHERE orderTableId = ?"
}

module.exports = {
    foodQuery,
    tableQuery,
    userQuery,
    orderQuery
}