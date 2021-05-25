const Game = require("../games/Game");
const User = require("../users/User");

class UpdateDB {

    static async UpdateFind(id, database){
        try{
            const data = await database.findByPk(id)
            return data
        } catch (err){
            return undefined
        }
    }

    static async UpdateGame(id, title, year, price){
            try {  
                if(title != undefined){
                    Game.update({
                        title: title,
                    }, {
                        where: {
                            id: id
                        }
                    })   
                }
                if(year != undefined){
                    Game.update({
                        year: year,
                    }, {
                        where: {
                            id: id
                        }
                    })
                }
                if(price != undefined){
                    Game.update({
                        price: price
                    }, {
                        where: {
                            id: id
                        }
                    })
                }
                return true;
            } catch (err) {
                return undefined;
            }
    }

    static async UpdateUser(id, name, email, password){
        try {  
            if(name != undefined){
                User.update({
                    name: name,
                }, {
                    where: {
                        id: id
                    }
                })   
            }
            if(email != undefined){
                User.update({
                    email: email,
                }, {
                    where: {
                        id: id
                    }
                })
            }
            if(password != undefined){
                Game.update({
                    password: password
                }, {
                    where: {
                        id: id
                    }
                })
            }
            return true;
        } catch (err) {
            return undefined;
        }
}
}

module.exports = UpdateDB;