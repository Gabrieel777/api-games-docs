const express = require("express");
const cors = require("cors");
const app = express();

const connection = require("./database/database");
const UsersControll = require("./users/UsersControll");
const GamesControll = require("./games/GamesControll");


// - Cors -

app.use(cors());


// - Controllers -

app.use("/", UsersControll);

app.use("/", GamesControll);


// - DataBase Connection-

connection
    .authenticate()
    .then( () => {
        console.log("- successful connection to the database -");
    })
    .catch((err) => {
        console.log(err);
    });


// - Server - 

app.listen(4000, () => {
    console.log("- api rest running successfully -")
}) 