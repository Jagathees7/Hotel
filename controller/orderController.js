const {con} = require("../config/sqlConfig");
const {orderQuery} = require("../query/query");
const {newOrderQuery, getOrderQuery, getTableQuery} = orderQuery;
const {GET_ALL_ITEM, ADD_ITEM} = require("../mixins/globalMixins");

const getOrders = (req, res) => GET_ALL_ITEM(req, res, con, getOrderQuery)
const newOrder = (req, res) => ADD_ITEM(req, res, con, newOrderQuery, Object.keys(req.body), "Order confirmed")
const getTableData = (req, res) => GET_ALL_ITEM(req, res, con, getTableQuery, req.params.tableId)

module.exports = {
    newOrder,
    getOrders,
    getTableData
}