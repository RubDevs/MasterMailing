require("dotenv").config();

module.exports = {
  mongo: {
    url: process.env.MONGO_URL,
  },
  api: {
    port: process.env.PORT,
  },
  dev: process.env.NODE_ENV != "production",
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
