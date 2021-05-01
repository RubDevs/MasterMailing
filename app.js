const express = require("express");
const cors = require("cors");

const config = require("./config");
const subscriber = require("./api/components/subscriber/network");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/subscriber", subscriber);

app.listen(config.api.port, () => {
  console.log(`API listening on port: ${config.api.port}`);
});
