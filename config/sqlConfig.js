const mysql = require("mysql");

let con = mysql.createConnection({
    host: process.env.HOST || "localhost", 
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "",
    database: process.env.DATABASE || "hotel"
})

con.connect((err) => {
    if(err) throw err;
    console.log("Database connected successfully")
})

module.exports = {
    con
}