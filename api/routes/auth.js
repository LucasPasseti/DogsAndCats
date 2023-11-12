const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

router.post("/register",  async (req, res) => {

    try{
        // gerando senha
        const salt = await bcrypt.genSalt(10); //colocando um salt no bcrypt
        const hashedPassword = await bcrypt.hash(req.body.password, salt); //utilizando o bcrypts no password 

        //puxando o User da model e Criando um User com os dados
        const newUser =  new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword, // passando o password criptografado 
        });

        // salvando o User criado e retornando uma resposta
        const user = await newUser.save();
        res.status(200).json(user);
        
    }catch(err){
        console.log(err)
    };
});

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");
  
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(400).json("wrong password")
  
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  });

module.exports = router