const userModel = require("../../Module/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { password, email, userName } = req.body;
  try {
    let result = await userModel.findOne({
      $or: [{ email }, { password }],
    });
    if (result) {
      return res.status(400).json({
        status: false,
        message: "user already exist",
      });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    let user = await userModel.create({
      ...req.body,
      password: hashedPassword,
    });
    return res.status(200).json({
      data: result,
      message: "User Created Successfully",
    });
  } catch (error) {
    res.status(400).send({
      message: "User Creation Failed",
      error: error.message,
    });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: false,
        message: "Invalid password",
      });
    }
    const token = jwt.sign({ email }, process.env.TOKEN_KEY, {
      expiresIn: "1h",
    });
    return res.status(200).json({
      status: true,
      message: "Login successful",
      token: token,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error occurred",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
};
