import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BAJARDOR_AUTH_URL);
const db = client.db("BAZER-DOR-DATABASE");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_GOOGLE_CLENT_ID,
      clientSecret: process.env.BETTER_AUTH_GOOGLE_CLINENT_SECRECT,
    },
    github: {
      clientId: process.env.BETTER_AUTH_GITHUB_CLENT_ID,
      clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
