const express = require("express");

const router = express.Router();
const Controller = require("./index");
const validation = require("../../middlewares/validation");

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

router.post("/send", validation, (req, res) => {
  //Request to Mailchimp API
  res.send("Validated");
});

module.exports = router;
