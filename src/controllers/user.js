require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const {
    createUser,
    getUserByLogin,
} = require('../services/user');

const salt = bcrypt.genSaltSync(10);

const signup = async (req, res) => {
    try {
        const { login, password } = req.body;
        const user = await getUserByLogin(login);
        if (user) {
            return res.status(400).send(`user with login ${login} already exist`);
        }
        const createdUser = await createUser({
            login,
            password: bcrypt.hashSync(password, salt),
        });
        return res.status(201).send(createdUser);
    } catch (err) {
        console.log('Signup - Cannot create user', err);
        return res.status(400).send({ status: 400, message: 'Cannot create user' });
    }
};

const login = async (req, res) => {
    try {
        const { login, password } = req.body;
        const user = await getUserByLogin(login);
        if (!user) {
            return res.status(400).send(`user with login ${login} doesn't exist`);
        }
        const validate = bcrypt.compareSync(password, user.password);
        if (!validate) {
            return res.status(400).send(`wrong password`);
        }
        const { _id } = user;
        const token = jwt.sign({ _id }, JWT_SECRET);
        return res.json({token: token});
    } catch (err) {
        console.log('Login', err);
        return res.status(400).send({ status: 400, message: 'Log in failed' });
    }
};


module.exports = { 
    signup, 
    login
 };