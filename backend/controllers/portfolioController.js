const Contact = require("../model/contactModel");
const mongoose = require("mongoose");

const sendEmailController = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name) {
    return res.send({ message: "name is required" });
  }
  if (!email) {
    return res.send({ message: "email is required" });
  }
  if (!message) {
    return res.send({ message: "message is required" });
  }

  const newUser = await Contact.create({
    name,
    email,
    message,
  });

  try {
    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
