import Sequelize from "sequelize";
import envs from 'dotenv';

const dotenv = envs.config();

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
  dialect: "mysql",
  host: process.env.DBHOST,
});

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to database");
  } catch (error) {
    console.log(error);
  }
};

export {sequelize, connectToDb }