const { model } = require("mongoose");
const Login = require("../Model/SignUp");

exports.login = (req, res) => {
  console.log(req.body);
  Login.find(
    { email: req.body.email, password: req.body.password },
    (err, login) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).json(login);
    }
  );
};
