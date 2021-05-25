const Game = require("../games/Game");
const User = require("../users/User");

class DeleteDB {

    static async DeleteFind(id, database){
        try{
            const gameDelete = await database.findByPk(id)
            return gameDelete
        } catch (err){
            return undefined
        }
    }

    static async Delete(id, database){
        try{
            await database.destroy({
                where: {
                    id: id
                }
            })
            return true;
        } catch (err) {
            return undefined;
        }
    }

}

module.exports = DeleteDB;