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
  mailChimp: {
    url: process.env.MAILCHIMP_URL,
    key: process.env.MAILCHIMP_KEY,
    audience: process.env.MAILCHIMP_AUDIENCE,
  },
};
