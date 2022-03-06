const express = require("express");
const userGame = require("../models").user_game;

const router = express.Router();

const getAllUsers = async (req, res) => {
  const data = await userGame.findAll();

  res.status(200).json({
    data: data,
  });
};

router.route("/").get(getAllUsers);

module.exports = router;
