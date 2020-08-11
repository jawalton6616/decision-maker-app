const dbuser = process.env.DB_USER || "decision-maker-db";
const dbpassword = process.env.DB_PASSWORD || "mernproj3";

const config = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "mkT23j#u!45",
  mongoURI:
    process.env.MONGODB_URI ||
    `mongodb://${dbuser}:${dbpassword}@ds241288.mlab.com:41288/heroku_1bf4z913`,
};

export default config;
