const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const todoRoutes = require("./routes/todoRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,
    { 
        useNewUrlParser: true, useUnifiedTopology: true 
    })
    .then(() => console.log("MongoDB connecte "))
    .catch(err => console.error(" Erreur MongoDB:", err));

app.use("/ api / todos ", todoRoutes);
app.use("/ api / auth ", authRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(" Serveur demarre sur le port ", PORT));
