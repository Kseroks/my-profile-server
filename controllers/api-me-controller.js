const Description = require("../modules/me");

const handleError = (res, error) => {
  res.status(500).send(error.message);
};

const descriptionControl = {
  getDescription: (req, res) => {
    Description.find()
      .then((info) => res.status(200).json(info))
      .catch((error) => handleError(res, error));
  },
};

module.exports = descriptionControl;
