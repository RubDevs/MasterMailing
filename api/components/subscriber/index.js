const controller = require("./controller");
const config = require("../../../config");

let store;

if (config.dev) {
  //Dummy when development or test
  store = require("../../../lib/mongo");
} else {
  //Mongo when production
  store = require("../../../lib/mongo");
}

//Dependency Injection
module.exports = controller(store);
