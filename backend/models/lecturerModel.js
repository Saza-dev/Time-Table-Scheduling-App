import {sequelize} from "../config/db.js"
import { DataTypes } from "sequelize"

const Lecturer = sequelize.define("Lecturer",{
    lecid: {
        primaryKey: true,
        type: DataTypes.STRING,
    },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     contactDetails:{
        type: DataTypes.INTEGER,
        allowNull: false,
     }

})

sequelize.sync();
export default Lecturer;