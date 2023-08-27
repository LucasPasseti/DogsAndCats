const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("testando auth routes")
})

module.exports = router