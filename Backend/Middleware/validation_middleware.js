const { z } = require('zod')
const validationSchema = require('../Validation/validation.js')


async function validation_middleware (req,res,next){
    try {
        // Parse and validate the request body
        await validationSchema.parse(req.body);
        
        // If no errors, proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If validation fails, return the error details
        return res.status(400).json(error.errors);
    }
}

module.exports = validation_middleware
