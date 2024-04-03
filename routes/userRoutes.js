const express = require("express")
const mongoose = require("mongoose")
const app = express()
const router = express.Router()

const UserSchema = new mongoose.Schema({
    name: String,
    email: String
})

const UserModel = mongoose.model("users", UserSchema)

// app.get("/getUsers", (req, res) => {
//     UserModel.find({}).then(function(users) {
//         res.json(users)
//     }).catch(function(err) {
//         console.log(err)
//         res.status(500).send("Internal Server Error");
//     })
// })

app.get("/getUsers", async (req, res) => {
    try {
        // Query all users
        const users = await UserModel.find({});
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router