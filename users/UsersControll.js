const express = require("express");
const User = require("./User");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
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

const DisplayDB = require("../classes/DisplayDB");
const InsertDB = require("../classes/InsertDB");
const DeleteDB = require("../classes/DeleteDB");
const UpdateDB = require("../classes/UpdateDB");

// -- BodyParser -- 

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get("/users", auth, (req, res) => {
    async function Main(){
        res.json(await DisplayDB.Display(User));
        res.status(200);
    }
    Main();
})

router.get("/user/:id", auth, (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);

        async function Main(){
            let user = await DisplayDB.DisplayId(id, User);

            if(user != undefined){
                res.json(user);
                res.status(200);
            } else {
                res.sendStatus(400);
            }
        }
        Main();
    }
})

router.post("/user", auth, (req, res) => {
    let {name, email, password} = req.body;

    if(name != undefined && email != undefined && password != undefined){
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

        InsertDB.InsertUser(name, email, hash);
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

router.post("/auth", (req, res) => {
    let {email, password} = req.body;

    if(email != undefined && password != undefined){
        async function Main(){
            try{
                let user = await User.findOne({where:{email: email}});

                if(user != undefined){
                    let correct = bcrypt.compareSync(password, user.password);
                    if(correct){

                        jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn: "48h"}, (err, token) => {
                            if(err){
                                res.status(400);
                                res.json({err: "Falha interna!"});
                            } else {
                                res.status(200);
                                res.json({token: token});
                            }
                        });
                        
                    } else {
                        res.status(404);
                        res.json({err: "A senha está incorreta!"})
                    }
                } else {
                    res.json({err: "O e-mail não existe na base de dados!"})
                    res.status(404);
                }

            } catch {

            }
        }
        Main();
    } else {
        res.json({err: "O e-mail ou a senha são inválidos !"})
        res.status(400);
    };

});

router.delete("/user/:id", auth, (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id)

        async function Main(){
            let user = await DisplayDB.DisplayId(id, User)
            if(user != undefined){
                DeleteDB.Delete(id, User);
                res.sendStatus(200);
            } else{
                res.sendStatus(400);
            }
        }
        Main();
    }
});

router.put("/user/:id", auth, (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id)

        async function Main(){
            const user = await DisplayDB.DisplayId(id, User);
            console.log(user)
            if(user != undefined){
                let {name, email, password} = req.body;

                await UpdateDB.UpdateUser(id, name, email, password);
                
                res.sendStatus(200);
            }else{
                res.sendStatus(400);
            }
        }
        Main();
    }

});

module.exports = router;