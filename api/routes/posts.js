const router = require("express").Router();
const { request } = require("express");
const Post = require("../models/Post.js");
const User = require("../models/User.js");

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

//liked, deslike post
router.put("/:id/like", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("Post curtido com sucesso");
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("O post foi descurtido");
        }

    }catch(err){
        res.status(500).json(err);
    }
});

//get post
router.get("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
        }catch(err) {
        res.status(500).json(err);
    }
});

//get timeline posts
router.get("/timeline/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(req.params.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.status(200).json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(500).json(err);
    }
  });

//get user's all posts

router.get("/profile/:username", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      const posts = await Post.find({ userId: user._id });
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;