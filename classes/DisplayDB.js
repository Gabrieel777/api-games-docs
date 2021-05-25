const Game = require("../games/Game");
const User = require("../users/User");

class DisplayDB {

    static async Display(database){
        try{
            const games = await database.findAll()
            return games;
        } catch (err){
            return undefined
        }
        
    }

    static async DisplayId(id, database){
        try{
            const game = await database.findByPk(id)
            return game
        } catch (err){
            return undefined
        }
    }
}

module.exports = DisplayDB;
