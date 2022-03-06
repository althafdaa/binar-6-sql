const express = require("express");
const { route } = require("../app");
const { user_game_biodata, user_game_history } = require("../models");

const router = express.Router();

const getById = async (req, res) => {
  const fetchBio = await user_game_biodata.findOne({
    where: {
      userId: req.params.userId,
    },
  });
  const fetchHistory = await user_game_history.findOne({
    where: {
      userId: req.params.userId,
    },
  });

  res.render("singleuser", { bio: fetchBio, history: fetchHistory });
};

const getEditData = async (req, res) => {
  const fetchBio = await user_game_biodata.findOne({
    where: {
      userId: req.params.userId,
    },
  });
  const fetchHistory = await user_game_history.findOne({
    where: {
      userId: req.params.userId,
    },
  });

  res.render("edit", {
    bio: fetchBio,
    history: fetchHistory,
  });
};

const deleteById = async (req, res) => {
  console.log(req.params.userId);
  await user_game_biodata.destroy({
    where: {
      userId: req.params.userId,
    },
  });
  await user_game_history.destroy({
    where: {
      userId: req.params.userId,
    },
  });
  res.status(200).redirect("/dashboard");
};

const updateDB = async (req, res) => {
  const { fullName, hobby } = req.body;
  const updateDb = async (data) => {
    await user_game_biodata.update(data, {
      where: {
        userId: req.params.userId,
      },
    });
  };
  const getById = await user_game_biodata.findOne({
    where: {
      userId: req.params.userId,
    },
  });
  if (!getById) {
    return res.stats(400).json({ message: "data tidak ditemukan" });
  }
  updateDb({ fullName, hobby });
  return res.redirect("/dashboard");
};

router.route("/:userId").get(getById);
router.route("/edit/:userId").put(updateDB).get(getEditData);
router.route("/delete/:userId").get(deleteById);
module.exports = router;
