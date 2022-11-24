const ToDo = require("../db/models/toDo.js");
const { default: mongoose } = require("mongoose");

ToDoModel = mongoose.model('ToDo');

/**
  * Create record
  * @param  {Object} payload object with fields for creating record
  * @returns {Object} created record of todo
  */
const createToDo = async (payload) => ToDoModel.create(payload);

/**
  * Finds all records
  * @param  {Number} limit number of records to get
  * @param  {Number} skip number of records to skip
  * @param  {Number} from filter by date
  * @returns {Array} records of todo
  */
const getToDos = async (limit, skip, from) => {
    return ToDoModel.find(from ? {deadline: {$gte : from}} : null)
    .limit(limit)
    .skip(skip);
}

/**
  * Delete record by id
  * @param  {String} id  uniq id of the record
  * @returns {Object} deleted todo
  */
const deleteToDo = async (id) => ToDoModel.findOneAndDelete({_id: `${id}`});

/**
  * Update record by id
  * @param  {String} id uniq id of the record
  * @param  {String} title todo title
  * @param  {String} description todo description
  * @returns {Object} updated todo
  */
const updateToDo = async (id, title, description, deadline) => {
    return ToDoModel.findOneAndUpdate({_id: `${id}`},
    { $set: { title, description, deadline }},
        {returnOriginal: false}
    )
};

module.exports = {
    createToDo,
    getToDos,
    deleteToDo,
    updateToDo
};