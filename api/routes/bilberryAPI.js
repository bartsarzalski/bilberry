const bilberryAPI = require('../demo');
const inst = new bilberryAPI.API();


var express = require("express");
var router = express.Router();

router.get("/courses", (req, res, next) => {
    inst.getData().then(res.send.bind(res));
});

console.log(inst.getData());
/* router.post("/courses", (req, res) => {
    inst.addData();
    res.send(`The course has been added.`)
}); */

router.delete("/courses/:userId", (req, res) => {
    res.send(`The course with id ${req.params.userId} has been deleted.`)
});

module.exports = router;