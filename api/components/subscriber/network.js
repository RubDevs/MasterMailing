const express = require("express");

const router = express.Router();
const Controller = require("./index");
const validation = require("../../middlewares/validation");
const superagent = require("superagent");
const config = require("../../../config");
const mailChimpData = require("../../../utils/mailChimpData");

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
  const data = mailChimpData(req);
  const url = `${config.mailChimp.url}/${config.mailChimp.audience}`;
  superagent
    .post(url)
    .send(data)
    .set("Authorization", `Bearer ${config.mailChimp.key}`)
    .then(() => {
      //console.log(response);
      res.status(200).send({ message: "Done" });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
});

module.exports = router;
