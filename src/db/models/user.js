const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	id: String,
    login: String,
    password: String,
}, {versionKey: false});

mongoose.model("User", userSchema);