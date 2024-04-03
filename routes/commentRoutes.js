const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const router = express.Router()


const CommentSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    movie_id: String,
    date: Date,
    text: String
})

const CommentModel = mongoose.model("comments", CommentSchema)

// app.get("/getComments", (req, res) => {
//     CommentModel.find({}).then(function(comments) {
//         res.json(comments)
//     }).catch(function(err) {
//         console.log(err)
//     })
// })

app.get("/getComments", async (req, res) => {
    try {
        // Query all comments
        const comments = await CommentModel.find({});
        res.json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router