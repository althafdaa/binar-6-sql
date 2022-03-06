const express = require("express");
const app = express();
const methodOverride = require("method-override");
const userRouter = require("./router/userRoute");
const loginRouter = require("./router/loginRoute");
const dashboardRouter = require("./router/dashboardRouter");
const singleUserRouter = require("./router/singleUserRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");

app.use("/api/v1/users", userRouter);
app.use("/login", loginRouter);
app.use("/dashboard", dashboardRouter);
app.use("/user", singleUserRouter);

module.exports = app;
