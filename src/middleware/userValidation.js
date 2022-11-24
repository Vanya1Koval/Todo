const joi = require('joi'); 

const userSchema = joi.object({ 
    login: joi.string().min(5).max(10).required(),
    password: joi.string().min(5).max(10).required(),
});
    
/**
  * user validation
  */
const validation = () => async (req, res, next) => {
    try {
        await userSchema.validateAsync(req.body);
        next();
    } catch (err){
        res.status(400).send(err.details);
    }
}

module.exports = validation;