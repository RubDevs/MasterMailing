module.exports = (req) => {
  const data = {
    members: [
      {
        email_address: req.email,
        status: "subscribed",
        merge_fields: {
          FNAME: req.fname,
          LNAME: req.lname,
        },
      },
    ],
  };
  return data;
};
