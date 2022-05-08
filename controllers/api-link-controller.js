const Link = require("../modules/links");

const handleError = (res, error) => {
  res.status(500).send(error.message);
};

const linkControl = {
  getLink: (req, res) => {
    Link.find()
      .then((link) => res.status(200).json(link))
      .catch((error) => handleError(res, error));
  },
};

module.exports = linkControl;
