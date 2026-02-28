const User = require("../models/userModel")

exports.registerUser = async (req, res) => {
  try {
    const data = req.body

    if (!Object.keys(data).length) {
      return res.status(400).json({
        status: false,
        message: "Please provide user details"
      })
    }

    const user = await User.create(data)

    return res.status(201).json({
      status: true,
      message: "Success",
      data: user
    })
  } catch (err) {
    return res.status(400).json({
      status: false,
      message: err.message
    })
  }
}
exports.loginUser = async (req, res) => {
  try {
    res.status(200).json({
      status: true,
      message: "Login working"
    })
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message
    })
  }
}