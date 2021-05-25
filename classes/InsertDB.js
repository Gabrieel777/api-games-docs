const Sequelize = require("sequelize");
const Game = require("../games/Game");
const User = require("../users/User");

class InsertDB{

    static async InsertGame(title, year, price){
        try{
            await Game.create({
                title: title,
                year: year,
                price: price
            })
            return true;
        } catch (err) {
            return err;
        }
    }

    static async InsertUser(name, email, hash){
        try{
            await User.create({
                name: name,
                email: email,
                password: hash
            })
            return true;
        } catch (err) {
            return err;
        }
    }
}

module.exports = InsertDB;