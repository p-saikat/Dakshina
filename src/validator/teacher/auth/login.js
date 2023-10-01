import { celebrate, Joi } from "celebrate";

export const login = celebrate({
  body: Joi.object({
    email: Joi.string()
      .required()
      .regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    password: Joi.string().required(),
  }),
});
