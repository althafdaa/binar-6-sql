const userGame = require("../models").user_game;
const express = require("express");

const login = async (req, res) => {
  const { username, password } = req.body;

  const signIn = await userGame.findOne({
    where: {
      username,
      password,
    },
  });

  if (!signIn) {
    return res.status(400).json({
      message: "Wrong credentials",
    });
  }

  return res.status(200).redirect("/dashboard");
};

const loginPage = (req, res) => {
  res.render("login", { title: "Login Page" });
};

const router = express.Router();

router.route("/").get(loginPage).post(login);

module.exports = router;
