const {
    createToDo,
    getToDos,
    deleteToDo,
    updateToDo
} = require('../services/toDo');

const createToDoAction = async (req, res) => {
    try {
        const { title, description, deadline } = req.body;

        const createdToDo = await createToDo({
            title,
            description,
            createdAt: Date.now(),
            deadline,
        });

        return res.status(201).send(createdToDo);
    } catch (err) {
        console.log('Create todo Action - Cannot create todo', err);
        return res.status(400).send({ status: 400, message: 'Cannot create todo' });
    }
};

const getToDosAction = async (req, res) => {
    try {
        const { limit, page, from } = req.query;
        const skip = (page - 1) * limit;
        const ToDos = await getToDos(limit, skip, from);

        return res.status(201).send(ToDos);
    } catch (err) {
        console.log('Get todo Action - Cannot get todos', err);
        return res.status(400).send({ status: 400, message: 'Cannot get todo' });
    }
};

const deleteToDoAction = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteToDo(id);
        return res.status(201).send(`Todo with id ${id} was deleted`);
    } catch (err) {
        console.log('Delete todo Action - Cannot delete todo', err);
        return res.status(400).send({ status: 400, message: 'Cannot delete todo' });
    }
}

const updateToDoAction = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, deadline } = req.body;
        const updatedToDo = await updateToDo(id, title, description, deadline);
        return res.status(201).send(updatedToDo);
    } catch (err) {
        console.log('Update todo Action - Cannot update todo', err);
        return res.status(400).send({ status: 400, message: 'Cannot update todo' });
    }
}

module.exports = { 
    createToDoAction, 
    getToDosAction,
    deleteToDoAction,
    updateToDoAction
 };