const router = require("express").Router();
const { request } = require("express");
const Post = require("../models/Post.js");

//create 
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update
router.put("/:id", async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({$set:req.body});
            res.status(200).json("Postagem atualizada com sucesso");
        } else {
            res.status(403).json("você pode atualizar apenas a sua postagem");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete
router.delete("/:id", async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("Postagem deletada com sucesso");
        } else {
            res.status(403).json("você pode excluir apenas a sua postagem");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//liked, curtir post
router.put("/:id/like", async (req, req) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("Post curtido com sucesso");
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("O post foi curtido");
        }

    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;