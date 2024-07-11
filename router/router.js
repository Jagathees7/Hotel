const express = require("express");
const router = express.Router();
const {allItemes, addFoodItem, editFoodItem,deleteFoodItem} = require("../controller/foodController")
const {allTables, addTable, editTable, deleteTable} = require("../controller/tableController")
const {allUser, addUser, editUser, deleteUser} = require("../controller/userController")
const {newOrder, getOrders, getTableData} = require("../controller/orderController")

// Food's API
router.get("/food", allItemes)
router.post("/food/add", addFoodItem)
router.put("/food/edit/:id", editFoodItem)
router.delete("/food/delete/:id", deleteFoodItem)

// Table's API
router.get("/table", allTables)
router.post("/table/add", addTable)
router.put("/table/edit/:id", editTable)
router.delete("/table/delete/:id", deleteTable)

// User's API
router.get("/user", allUser)
router.post("/user/add", addUser)
router.put("/user/edit/:id", editUser)
router.delete("/user/delete/:id", deleteUser)

// Oreder's API
router.get("/orderData", getOrders)
router.post("/newOrder", newOrder)
router.get("/tableData/:tableId", getTableData)

module.exports = router;