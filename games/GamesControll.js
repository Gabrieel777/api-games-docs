const express = require("express");
const Game = require("./Game");
const router = express.Router();
const bodyParser = require("body-parser");

const DisplayDB = require("../classes/DisplayDB");
const InsertDB = require("../classes/InsertDB");
const DeleteDB = require("../classes/DeleteDB");
const UpdateDB = require("../classes/UpdateDB");
const jwt = require("jsonwebtoken");

// -JWT-

const JWTSecret = "zxtyrvwbytzwzxybvxzbtyrwxzvbwzxvytrwytrwwrzvbxzb";

function auth(req, res, next){
    const authToken = req.headers["authorization"];

    if(authToken != undefined) {

        const bearer = authToken.split(" ");
        const token = bearer[1];

        jwt.verify(token, JWTSecret, (err, data) => {
            if(err) {
                res.status(401);
                res.json({err: "Token Invalido"});
            } else {

                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};
                next();
            }
        })
    } else {
        res.status(401);
        res.json({err: "Token invalido!"});
    }
};

// - BodyParser -
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


router.get("/games", auth, (req, res) => {
    async function Main(){
        res.json(await DisplayDB.Display(Game))
        res.status(200);
    }
    Main();
    
});

router.get("/game/:id", auth, (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);

        async function Main(){
            let game = await DisplayDB.DisplayId(id, Game) 
            
            if(game != undefined) {
                res.json(game);
                res.status(200);
            } else {
                res.sendStatus(404);
            }

        }
        Main();
    }
}); 

router.post("/game", auth, (req, res) => {
    let {title, year, price} = req.body;

    if(title !=  undefined && year !=  undefined && price !=  undefined){    
        InsertDB.InsertGame(title, year, price);
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }

});

router.delete("/game/:id", auth, (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        let id = parseInt(req.params.id)

        async function Main(){
            const gameDelete = await DeleteDB.DeleteFind(id, Game);
            if(gameDelete != undefined) {
                await DeleteDB.Delete(id, Game);
                res.sendStatus(200)
            } else {
                res.sendStatus(404);
            }
        }
        Main()
    }
});

router.put("/game/:id", auth, (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);

        async function Main(){
            const game = await DisplayDB.DisplayId(id, Game)
            if(game != undefined){
                let {title, year, price} = req.body;

                await UpdateDB.UpdateGame(id, title, year, price);

                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
        }
        Main();

    }
});





module.exports = router;