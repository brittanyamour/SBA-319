const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const router = express.Router()


const MovieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    year: Number,
    fullplot: String,
})

const MovieModel = mongoose.model("movies", MovieSchema)

// app.get("/getMovies", (req, res) => {
//     MovieModel.find({}).then(function(movies) {
//         res.json(movies)
//     }).catch(function(err) {
//         console.log(err)
//     })
// })

app.get("/getMovies", async (req, res) => {
    try {
        // Query all movies
        const movies = await MovieModel.find({});
        res.json(movies);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router