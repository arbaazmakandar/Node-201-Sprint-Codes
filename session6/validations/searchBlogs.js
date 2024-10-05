const Joi = require("joi");


//This is schema for Query Parameters validations
const schema = Joi.object({
  title: Joi.string(),
  author: Joi.string().email(),
}).or("title", "author");

module.exports = schema;