const Joi = require('joi');

const validator =(schema)=>(payload)=> schema.validate(payload, {abortEarly:false});


const SignUpSchema = Joi.object({
    name:Joi.string().min(4).required(),
    email:Joi.string().email().required(),
    username:Joi.string().min(7).required(),
    password:Joi.string().min(6).max(30).required(),
})

const SignInSchema = Joi.object({
    name:Joi.string().min(4).required(),
    password:Joi.string().min(6).max(30).required(),
})




exports.ValidateSignUp= validator(SignUpSchema);
exports.ValidateSignIn = validator(SignInSchema);
