const joi = require('joi'); 

const toDoSchema = joi.object({ 
    title: joi.string().min(3).required(),
    description: joi.string().min(3).required(), 
    deadline: joi.date().required(), 
});
    
/**
  * todo validation
  */
const validation = () => async (req, res, next) => {
    try {
        await toDoSchema.validateAsync(req.body);
        next();
    } catch (err){
        res.status(400).send(err.details);
    }
}

module.exports = validation;