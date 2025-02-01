
const Joi = require ( 'joi');

function validateData (data, schema) {
    
    const { error, value } =  schema.validate(data);
    if (error) {
        
        throw new  Error(`Validation error:  ${error.details.map(detail =>  detail.message).join(', ')}`);
    }
    return value;
}

module.exports = { validateData };
