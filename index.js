require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5500;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Express Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Import Routes
const userRoutes = require("./routes/userRoutes");
const comments = require("./routes/commentRoutes");
const movieRoutes = require("./routes/movieRoutes");

app.use(express.json());
app.use("/users", userRoutes);
app.use("/comments", comments);
app.use("/movies", movieRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the Server
app.listen(PORT, () => console.log("Server started on port", PORT));
