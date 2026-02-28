require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const router = require("./src/router")

const app = express()
app.use(express.json())

const uri = process.env.MONGO_URI
const PORT = process.env.PORT || 3000
mongoose.connect(uri)
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err))

app.use("/", router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})