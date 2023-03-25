const { Router } = require("express");
const User = require("../models/User");
const Complaint = require("../models/Complaint");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../utils/verifyToken");

const router = Router();
const API_VERSION = "/api/v1";

router.post(`${API_VERSION}/register`, async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  const user = await User.findOne({ email });
  if (user) {
    return res.status(401).send("The email is registered");
  }

  await newUser.save();
  const token = jwt.sign({ _id: newUser._id }, "secretkey");
  res.status(200).json({ token });
});

router.post(`${API_VERSION}/login`, async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send("The email doesn't exist");
  }

  if (user.password !== password) {
    return res.status(401).send("Wrong password");
  }

  const token = jwt.sign({ _id: user._id }, "secretkey");
  return res.status(200).json({ token });
});

router.get(`${API_VERSION}/complaint`, verifyToken, async (req, res) => {
  const complaintData = await Complaint.find();
  return res.status(200).json({ complaintData });
});

router.post(`${API_VERSION}/complaint`, async (req, res) => {
  const { name, type, domicile, colony, phone, sector, zone, comment, status } =
    req.body;

  const newComplaint = new Complaint({
    name,
    type,
    domicile,
    colony,
    phone,
    sector,
    zone,
    comment,
    status,
  });

  await newComplaint.save();
  res.status(200).json({ newComplaint });
});

module.exports = router;
