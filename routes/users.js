const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("testando user routes")
})

module.exports = router