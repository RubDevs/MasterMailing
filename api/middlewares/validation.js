const jwt = require("jsonwebtoken");
const config = require("../../config");

/**
 * Verifies if a token is valid
 */
function middleware(req, res, next) {
  const { token } = req.body;
  jwt.verify(token, config.jwt.secret, (error, decoded) => {
    if (!error) {
      const email = decoded.email;
      req["email"] = email;
      (req["fname"] = decoded.firstName), (req["lname"] = decoded.lastName);
      next();
    } else {
      res.status(400).send({ error: "Invalid Token" });
    }
  });
}
module.exports = middleware;
