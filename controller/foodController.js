const {con} = require("../config/sqlConfig");
const {foodQuery} = require("../query/query");
const {getAllFoods, addFoodQuery, editFoodQuery, deleteFoodQuery} = foodQuery;
const {GET_ALL_ITEM, ADD_ITEM, EDIT_ITEM, DELETE_ITEM} = require("../mixins/globalMixins");

const allItemes = (req, res) => GET_ALL_ITEM(req, res, con, getAllFoods);
const addFoodItem = (req, res) => ADD_ITEM(req, res, con, addFoodQuery, Object.keys(req.body), "Food item added successfully");
const editFoodItem = (req, res) => EDIT_ITEM(req, res, con, editFoodQuery(req.body, req.params.id, "foodItem", "itemId"), Object.keys(req.body), "Food item updated successfully");
const deleteFoodItem = (req, res) => DELETE_ITEM(req, res, con, deleteFoodQuery, req.params.id, "Food item deleted sucessfully")

module.exports = {
    allItemes,
    addFoodItem,
    editFoodItem,
    deleteFoodItem
}