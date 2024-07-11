const {con} = require("../config/sqlConfig");
const {userQuery} = require("../query/query");
const {getAllUser, addUserQuery, editUserQuery, deleteUserQuery} = userQuery;
const {GET_ALL_ITEM, ADD_ITEM, EDIT_ITEM, DELETE_ITEM} = require("../mixins/globalMixins");

const allUser = (req, res) => GET_ALL_ITEM(req, res, con, getAllUser);
const addUser = (req, res) => ADD_ITEM(req, res, con, addUserQuery, Object.keys(req.body), "User added successfully");
const editUser = (req, res) => EDIT_ITEM(req, res, con, editUserQuery(req.body, req.params.id, "userTable", "userId"), Object.keys(req.body), "User updated successfully");
const deleteUser = (req, res) => DELETE_ITEM(req, res, con, deleteUserQuery, req.params.id, "User deleted sucessfully")

module.exports = {
    allUser,
    addUser,
    editUser,
    deleteUser
}