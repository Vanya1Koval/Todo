const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
	  id: String,
    title: String,
    description: String,
    createdAt: Date,
    deadline: Date,
}, {versionKey: false});

mongoose.model("ToDo", toDoSchema);