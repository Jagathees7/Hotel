const {con} = require("../config/sqlConfig");
const {tableQuery} = require("../query/query");
const {getAllTables, addTableQuery, editTableQuery, deleteTableQuery} = tableQuery;
const {GET_ALL_ITEM, ADD_ITEM, EDIT_ITEM, DELETE_ITEM} = require("../mixins/globalMixins");

const allTables = (req, res) => GET_ALL_ITEM(req, res, con, getAllTables);
const addTable = (req, res) => ADD_ITEM(req, res, con, addTableQuery, Object.keys(req.body), "Table added successfully");
const editTable = (req, res) => EDIT_ITEM(req, res, con, editTableQuery(req.body, req.params.id, "tableList", "tableId"), Object.keys(req.body), "Table updated successfully");
const deleteTable = (req, res) => DELETE_ITEM(req, res, con, deleteTableQuery, req.params.id, "Table deleted sucessfully")

module.exports = {
    allTables,
    addTable,
    editTable,
    deleteTable
}