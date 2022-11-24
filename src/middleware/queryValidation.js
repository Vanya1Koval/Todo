const joi = require('joi'); 

const querySchema = joi.object({ 
    limit: joi.number().integer().positive(),
    page: joi.number().integer().positive(),
    from: joi.date()
});

/**
  *query validation
  */
const validation = () => async (req, res, next) => {
    try {
        await querySchema.validateAsync(req.query);
        next();
    } catch (err){
        res.status(400).send(err.details);
    }
}

module.exports = validation;