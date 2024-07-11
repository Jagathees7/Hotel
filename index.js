const express = require("express");
const app = express();

require("dotenv").config()

const routes = require("./router/router");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/", routes)

app.listen(4000, (err) => {
    if(err) throw err;
    console.log("App is running on 4000")
})