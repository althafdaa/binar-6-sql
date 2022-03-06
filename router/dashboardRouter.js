const express = require("express");
const { user_game_biodata, user_game_history } = require("../models");

const router = express.Router();

const addData = async (req, res) => {
  const { fullName, hobby, win, lose } = req.body;

  const fetchBio = await user_game_biodata.findAll();

  const newId = fetchBio[fetchBio.length - 1].userId + 1;

  await user_game_biodata.create({
    userId: newId,
    fullName,
    hobby,
  });

  await user_game_history.create({
    userId: newId,
    win,
    lose,
  });

  res.status(200).redirect(`/user/${newId}`);
};

const dashboardPage = async (req, res) => {
  const fetchBio = await user_game_biodata.findAll();
  const fetchHistory = await user_game_history.findAll();

  res.render("dashboard", {
    title: "Dashboard",
    bio: fetchBio,
    history: fetchHistory,
  });
};

router.route("/").get(dashboardPage).post(addData);

module.exports = router;
