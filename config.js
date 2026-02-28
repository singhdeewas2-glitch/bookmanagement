const dotenv = require("dotenv")
dotenv.config()
const uri = process.env.MongoDB
const port = process.env.PORT
module.exports = { uri, port }