const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

//update
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Conta atualizada com sucesso");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Você pode atualizar somente sua conta");
    }
});

//delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Conta excluida com sucesso");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Você pode excluir somente sua conta");
    }
});

//get user
router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId 
        ? await User.findById(userId) 
        : await User.findOne({username: username});
        const { password, updatedAt, ...other } = user._doc
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
});

//follow user
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
    try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (!user.followers.includes(req.body.userId)) {
            await user.updateOne({ $push: { followers: req.body.userId } });
            await currentUser.updateOne({ $push: { followings: req.params.id } });
            res.status(200).json("Usúario seguido com sucesso");
        } else {
            res.status(403).json("Você já segue este usuário");
        }
    } catch (err) {
        res.status(500).json(err);
    }

    } else {
        res.status(403).json("você não pode seguir a si mesmo");
    }
})

//unfollow user
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
    try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (user.followers.includes(req.body.userId)) {
            await user.updateOne({ $pull: { followers: req.body.userId } });
            await currentUser.updateOne({ $pull: { followings: req.params.id } });
            res.status(200).json("Você parou de seguir o Usuário");
        } else {
            res.status(403).json("Você não segue este usuário");
        }
    } catch (err) {
        res.status(500).json(err);
    }

    } else {
        res.status(403).json("você não pode parar de seguir a si mesmo");
    }
})

module.exports = router;