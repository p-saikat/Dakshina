import { config } from "dotenv";
config();

export const envs = {
  port: Number(process.env.PORT) || 5001,

  devDB: {
    uri: process.env.MONGO_URI,
  },

  apiKey: process.env.API_KEY,

  jwt: {
    accessToken: {
      secret: process.env.ACCESS_TOKEN_SECRET,
      expiry: Number(process.env.ACCESS_TOKEN_EXPIRY) || 7200,
    },
  },
};
