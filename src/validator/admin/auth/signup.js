import { celebrate, Joi } from "celebrate";
import joiDate from "@joi/date";

const JoiDate = Joi.extend(joiDate);

export const signup = celebrate({
  body: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    dob: JoiDate.date().format("DD-MM-YYYY").required(),
    email: Joi.string()
      .required()
      .regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    gender: Joi.string().valid("m", "f", "o"),
    phone1: Joi.string().required(),
    calling_code1: Joi.string().required(),
    password: Joi.string().required(),
  }),
});
