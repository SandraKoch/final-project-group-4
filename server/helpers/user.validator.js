const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userValidation = (req, res, next) => {
  const newUser = req.body;
  const { error } = userSchema.validate(newUser);
  console.log("userValidationSuccess");

  if (error) {
    return res
      .status(400)
      .json({ message: "User validation error" })
      .send({ error: error.message });
  }
  return next();
};

module.exports = { userValidation };
