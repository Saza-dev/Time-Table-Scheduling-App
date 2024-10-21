import {sequelize} from "../config/db.js"
import { DataTypes } from "sequelize"

const login = sequelize.define("Login",{
    userID: {
        primaryKey: true,
        type: DataTypes.STRING,
    },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     role:{
        type: DataTypes.STRING,
        allowNull: false,
     }

})

sequelize.sync();
export default login;