  
const router = require("express").Router();

router.get("/exercise", (req, res) => {
    res.redirect("/exercise.html");
})

router.get("/stats", (req, res) => {
    res.redirect("/stats.html");
})

router.get("*", (req, res) => {
    res.redirect("/index.html")
})

module.exports = router;