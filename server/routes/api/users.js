const express = require("express");
const { User } = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  invalidateToken,
  authMiddleware,
} = require("../../auth/auth.middleware");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { userValidation } = require("../../helpers/user.validator");
const { secretJwt } = require("../../config");
dotenv.config();

const secretKey = process.env.MAILER_KEY;

const mainTransporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "yummygoit.project4@gmail.com",
    pass: secretKey,
  },
  secure: true,
});

router.post("/signup", userValidation, async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log("email:", email, "password:", password);

    const user = await User.findOne({ email });

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const newUser = new User({ name, email, password: hash });
      await newUser.save();

      res.status(201).json({
        status: "Success",
        code: 201,
        user: {
          name,
          email,
        },
      });
    } else {
      res
        .status(409)
        .json({ status: "Conflict", code: 409, message: "Email in use" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login", "email:", email, "password:", password);
    const user = await User.findOne({ email });
    console.log(
      "Login2",
      "email:",
      user.email,
      "password:",
      user.password,
      "name",
      user.name
    );

    if (!user) {
      return res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: "Email or password is wrong",
      });
    } else {
      const passwordComparison = await bcrypt.compare(password, user.password);
      if (!passwordComparison) {
        return res.status(401).json({
          status: "Unauthorized",
          code: 401,
          message: "Email or password is wrong",
        });
      } else {
        console.log("user._id", user._id);
        const token = jwt.sign({ userId: user._id }, secretJwt, {
          expiresIn: "4w",
        });

        res.status(200).json({
          status: "Success",
          code: 200,
          message: "Successful login!",
          token,
          user: { name: user.name, email: user.email },
        });
      }
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

router.post("/logout", authMiddleware, (req, res) => {
  try {
    invalidateToken(req.token);
    res.status(200).json({
      message: "ok",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

router.get("/current", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const currentUserData = await User.findOne({ _id: userId });
    console.log("currentUserData:", currentUserData);
    if (!currentUserData) {
      return res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: "No data here",
      });
    } else {
      res.status(200).json({
        status: "OK",
        code: 200,
        currentUserData,
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

router.patch("/update", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    console.log("update userId:", userId);
    const user = await User.findOne({ _id: userId });
    console.log("user", user);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized: no user authentication" });
    }
    try {
      const { name } = req.body;
      user.name = name;
      await user.save();
      console.log("update 2 userId2:", user._id);
      console.log("log2", user);
      return res.status(200).send({
        status: "OK",
        code: 200,
        update: { name: user.name },
      });
    } catch (error) {
      console.error(error);
      return null;
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

router.patch("/subscribe", async (req, res) => {
  try {
    const email = req.body;

    const mailOptions = {
      from: "yummy.project4@gmail.com",
      // to: email,
      to: email, //edit to Variable "email" - current position 186
      subject: "So Yummy - NewsLetter",
      text: `You've been written as a users who want a newsletter!`,
    };
    try {
      const info = await mainTransporter.sendMail(mailOptions);
      console.log("The newsletter email has been sent:", info.response);
      return res.status(200).json({
        status: "OK",
        code: 200,
      });
    } catch (error) {
      console.log("Error while sending newsletter email:", error);
      return;
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

module.exports = router;
