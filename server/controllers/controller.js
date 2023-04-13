const { Product, Category, Images, User, sequelize } = require("../models");
const { compare } = require("../helpers/bcrypt");
const { token } = require("../helpers/jwt");

class Controller {
  static async register(req, res, next) {
    try {
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "Admin",
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
      });

      res.status(201).json({
        message: "Account created",
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "EmailorPasswordRequired" };

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "EmailorPasswordRequired" };

      const checkPass = compare(password, user.password);
      if (!checkPass) throw { name: "EmailorPasswordRequired" };

      const payload = { id: user.id };

      const access_token = token(payload);

      res.status(200).json({
        access_token,
        id: user.id,
        name: user.username,
        role: user.role,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
