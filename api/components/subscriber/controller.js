const { save } = require("../../../lib/mongo");
const Model = require("../../../models/subscriber");
const config = require("../../../config");
const jwt = require("jsonwebtoken");

/**
 * Returns a set of DB operations functions 
 * @param injectedStore - A DB instance
 * @return {Function}
 */

module.exports = function (injectedStore) {
  let store = injectedStore;
  /**
   * Saves a subscriber to the DB and return a JWT
   * @param {Object} subscriber - A subscriber Object
   * @return {String} token
   */
  function save(subscriber) {
    return new Promise(async (resolve, reject) => {
      try {
        await store.save(Model, subscriber);
        resolve(
          jwt.sign(
            {
              email: subscriber.email,
              firstName: subscriber.firstName,
              lastName: subscriber.lastName,
            },
            config.jwt.secret
          )
        );
      } catch (error) {
        reject(error);
      }
    });
  }
  return {
    save,
  };
};
