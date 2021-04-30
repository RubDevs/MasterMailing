const express = require("express");

const router = express.Router();
const Controller = require("./index");

router.post("/register", function (req, res) {
  const { subscriber } = req.body;
  Controller.save(subscriber)
    .then((token) => {
      res.status(200).send({ token });
    })
    .catch((error) => {
      res.status(400).send({ error: error.message });
    });
});

module.exports = router;
