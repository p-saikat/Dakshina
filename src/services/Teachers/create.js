import { Teachers } from "../../models/index.js";

export const create = async (params) => {
  const data = await Teachers.create(params);
  return data;
};
